import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-faff2-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const res = await axios.post(BACKEND_URL + "/expenses.json", expenseData);
  const id = res.data.name;
  return id;
}
export async function fetchExpenses() {
  const res = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in res.data) {
    const expenseObj = {
      id: key,
      amount: res.data[key].amount,
      date: new Date(res.data[key].date),
      description: res.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
