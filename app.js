let input=document.getElementById('input')
let addbtn=document.getElementById('button')
let todolist=document.getElementById('todolist')

let storage=[]
addbtn.onclick=click

function click(){
    storage.push(input.value)
    input.value="";
    showTodo()
}
function showTodo(){
    todolist.innerHTML=''
    storage.forEach(function(todo,index){
    todolist.innerHTML +=
    `<li>
        +todo+
        <a onclick=edithandle(${index})>EditTodo</a>+
        <a onclick=deletehandle(${index})>deletetodo</a>+
    </li>`
    })
    
}
console.log(storage)

function edithandle(index){
    let newvalue=prompt('enter new todo')
    if(newvalue.length>0){
    storage.splice(index,1,newvalue)
    showTodo()}
}
function deletehandle(index){
    storage.splice(index,1)
    showTodo()
}

let name=chirag
console.log("my name"${name})
