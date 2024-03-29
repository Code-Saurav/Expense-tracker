import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredtTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };




  const submitButtonHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtTitle,
      amount: + enteredAmount,
      date: new Date(enteredDate),

    // show the form card 


    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  

  return (
    <form className="new-expense__form" onSubmit={submitButtonHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredtTitle}
            onChange={titleChangeHandler}
          />
        </div>
        {/* end of the new-expense__control */}

        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value= {enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        {/* end of the new-expense__control */}

        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value = {enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        {/* end of the new-expense__control */}
      </div>
      {/* end of the new-expense__controls */}

      <div className="new_expense__actions">
        <button type = "button" onClick = {props.onCancel}> Cancel </button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
