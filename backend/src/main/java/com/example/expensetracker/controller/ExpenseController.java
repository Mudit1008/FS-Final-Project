package com.example.expensetracker.controller;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.repository.ExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {

    private final ExpenseRepository repository;

    public ExpenseController(ExpenseRepository repository){
        this.repository = repository;
    }

    @GetMapping
    public List<Expense> getExpenses(){
        return repository.findAll();
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense){
        return repository.save(expense);
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id){
        repository.deleteById(id);
    }
}