const todoInput = document.getElementById("todoInput");
const submitBtn = document.getElementById("submitBtn");
const todoListItem = document.getElementById("todoListItem");

submitBtn.addEventListener("click", () => {
  const inputVal = todoInput.value;

  //   =============li create========
  const li = document.createElement("li");
  li.textContent = inputVal;
  li.className = "text-lg font-medium bg-white py-1 px-4 rounded-2xl flex items-center justify-between";
  //   =============li create========
  todoListItem.appendChild(li);

  //   =============delete btn create========
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "bg-red-600 py-2 px-5 rounded-2xl cursor-pointer";
  delBtn.addEventListener("click", ()=>{
    li.remove()
  })
  //   =============delete btn create========

  li.appendChild(delBtn)

  todoInput.value = "";

  if (!inputVal) {
    alert("vai khali ken?");
  }
});
