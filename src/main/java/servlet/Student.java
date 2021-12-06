package servlet;

import lombok.Data;

/**
 * author:zhouzhongzhong
 * date:2021/12/6,17:01
 */
@Data
public class Student {
    private String name;
    private int age;
    private String sex;

    public Student(String name, int age, String sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
