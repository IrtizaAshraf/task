const uesrs =document.querySelector('#task');



const arry =[]
function renders() {
      email=" ";
      password=" ";
       
      for (let d = 0; d < arry.length; d++) {
            const element = arry[e];
            console.log(element);
            edit.innerHTML +=`<p>${element}</p>
            <button onclick="deletvalue(${d})">Delete</button>
            <button onclick="editvalue(${d})">Edite</button>`

      }
}
function showwel(e) {
      const email =document.querySelector('#email').value;
      const password =document.querySelector('#password').value;
      const edit =document.querySelector('div').value;
      e.preventDefault()
      
      console.log(email);
      console.log(password);
      const obt={
            email, password 
      }
      arry.push(obt)
      console.log(arry);
      email=" ";
      password=" ";
      
      for (let d = 0; d < arry.length; d++) {
            const element = arry[e];
            console.log(element);
            edit.innerHTML +=`<p>${element}</p>
            <button onclick="deletvalue(${d})">Delete</button>
            <button onclick="editvalue(${d})">Edite</button>`

      }
      // renders() 
}

function deletvalue(index) {
      arry.splice(index, 1)
      email.value = '';
      names.value = '';
      edit.innerHTML = '';
      
      renders()
  
}
// console.log(uesrs.value);\




const addlist = document.querySelector("#email");
const addlists = document.querySelector("#password");
const arrry = document.querySelector("div");
const erroermassage = document.querySelector("#error-message")
const todo = [];
function todolist(e) {
    e.preventDefault();
    switch (addlist.value) {
        case '':
            alert("Enter the Value ")
            break;
        default:
            todo.push(addlist.value)
            addlist.value = '';
            arrry.innerHTML = '';
            for (let g = 0; g < todo.length; g++) {
                const item = todo[g];
                arrry.innerHTML += `<li>${item}</li>  
             <button onclick="deletvalue(${g})">Delete</button>
             <button onclick="editvalue(${g})">Edite</button>`
                    ;
            }
            break;
    }
}
function deletvalue(index) {
    todo.splice(index, 1)
    addlist.value = '';
    arrry.innerHTML = '';
    for (let g = 0; g < todo.length; g++) {
        const item = todo[g];
        arrry.innerHTML += `<li>${item}</li>  
             <button onclick="deletvalue(${g})">Delete</button>
             <button onclick="editvalue(${g})">Edite</button>`
            ;
    }
    // for (let g = 0; g < todo.length; g++) {
    //     const item = todo[g];
    //     arrry.innerHTML += `<li>${item}</li>  
    //          <button onclick="deletvalue(${g})">Delete</button>
    //          <button onclick="editvalue(${g})">Edite</button>`
    //         ;
    // }
    renders()

}


function editvalue(index) {
    const todolist = +prompt("Change the Value", todo[index]) 
    todo.splice(index, 1, todolist)


    const content = prompt('Edit task:', todo[index]);
    // if (content === "") {
    //     todo[index] = content ;
    //     renders();
    //     alert("please Enter the value")
    // }
    // else{
    //     todo[index] = content ;
    //     renders();
    // }
    switch (content) {
        case '':
            // todo.splice(index,1, content)
            renders()
            alert("bhai jan  value daydoo")
            break;

        default:
            todo.splice(index, 1, content)
            renders()
            break;
    }

}

function renders() {
    arrry.innerHTML='';
    for (let g = 0; g < todo.length; g++) {
        const item = todo[g];
        arrry.innerHTML += `<li>${item}</li>  
             <button onclick="deletvalue(${g})">Delete</button>
             <button onclick="editvalue(${g})">Edite</button>`
            ;
    }   
}