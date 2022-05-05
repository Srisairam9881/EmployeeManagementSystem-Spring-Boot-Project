package net.ASSR.EMS.model;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	@Id
	@GeneratedValue
	private long id;
	private String fullName;
	private String age;
	private String gender;
	private String dob;
	private String department;
	private String Salary;
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(String fullName, String age, String gender, String dob, String department, String salary) {
		super();
		this.fullName = fullName;
		this.age = age;
		this.gender = gender;
		this.dob = dob;
		this.department = department;
		Salary = salary;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getSalary() {
		return Salary;
	}
	public void setSalary(String salary) {
		Salary = salary;
	}
	public String convertDateToString(Date dt) {
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		String dateToString = df.format(dt);
		return dateToString;
		}

	public String convertDateToString(Date dt, String pattern) {
		DateFormat df = new SimpleDateFormat(pattern);
		dob = df.format(dt);
		return dob;
	}
	

}
