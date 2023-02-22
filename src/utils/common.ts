

const generateRandomChar=(min = 5, max = 20, char = '-') => {
    let outputSymbol = ''; 
    const randomRange = Math.floor(Math.random() * (max - min) + min);
    for(let random = 1 ; random <= randomRange ; random++ ) {
        outputSymbol = outputSymbol + char;
    }
    return outputSymbol;
};



export { generateRandomChar };