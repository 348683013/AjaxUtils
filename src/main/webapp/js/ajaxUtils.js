// 创建XMLHttpRequest对象
function createXMLHttpRequest() {
    try {
        return new XMLHttpRequest();
    } catch (e) {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("您用的什么浏览器创建不了XMLHttpRequest对象");
                throw e;
            }
        }
    }
}
/*
option的参数
 */
    // /*请求方式*/                   method,
    // /*请求的url*/                      url,
    // /*是否异步*/                      asyn,
    // /*请求体*/                     params,
    // /*回调方法*/                 callback,
    // /*服务器响应数据转换成什么类型*/   type

function ajax(option) {
    /*
    得到xmlHttpRequest
     */
    var xmlHttpRequest = createXMLHttpRequest();
    /*
    打开连接
    null和undefined都可以当作if条件判断中的false来使用
     */
    if (!option.method) {//默认是GET请求
        option.method = "GET";
    }
    // if (option.asyn === undefined) {//默认是异步处理
    if (!option.asyn) {//默认是异步处理
        option.asyn = true;
    }

    xmlHttpRequest.open(option.method, option.url, option.asyn);
    /*
    判断是否是POST
     */
    if ("POST" == option.method) {
        xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    /*
    发送请求
     */
    xmlHttpRequest.send(option.params);
    /*
    注册监听
     */
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
            var data;
            //获取服务器的响应数据，进行转换
            if (!option.type) {//如果type没有赋值，那么默认是文本
                data = xmlHttpRequest.responseText;
            } else if (option.type == "xml") {
                data = xmlHttpRequest.responseXML;
            } else if (option.type == "text") {
                data = xmlHttpRequest.responseText;
            } else if (option.type == "json") {
                var text = xmlHttpRequest.responseText;
                data = eval("(" + text + ")"); //text转换成json格式
                console.log(data);
            }
            //调用回调方法
            option.callback(data);
        }
    };
}