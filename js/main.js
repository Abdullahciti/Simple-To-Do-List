const userTextArea = document.querySelector("textarea");
const userTextAreaIcon = document.querySelector(".main-box i"); // <i class="fa-solid fa-plus"></i>
const allListsUl = document.querySelector(".all-lists");
const checkbox = document.querySelector(".todo-list input");
const pendingTasks = document.querySelector(".pending-tasks");
const myDeleteI = document.querySelector(".todo-list i");
const clearButton = document.querySelector("button");


choosedTasks();
userTextArea.addEventListener("keyup", (e) => {

    let areaVal = userTextArea.value.trim()
    
    if(e.key === "Enter" && areaVal.length > 0 ){
        const liTag = ` <li class="todo-list pending" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="my-list">${areaVal}</span>
        <i class="fa-solid fa-trash" onclick="deleteTask(this)" ></i>
        </li> `
        allListsUl.insertAdjacentHTML("beforeend", liTag);
        userTextArea.value = "";
        choosedTasks();
    }
});
function handleStatus(e){
    const checkbox = document.querySelector(".todo-list input");
    checkbox.checked = checkbox.checked ? true : false;
    e.classList.toggle("pending");
}
function choosedTasks(){
    let tasks = document.querySelectorAll(".pending");
    pendingTasks.textContent = tasks.length === 0 ? "You have no pending Tasks" : `${tasks.length === 1 ? "You have a 1 pending Task" : `You have ${tasks.length} pending Tasks`}`;
}
clearButton.addEventListener("click", () =>{
    allListsUl.textContent = " ";
    choosedTasks()
})

function deleteTask(el){
    el.parentElement.remove()
    choosedTasks()
}