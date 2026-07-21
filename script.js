const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("tasklist");
const deleteBtn=document.createElement("button");

addBtn.addEventListener("click",function(){
 const task=taskInput.value;
 if(task.trim()===""){
    alert("Please enter a task");
    return;
 }
 const li=document.createElement("li");
 li.innerText=task;
 taskList.appendChild(li);
 taskInput.value="";
});