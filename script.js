const taskList =[];
const revealForm = document.getElementById('revealForm');
const toDoForm = document.getElementById('todoForm');
const toDoFormModal = document.getElementById("formQuestions");
const addTodo = document.getElementById("addToto");
const todoDiv=document.getElementById("todoDiv");
let counter = 0;





class ToDo {
    constructor(title = " ", description = " ", dueDate = " ", priority = " ", notes = " "){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;

        
        addTodoToList(this, counter);
        counter+=1;
    }
}
function addTodoToList(newTodo, index){
    console.log("index" + index + " newTodo" + newTodo);
    taskList.push(newTodo);
    displayItem(index);
}




function displayItem(index, reference){
    const taskDiv=document.createElement("div");

    let taskName=document.createElement("h2");
    taskName.innerHTML=(`${taskList[index].title}`);
    

    let taskDate=document.createElement("p");
    taskDate.innerHTML=(`${taskList[index].dueDate}`);

    let taskPriority=document.createElement("p");
    taskPriority.innerHTML=(`${taskList[index].priority}`);

    let taskNotes=document.createElement("p");
    taskNotes.innerHTML=(`${taskList[index].notes}`);

    let taskDescription=document.createElement("p");
    taskDescription.innerHTML=(`${taskList[index].description}`);


    let checkMark = document.createElement("input");
    checkMark.setAttribute("type", "checkbox");
    checkMark.setAttribute("onclick", `setDone(${index});`);
    checkMark.classList.add("checkMark");






    
    taskDiv.className="taskDiv";
    taskDiv.id=`book-${index}`;
    todoDiv.appendChild(taskDiv);
    taskDiv.append(taskName,taskDate,taskPriority,checkMark, taskNotes, taskDescription);



     
}



revealForm.addEventListener("click", ()=>{
    console.log("sdfdsfs");
    toDoFormModal.classList.remove("hide");
    toDoFormModal.classList.toggle('transition');
    toDoFormModal.classList.add("show");
})

todoForm.addEventListener("click", ()=>{
    if (event.target === todoForm) {
    todoForm.classList.remove("show");
    todoForm.classList.add("hide");
    }

})

toDoForm.addEventListener("submit", ()=>{
    todoForm.classList.toggle('transition');
    event.preventDefault();




    var value1 = document.getElementById('formTitle').value;
    var value2 = document.getElementById('formDescription').value;
    var value3 = document.getElementById('formDueDate').value;
    var value4 = document.getElementById('formPriority').checked;
    toDoForm.reset();

    const bookInitialization = new ToDo(value1,value2,value3,value4);

    toDoFormModal.classList.add("hide");
    toDoFormModal.classList.remove("show");



} )

