const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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
            fs.writeFile('message.txt',message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        })

    }
})
            
            
        


 

server.listen(4000);