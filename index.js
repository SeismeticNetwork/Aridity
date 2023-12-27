import createRammerhead from "rammerhead/src/server/index.js";
import { fileURLToPath } from "node:url";
import { createBareServer } from "@tomphttp/bare-server-node";
import { createServer } from "node:http";
import { hostname } from "node:os";
import serveStatic from "serve-static";
import connect from "connect";
import path from "node:path";
import express from "express";

const app = express();
const __dirname = process.cwd();
const rh = createRammerhead();
const server = createServer();
const bareServer = createBareServer('/bare/');

const dynamicPath = './dynamic';

const rammerheadScopes = [
	"/rammerhead.js",
	"/hammerhead.js",
	"/transport-worker.js",
	"/task.js",
	"/iframe-task.js",
	"/worker-hammerhead.js",
	"/messaging",
	"/sessionexists",
	"/deletesession",
	"/newsession",
	"/editsession",
	"/needpassword",
	"/syncLocalStorage",
	"/api/shuffleDict"
];
const rammerheadSession = /^\/[a-z0-9]{32}/;
function shouldRouteRh(req) {
	const url = new URL(req.url, "http://0.0.0.0");
	return (
	  rammerheadScopes.includes(url.pathname) ||
	  rammerheadSession.test(url.pathname)
	);
  }
  
  function routeRhRequest(req, res) {
	rh.emit("request", req, res);
  }

  function routeRhUpgrade(req, socket, head) {
	rh.emit("upgrade", req, socket, head);
  }

app.use((req, res, next) => {
    if(shouldRouteRh(req)) rh.emit("request", req, res); else next();
});

app.use(express.static("./static"));
app.use("/dynamic/", express.static(dynamicPath))

server.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
      } else if (shouldRouteRh(req)) {
        routeRhRequest(req, res);
      } else {
        app(req, res);
      }
  });

server.on("upgrade", (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
      } else if (shouldRouteRh(req)) {
        routeRhUpgrade(req, socket, head);
      }
});

server.on("listening", () => {
  const addr = server.address();
  console.log('\x1b[31m%s\x1b[0m', 'Aridity is in Early Beta and errors may occur!')
  console.log('\x1b[32m%s\x1b[0m', 'Using Version 1.2 Public BETA');
  console.log("");
  console.log('\x1b[33m%s\x1b[0m',`Server running on port ${addr.port}`)
  console.log("");
  console.log("You can now view it in your browser.")
  console.log('\x1b[35m%s\x1b[0m', `Local: http://${addr.family === "IPv6" ? `[${addr.address}]` : addr.address}${addr.port === 80? "" : ":" + addr.port}`);
  console.log('\x1b[35m%s\x1b[0m', `Local: http://localhost${addr.port === 80? "" : ":" + addr.port}`);
  try { console.log('\x1b[35m%s\x1b[0m', `On Your Network: http://${hostname()}${addr.port === 80? "" : ":" + addr.port}`); } catch (err) {/* Can't find LAN interface */};
});

server.listen({ port: process.env.PORT || 3000 })