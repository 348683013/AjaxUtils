package servlet;

import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * author:zhouzhongzhong
 * date:2021/12/6,17:02
 */
public class StudentServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=utf-8");
        StudentService studentService = new StudentService();
        List<Student> studentList = studentService.getStudents();
        //把studentList转换成json格式
        String s = JSONArray.fromObject(studentList).toString();
        System.out.println(s);
        resp.getWriter().print(s);
    }
}
