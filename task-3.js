const fs = require('fs');
const filePath = 'data.txt'; 
countWords(filePath);


function countWords (filePath){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const wordCount = data.split(/\s+/).length;
        console.log('Total word count:', wordCount);
    });
};


