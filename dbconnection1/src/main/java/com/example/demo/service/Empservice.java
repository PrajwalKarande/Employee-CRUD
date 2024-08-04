package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Employee;

public interface Empservice {
	public List<Employee> getAllEmployee();
	public Employee getEmployeeById(int empid);
	public Employee addEmployee(Employee emp);
	public Employee updateEmployee(Employee emp,float salary);
	public void deleteEmployee(int empid);


}
