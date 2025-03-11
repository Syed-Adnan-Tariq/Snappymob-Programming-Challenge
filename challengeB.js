const fs = require('fs');

function getObjectType(obj) {
    if (!isNaN(obj) && obj.toString().includes('.')) {
        return 'real number';
    }
    else if (!isNaN(obj) && Number.isInteger(Number(obj))) {
        return 'integer';
    }
    else if (/^[A-Za-z]+$/.test(obj)) {
        return 'alphabetical string';
    }
    else {
        return 'alphanumeric';
    }
}

function readAndProcessFile(filePath, outputPath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const objects = data.split(',');
        let outputContent = '';

        objects.forEach((obj) => {
            const strippedObj = obj.trim();

            if (strippedObj === '') return;

            const type = getObjectType(strippedObj);

            outputContent += `Object: "${strippedObj}", Type: ${type}\n`;
        });

        fs.writeFile(outputPath, outputContent, (err) => {
            if (err) {
                console.error('Error writing to the output file:', err);
            } else {
                console.log(`Output saved to ${outputPath}`);
            }
        });
    });
}

const inputFilePath = './randomObjects.txt';
const outputFilePath = './output.txt';

readAndProcessFile(inputFilePath, outputFilePath);