package servlet;

import java.util.ArrayList;
import java.util.List;

/**
 * author:zhouzhongzhong
 * date:2021/12/6,17:03
 */
public class StudentService {
    Student student1 = new Student("张三", 22, "男");
    Student student2 = new Student("李四", 23, "男");
    Student student3 = new Student("小花", 21, "女");
    List<Student> studentList = new ArrayList<>();

    public List<Student> getStudents(){
        studentList.add(student1);
        studentList.add(student2);
        studentList.add(student3);
        return studentList;
    }
}
