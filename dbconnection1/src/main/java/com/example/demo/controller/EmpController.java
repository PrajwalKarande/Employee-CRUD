 package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.HttpExchange;

import com.example.demo.entity.Employee;
import com.example.demo.service.Empservice;

@RestController
@CrossOrigin("*")
public class EmpController {
	
	@Autowired
	private Empservice serve;
	
	@GetMapping("/emp")
	public List<Employee>  getAllEmp()
	{
		return this.serve.getAllEmployee();
	}
	
	@PostMapping("/emp")
	public Employee addEmp(@RequestBody Employee employee) {
		this.serve.addEmployee(employee);
		return employee;
	}
	
	@PutMapping("/emp/{Id}")
	public Employee updateEmp(@RequestBody Employee employee,@PathVariable("Id") int Id)
	{
		float sal = employee.getSalary();
		this.serve.updateEmployee(employee,sal);
		return employee;
	}
	
	@DeleteMapping("/emp/delete/{ID}")
	public List<Employee> deleteEmp(@PathVariable("ID")int id)
	{
		this.serve.deleteEmployee(id);
		return serve.getAllEmployee();
		
	}
	
	@GetMapping("/findemp/{ID}")
	public Employee getEmpById(@PathVariable("ID")int id)
	{
		return this.serve.getEmployeeById(id);
	}
	
}

