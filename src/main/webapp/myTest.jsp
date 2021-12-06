<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  User: zhouzhongzhong
  Date: 2021/12/6
  Time: 17:25
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>myTest</title>
    <script src="/js/ajaxUtils.js"></script>
    <script>
        window.onload = function () {
            //得到button按钮
            var btn = document.getElementById("btn");
            //给button按钮创建点击事件
            btn.onclick = function () {
                //调用ajax方法，参数是一个对象
                ajax({
                    method: "GET",
                    url: "<c:url value="/servlet/StudentServlet"/>",
                    asyn: true,
                    params: null,
                    type: "json",
                    callback(data) {
                        document.getElementById("h1").innerHTML = data[0].name + "," + data[1].name + "," + data[2].name;
                    }
                })
            };
        };
    </script>
</head>
<body>
<button id="btn">点击这里</button>
<h1 id="h1">myTest</h1>
</body>
</html>
