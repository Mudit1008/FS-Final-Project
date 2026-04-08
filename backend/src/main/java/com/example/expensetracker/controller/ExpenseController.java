package com.example.expensetracker.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.service.ExpenseService;

@RestController

@RequestMapping("/expenses")

@CrossOrigin(origins = "http://localhost:3000")

public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {

        this.service = service;

    }

    @GetMapping
    public List<Expense> getAllExpenses() {

        return service.getAllExpenses();

    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {

        return service.addExpense(expense);

    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id) {

        service.deleteExpense(id);

    }

}