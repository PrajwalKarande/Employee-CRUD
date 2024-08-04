package com.example.demo;

import java.util.List;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmpServiceImpl;
import com.example.demo.service.Empservice;

@SpringBootApplication
public class Dbconnection1Application {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(Dbconnection1Application.class, args);
		Empservice empser = context.getBean(EmpServiceImpl.class);
		Scanner sc = new Scanner(System.in);
		int ch,id;
		String name;
		float salary;

		do {
			System.out.println("1.Insert\n2.Update\n3.Delete\n4.Search\n5.Display All\n6.Exit\nEnter Choice : ");
			ch=sc.nextInt();

			switch (ch) {
				case 1: 
				{
					System.out.println("Enter Employee id,name,salary");
					id=sc.nextInt();
					name=sc.next();
					salary=sc.nextFloat();
					empser.addEmployee(new Employee(id, name, salary));
					break;
				}
				
				case 2:
				{
					System.out.println("Enter employee id and new salary");
					id = sc.nextInt();
					salary = sc.nextFloat();
					Employee emp = empser.getEmployeeById(id);
					Employee uemp = empser.updateEmployee(emp, salary);
					System.out.println(uemp);
					break;
				}
				
				case 3:
				{
					System.out.println("Enter Employee id to delete");
					id = sc.nextInt();
					empser.deleteEmployee(id);
					System.out.println("Employee deleted");
					break;
				}
				
				case 4:
				{
					System.out.println("Enter employee id to search");
					id = sc.nextInt();
					Employee emp=empser.getEmployeeById(id);
					System.out.println(emp);
					break;
				}
				
				case 5:
				{
					List<Employee> emplist = empser.getAllEmployee();
					for(Employee e:emplist)
					{
						System.out.println(e);
					}
					break;
				}
				default:
				{
					System.out.println("Invalid Choice");
					break;
				}
			}//switch
		}while(ch!=6);
		sc.close();

	}

}
