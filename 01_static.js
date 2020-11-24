//导入html内置模块
const fs = require('fs');
const http = require('http');
const path = require('path');

//创建web实力
const server = http.createServer();
//监听request请求
server.on('request',(req,res)=>{
    // 5. 获取请求地址
    let pathname = req.url;
    // 对“/”做处理   
    pathname = pathname==="/" ? "/index.html":pathname;

    // 图标的处理  
    let filename = path.join(__dirname,"public",pathname);
    
    // 6. 读取文件并输出
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.end('server internal error')
        }else{
            res.end(data);
        }
    })
})

//启动服务
server.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})