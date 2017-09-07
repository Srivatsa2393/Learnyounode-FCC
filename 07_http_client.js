const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    response.on('error', (err) => console.error(err));
    //encoding it tot utf-8
    response.setEncoding('utf8');
    response.on('data', data => {
        console.log(data);
    });
    response.on('end', () => {console.log('End of string')})
});