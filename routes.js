const fs = require('fs');

const requestHandler = (req, res) => {
    
    if (req.url === '/') {
        fs.readFile('message.txt', (err, data) => {
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${data.toString()}</body>`);
            res.write('<form action="/message" method="POST"><input type="text" name="message">');
            res.write('<button type = "submit" > send</button ></form ></body > ');
            res.write('</html>');
            return res.end();
        });


    }


    else if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunks) => {
            body.push(chunks);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        })

    }


}


//Exporting requestHandler in different ways

// 1st way
// module.exports = requestHandler;

//2 as object;
// module.exports = {
//     handler: requestHandler;
//     someText:'Some hard coded text'
// }

//3rd way
module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';

//shortcut 
// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';
