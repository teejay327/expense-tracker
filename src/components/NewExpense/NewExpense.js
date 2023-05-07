import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const  NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState[false];

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  
  return (
   <div className='new-expense'>
     { !isEditing && <button onClick={ startEditingHandler }>Add new expense</button> }

      <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
    </div>
  );
};  

export default NewExpense;