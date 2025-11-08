const todoInput = document.getElementById("todoInput");
const submitBtn = document.getElementById("submitBtn");
const todoListItem = document.getElementById("todoListItem");

submitBtn.addEventListener("click", () => {
  const inputVal = todoInput.value;
  const li = document.createElement("li");
  li.textContent = inputVal;
  todoListItem.appendChild(li)
  todoInput.value=''
  if (!inputVal) {
    alert("vai khali ken?")
  }

});
