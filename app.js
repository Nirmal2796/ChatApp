const http = require('http');

const routes = require('./routes')



// const server = http.createServer(routes)

// if object 
const server = http.createServer(routes.handler);

console.log(routes.someText);
            
            
        


 

server.listen(4000);