var http = require('http');
const url = require("url");

var server = http.createServer((req,res)=>{
    let path = url.parse(req.url, true);
    let x = parseInt(path.query.x);
    let y = parseInt(path.query.y);
    
    if(isNaN(x) || isNaN(y)){
        format(res,400,"please enter x and y correctly!")
    }else if(path.pathname=='/add'){
        format(res,200,"x + y = " +(x+y));
    }else if(path.pathname=='/sub'){
        format(res,200,"x - y = " +(x-y));
    }else if(path.pathname=='/mul'){
        format(res,200,"x * y = " +(x*y));
    }else if(path.pathname=='/div'){
        format(res,200,"x / y = " +(x/y));
    }       
       
}).listen(8000);

function format(res,code,message ){
   res.writeHead(code,{ "Content-Type": "text/html" });
   res.write('<html><body><h1>'+message+'</h1></body></html>');
   res.end();

}