const taskList =[];
const revealForm = document.getElementById('revealForm');
const toDoForm = document.getElementById('todoForm');
const toDoFormModal = document.getElementById("formModal");
const addTodo = document.getElementById("addToto");
const todoDiv=document.getElementById("todoDiv");
const detailsButton=document.getElementById("details");
const descModal = document.getElementById("descModal");
const closeDesc = document.getElementById("closeDesc");
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
    /* Need to add:
    #  Input checkbox
    #  H2 Title
    #  P date
    #  details button
    #  description modal
    #  description box
    #  p description
    #  close modal button
    #  Delete button
    */
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

toDoFormModal.addEventListener("click", ()=>{
    if (event.target === toDoFormModal) {
        toDoFormModal.classList.remove("show");
        toDoFormModal.classList.add("hide");
    }

})

toDoForm.addEventListener("submit", ()=>{
    todoForm.classList.toggle('transition');
    event.preventDefault();




    var value1 = document.getElementById('formTitle').value;
    var value2 = document.getElementById('formDescription').value;
    var value3 = document.getElementById('formDueDate').value;
    var value4 = document.getElementById('formPriority').value;
    toDoForm.reset();

    const bookInitialization = new ToDo(value1,value2,value3,value4);

    toDoFormModal.classList.add("hide");
    toDoFormModal.classList.remove("show");



} )

detailsButton.addEventListener("click", ()=>{
    descModal.classList.remove("hide");
    descModal.classList.toggle('transition');
    descModal.classList.add("show");
}) 

closeDesc.addEventListener("click", ()=>{
    descModal.classList.toggle('transition');
    descModal.classList.add("hide");
    descModal.classList.remove("show");
}) 