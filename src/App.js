//html code inside the jsx function :
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    { id: "e2", title: "Auto", amount: 39.67, date: new Date(2019, 2, 28) },
    { id: "e3", title: "HairCut", amount: 2.67, date: new Date(2023, 4, 28) },
    { id: "e4", title: "Grocery", amount: 32.67, date: new Date(2022, 2, 28) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;

// Imperative approach : <p>This is also visible </p>
// const para = document.createElement('p');
// para.textContent = 'This is also visible';
// document.getElementById('root').append(para)
