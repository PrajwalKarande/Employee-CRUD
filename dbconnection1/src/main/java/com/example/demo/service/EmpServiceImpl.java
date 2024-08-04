package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmpRepository;

@Service
public class EmpServiceImpl implements Empservice{

	@Autowired
	private EmpRepository EmpRepo;
	
	@Override
	public List<Employee> getAllEmployee() {
		return EmpRepo.findAll();
	}

	@Override
	public Employee getEmployeeById(int empid) {
		return EmpRepo.findById(empid);
	}

	@Override
	public Employee addEmployee(Employee emp) {
		Employee empobj = EmpRepo.save(emp);
		return empobj;
	}

	@Override
	public Employee updateEmployee(Employee emp, float salary) {
		emp.setSalary(salary);
		return EmpRepo.save(emp);
		
	}

	@Override
	public void deleteEmployee(int empid) {
		EmpRepo.deleteById(empid);
		
	}
	

}
