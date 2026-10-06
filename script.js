let todo = ["todo1" , "todo2" , "todo3"];
let progress = ["progress1" , "progress2" , "progress3"];
let done = ["done1" , "done2" , "done3"];

let todoCol = document.getElementById("todo");
let progressCol = document.getElementById("progress");
let doneCol = document.getElementById("done");

function renderTodo(){
    todoCol.innerHTML = "<h1>Todo</h1>"
todo.forEach((item ,index)=>{
    todoCol.innerHTML += `
    <div class="task">
            <p>${item}</p>
            <button onclick="shiftToRight('todo', ${index})">&#8594;</button>
        </div>
    `
})
}

function renderProgress(){
    progressCol.innerHTML = " <h1>In progress</h1>";
progress.forEach((item , index)=>{
    progressCol.innerHTML += `
    <div class="task">
            <p>${item}</p>
             <button onclick="shiftToLeft('progress',${index})">&#8592;</button>
            <button onclick="shiftToRight('progress',${index})">&#8594;</button>
        </div>
    `
})
}

function renderDone(){
    doneCol.innerHTML = " <h1>Done</h1>";
done.forEach((item , index)=>{
    doneCol.innerHTML += `
    <div class="task">
            <p>${item}</p>
            <button onclick="shiftToLeft('done',${index})">&#8592;</button>
        </div>
    `
})
}

renderTodo();
renderProgress();
renderDone();

function shiftToRight(colName , index){
    if(colName=== "todo"){
        let itemToBePushed = todo[index];
        todo = todo.filter((item,i) => i !== index);
        console.log("array after removal " , todo , itemToBePushed);
        renderTodo();
        progress.push(itemToBePushed);
        renderProgress();
    }

    else if(colName === "progress"){
        let itemToBePushed = progress[index];
        progress = progress.filter((item,i) => i !== index);
        console.log("array after removal " , progress , itemToBePushed);
        renderProgress();
        done.push(itemToBePushed);
        renderDone();
    }

}


function shiftToLeft(colName , index){
    if(colName === "progress"){
        let itemToBeBack = progress[index];
        progress = progress.filter((item,i)=> i !==index);
        console.log("array after removal " , progress , itemToBeBack);
        renderProgress();
        todo.push(itemToBeBack);
        renderTodo();
    }

    else if(colName === "done"){
        let itemToBeBack = done[index];
        done = done.filter((item,i)=> i !==index);
        console.log("array after removal " , done , itemToBeBack);
        renderDone();
        progress.push(itemToBeBack);
        renderProgress();
    }
}