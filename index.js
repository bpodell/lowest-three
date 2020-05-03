const https = require('https');

https.get('https://www.iwillfearnoevil.com/screen/string.txt', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    const array = data.split('\n');
    const uniqueNumbers = array.reduce((acc, curr) => {
        const num = parseInt(curr);
        if (!Number.isNaN(num)) {
            if (acc.indexOf(num) < 0) {
                acc.push(num);
            }
        }
        return acc;
    }, [])
    const lowestThree = uniqueNumbers.sort((a,b) => a - b).slice(0, 3);
    console.log(lowestThree);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});