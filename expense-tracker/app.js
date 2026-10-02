const expenseName = document.querySelector('.form input[type="text"]');
const amount = document.querySelector('.form input[type="number"]');
const category = document.querySelector(".form select");
const date = document.querySelector('.form input[type="date"]');
const addButton = document.querySelector(".form button");

const transactionList = document.querySelector(".transaction-list");

const balanceText = document.querySelectorAll(".card p")[0];
const expenseText = document.querySelectorAll(".card p")[1];


let expenses = [];
let balance = 10000; 

addButton.addEventListener("click", function () {
  const name = expenseName.value;
  const money = Number(amount.value);
  const type = category.value;
  const expenseDate = date.value;

  
  if (
    name === "" ||
    money === 0 ||
    type === "Select Category" ||
    expenseDate === ""
  ) {
    alert("Please fill all fields.");
    return;
  }


  const expense = {
    name,
    money,
    type,
    expenseDate,
  };

  expenses.push(expense);

  showExpenses();
  calculateTotal();

  
  expenseName.value = "";
  amount.value = "";
  category.selectedIndex = 0;
  date.value = "";
});


function showExpenses() {
  transactionList.innerHTML = "";

  expenses.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("transaction");

    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.type}</p>
      <p>${item.expenseDate}</p>
      <strong>₹${item.money}</strong>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;

    transactionList.appendChild(div);
  });
}


function calculateTotal() {
  let totalExpense = 0;

  expenses.forEach((item) => {
    totalExpense += item.money;
  });

  expenseText.textContent = `₹${totalExpense}`;
  balanceText.textContent = `₹${balance - totalExpense}`;
}

function deleteExpense(index) {
  expenses.splice(index, 1);

  showExpenses();
  calculateTotal();
}