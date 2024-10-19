package com.ApplicationRuleEngine.Controller;
import com.ApplicationRuleEngine.Entity.Rule;
import com.ApplicationRuleEngine.Service.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/rules")
public class RuleController {
    @Autowired
    private RuleService ruleService;

    @PostMapping("/create")
    public Rule createRule(@RequestBody String rule) {
        return ruleService.createRule(rule);
    }

    @GetMapping("/")
    public List<Rule> getAllRules() {
        return ruleService.getAllRules();
    }

    @PostMapping("/combine")
    public String combineRules(@RequestBody List<String> rules) {
        return ruleService.combineRules(rules);
    }

    @PostMapping("/evaluate")
    public boolean evaluateRule(@RequestBody UserData userData, @RequestParam String combinedRule) {
        // Here, you can implement a more complex evaluation logic based on combinedRule
        // For simplicity, we're just checking if age > 30 as an example condition.
        return userData.getAge() > 30; // Example condition
    }
}

class UserData {
    private int age;
    private String department;
    private double salary;
    private int experience;

    // Getters and Setters
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }
}
