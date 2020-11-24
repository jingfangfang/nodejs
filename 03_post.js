//导入模块
const http = require('http');
const querystring = require('querystring');
//创建web实例
const server=http.createServer();

//监听request请求
server.on('request',(req,res)=>{
    //定义一个数组，存储接收的一小段一小段数据
    let arr = [];

    //数据接受中
    req.on("data",buffer=>{
        // console.log(buffer);
        arr.push(buffer);
    })
    //接收完毕进一步处理
    req.on("end",()=>{
        //将buffer中的内容拼接到一起
        let buffer= Buffer.concat(arr);
        // 转化为一个字符串形式
        let str = buffer.toString();
        console.log(str);

        //将字符串转化为对象形式
        console.log(querystring.parse(str));
    })
})

//启动服务
server.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})