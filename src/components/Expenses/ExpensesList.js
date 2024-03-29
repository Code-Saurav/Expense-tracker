import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (props.items.length === 0){
        return <h2 className = 'expense-List__fallback'> Found No expenses </h2>
    }
  return (
    <ul className = 'expense-list'>
        {props.items.map((expense) => (
            <ExpenseItem
            key={expense.id} // Important while dealing with the lists and map
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))}
    </ul>
  );
};

export default ExpensesList