import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* ALTERNATIVA
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /* ALTERNATIVA
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    })

    MODO PIU CORRETTO SE SI USA ALTERNATIVA
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value }
    })
    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* ALTERNATIVA
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    })
    */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* ALTERNATIVA
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    })
    */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2025-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;