const todoInput = document.getElementById("todoInput");
const submitBtn = document.getElementById("submitBtn");
const todoListItem = document.getElementById("todoListItem");

submitBtn.addEventListener("click", () => {
    
    const inputVal = todoInput.value;    
    todoListItem.innerHTML=inputVal
    
    
});
