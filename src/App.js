import React, { useState } from 'react';
import Expenses from '../src/components/Expenses/Expenses';
import NewExpense from '../src/components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Office chair',
    amount: 94.50,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'Computer monitor', 
    amount: 299.50, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'House Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Standup Desk (Electrical)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Asus Laptop',
    amount: 1200,
    date: new Date(2022, 6, 2)
  },
  {
    id: 'e6',
    title: 'iPhone',
    amount: 1870,
    date: new Date(2022, 5, 23)
  }
];

const App = () => {
  const [expenses, setExpenses ] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandler }/>
      <Expenses items={ expenses }/>
    </div>  
  );
}

export default App;
