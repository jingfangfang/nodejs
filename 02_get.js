//导入模块、
const http = require('http');
const url = require('url');

//添加web实例
const server = http.createServer();

//监听request请求
server.on('request',(res,req)=>{
    // console.log(res.url)
    let {query}= url.parse(res.url,true);
    console.log(query);
    console.log(query.name);
})

//启动服务
server.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080/");
})