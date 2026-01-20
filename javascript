// Element database with electron configurations
const elements = {
    H: { name: "Hydrogen", atomicNumber: 1, config: "1s¹", electrons: 1 },
    He: { name: "Helium", atomicNumber: 2, config: "1s²", electrons: 2 },
    Li: { name: "Lithium", atomicNumber: 3, config: "1s² 2s¹", electrons: 3 },
    Be: { name: "Beryllium", atomicNumber: 4, config: "1s² 2s²", electrons: 4 },
    B: { name: "Boron", atomicNumber: 5, config: "1s² 2s² 2p¹", electrons: 5 },
    C: { name: "Carbon", atomicNumber: 6, config: "1s² 2s² 2p²", electrons: 6 },
    N: { name: "Nitrogen", atomicNumber: 7, config: "1s² 2s² 2p³", electrons: 7 },
    O: { name: "Oxygen", atomicNumber: 8, config: "1s² 2s² 2p⁴", electrons: 8 },
    F: { name: "Fluorine", atomicNumber: 9, config: "1s² 2s² 2p⁵", electrons: 9 },
    Ne: { name: "Neon", atomicNumber: 10, config: "1s² 2s² 2p⁶", electrons: 10 },
    Na: { name: "Sodium", atomicNumber: 11, config: "1s² 2s² 2p⁶ 3s¹", electrons: 11 },
    Mg: { name: "Magnesium", atomicNumber: 12, config: "1s² 2s² 2p⁶ 3s²", electrons: 12 },
    Al: { name: "Aluminum", atomicNumber: 13, config: "1s² 2s² 2p⁶ 3s² 3p¹", electrons: 13 },
    Si: { name: "Silicon", atomicNumber: 14, config: "1s² 2s² 2p⁶ 3s² 3p²", electrons: 14 },
    P: { name: "Phosphorus", atomicNumber: 15, config: "1s² 2s² 2p⁶ 3s² 3p³", electrons: 15 },
    S: { name: "Sulfur", atomicNumber: 16, config: "1s² 2s² 2p⁶ 3s² 3p⁴", electrons: 16 },
    Cl: { name: "Chlorine", atomicNumber: 17, config: "1s² 2s² 2p⁶ 3s² 3p⁵", electrons: 17 },
    Ar: { name: "Argon", atomicNumber: 18, config: "1s² 2s² 2p⁶ 3s² 3p⁶", electrons: 18 },
    K: { name: "Potassium", atomicNumber: 19, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹", electrons: 19 },
    Ca: { name: "Calcium", atomicNumber: 20, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", electrons: 20 },
    Sc: { name: "Scandium", atomicNumber: 21, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹", electrons: 21 },
    Ti: { name: "Titanium", atomicNumber: 22, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d²", electrons: 22 },
    V: { name: "Vanadium", atomicNumber: 23, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³", electrons: 23 },
    Cr: { name: "Chromium", atomicNumber: 24, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵", electrons: 24 },
    Mn: { name: "Manganese", atomicNumber: 25, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵", electrons: 25 },
    Fe: { name: "Iron", atomicNumber: 26, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶", electrons: 26 },
    Co: { name: "Cobalt", atomicNumber: 27, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁷", electrons: 27 },
    Ni: { name: "Nickel", atomicNumber: 28, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸", electrons: 28 },
    Cu: { name: "Copper", atomicNumber: 29, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰", electrons: 29 },
    Zn: { name: "Zinc", atomicNumber: 30, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰", electrons: 30 },
    Ga: { name: "Gallium", atomicNumber: 31, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p¹", electrons: 31 },
    Ge: { name: "Germanium", atomicNumber: 32, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p²", electrons: 32 },
    As: { name: "Arsenic", atomicNumber: 33, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³", electrons: 33 },
    Se: { name: "Selenium", atomicNumber: 34, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴", electrons: 34 },
    Br: { name: "Bromine", atomicNumber: 35, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵", electrons: 35 },
    Kr: { name: "Krypton", atomicNumber: 36, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶", electrons: 36 },
    Ag: { name: "Silver", atomicNumber: 47, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d¹⁰", electrons: 47 },
    U: { name: "Uranium", atomicNumber: 92, config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f³ 6d¹", electrons: 92 }
};

// DOM Elements
const elementInput = document.getElementById('element-input');
const searchBtn = document.getElementById('search-btn');
const elementInfo = document.getElementById('element-info');
const configDisplay = document.getElementById('configuration-display');
const exampleButtons = document.querySelectorAll('.example-btn');
const resetBtn = document.getElementById('reset-btn');

// Event Listeners
searchBtn.addEventListener('click', findElement);
elementInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') findElement();
});

exampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const element = btn.dataset.element;
        elementInput.value = element;
        findElement();
    });
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetAll();
});

// Main Functions
function findElement() {
    const input = elementInput.value.trim();
    if (!input) return;
    
    let element = null;
    
    // Check if input is atomic number
    if (/^\d+$/.test(input)) {
        const atomicNumber = parseInt(input);
        element = Object.values(elements).find(e => e.atomicNumber === atomicNumber);
    } else {
        // Check if input is symbol or name
        const searchKey = input.toLowerCase();
        element = elements[input] || 
                 Object.values(elements).find(e => 
                     e.name.toLowerCase() === searchKey || 
                     e.name.toLowerCase().includes(searchKey)
                 );
    }
    
    if (element) {
        displayElementInfo(element);
        displayConfiguration(element);
    } else {
        showError("Element not found. Try 'Na', 'Sodium', or '11'");
    }
}

function displayElementInfo(element) {
    const elementSymbol = Object.keys(elements).find(k => elements[k] === element);
    
    const infoHTML = `
        <div class="element-found">
            <h3>${element.name} (${elementSymbol})</h3>
            <div class="element-stats">
                <div class="stat-item">
                    <span class="stat-label">Atomic Number:</span>
                    <span class="stat-value">${element.atomicNumber}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Total Electrons:</span>
                    <span class="stat-value">${element.electrons}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Valence Electrons:</span>
                    <span class="stat-value">${getValenceElectrons(element.config)}</span>
                </div>
            </div>
        </div>
    `;
    
    elementInfo.innerHTML = infoHTML;
}

function displayConfiguration(element) {
    const config = element.config;
    const blocks = config.split(' ');
    
    const configHTML = blocks.map(block => {
        const [orbital, electrons] = block.split(/(?=[¹²³⁴⁵⁶⁷⁸⁹⁰])/);
        return `<span class="config-block">${orbital}<sup>${electrons || ''}</sup></span>`;
    }).join(' ');
    
    configDisplay.innerHTML = `<div class="config-result">${configHTML}</div>`;
}

function getValenceElectrons(config) {
    // Simple calculation: get last shell electrons
    const blocks = config.split(' ');
    const lastBlock = blocks[blocks.length - 1];
    const match = lastBlock.match(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/);
    if (!match) return '?';
    
    const superscripts = {
        '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5,
        '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9, '⁰': 0
    };
    
    return superscripts[match[0]] || '?';
}

function showError(message) {
    elementInfo.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
        </div>
    `;
    
    configDisplay.innerHTML = `
        <div class="placeholder">
            <i class="fas fa-exclamation-circle"></i>
            <p>${message}</p>
        </div>
    `;
}

function resetAll() {
    elementInput.value = '';
    elementInfo.innerHTML = `
        <div class="placeholder">
            <i class="fas fa-info-circle"></i>
            <p>Enter an element to see its electron configuration</p>
        </div>
    `;
    configDisplay.innerHTML = `
        <div class="placeholder">
            <i class="fas fa-sliders-h"></i>
            <p>Configuration will appear here</p>
        </div>
    `;
}

// Initialize with an example
setTimeout(() => {
    elementInput.value = 'Na';
    findElement();
}, 500);
