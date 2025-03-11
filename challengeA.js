const fs = require('fs');

function generateAlphabeticalString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function generateRealNumber() {
    return (Math.random() * 1000).toFixed(2);
}

function generateInteger() {
    return Math.floor(Math.random() * 1000);
}

function generateAlphanumeric(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const spacesBefore = ' '.repeat(Math.floor(Math.random() * 11));
    const spacesAfter = ' '.repeat(Math.floor(Math.random() * 11));
    return spacesBefore + result + spacesAfter;
}

function generateFile(filePath, targetSizeMB) {
    const targetSizeBytes = targetSizeMB * 1024 * 1024;
    const stream = fs.createWriteStream(filePath);

    let currentSize = 0;

    function writeData() {
        while (currentSize < targetSizeBytes) {
            const randomObjectType = Math.floor(Math.random() * 4);
            let randomObject;

            switch (randomObjectType) {
                case 0:
                    randomObject = generateAlphabeticalString(10);
                    break;
                case 1:
                    randomObject = generateRealNumber();
                    break;
                case 2:
                    randomObject = generateInteger();
                    break;
                case 3:
                    randomObject = generateAlphanumeric(10);
                    break;
            }

            const data = randomObject + ',';
            const dataSize = Buffer.byteLength(data, 'utf8');

            if (currentSize + dataSize > targetSizeBytes) {
                stream.end();
                return;
            }

            stream.write(data);
            currentSize += dataSize;
        }
        stream.end();
    }

    stream.on('open', () => {
        writeData();
    });

    stream.on('finish', () => {
        console.log(`File generated successfully: ${filePath}`);
        console.log(`Final file size: ${(currentSize / (1024 * 1024)).toFixed(2)} MB`);
    });

    stream.on('error', (err) => {
        console.error('Error writing to file:', err);
    });
}

generateFile('randomObjects.txt', 10);