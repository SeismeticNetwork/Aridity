let ProxyToSave 
let ThemeID

const DefaultProxy = 'RH'
const DefaultTheme = 'Classic'

let X = 2

function RequestProxyChange() {
    const button = document.getElementById('switchP')
    if (X == 3) {
        button.textContent = 'Ultraviolet (Click To Switch)'
        X = 1
        ProxyToSave = 'Ultraviolet'
    } else if (X == 2) {
        button.textContent = 'Dynamic (Click To Switch)'
        X = 3
        ProxyToSave = 'Dynamic'
    } else if (X == 1) {
        button.textContent = 'Rammerhead (Click To Switch)'
        X = 2
        ProxyToSave = 'RH'
    }
}

function ApplyChanges() {
    localStorage.setItem('Proxy', ProxyToSave || DefaultProxy)
}