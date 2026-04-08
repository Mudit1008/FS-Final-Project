package com.example.expensetracker.service;

import org.springframework.stereotype.Service;

import java.util.List;

import com.example.expensetracker.repository.ExpenseRepository;
import com.example.expensetracker.model.Expense;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {

        this.repository = repository;

    }

    public List<Expense> getAllExpenses() {

        return repository.findAll();

    }

    public Expense addExpense(Expense expense) {

        return repository.save(expense);

    }

    public void deleteExpense(Long id) {

        repository.deleteById(id);

    }

}