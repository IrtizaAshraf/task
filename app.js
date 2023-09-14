// const uesrs =document.querySelector('#task');
// const edit =document.querySelector('div');


// const arry =[]
// function renders(e) {
//     email=" ";
//     password=" ";
//     // edit.innerHTML='';
//     const obt={
//         email, password 
//   }
//   arry.push(obt)
//   console.log(arry);
//   email=" ";
//   password=" ";

//   for (let d = 0; d < arry.length; d++) {
//         const element = arry[e];
//         console.log(element);
//         edit.innerHTML +=`<p>Email: ${arry[i].email}</p>
//         <p>password: ${arry[i].password}</p>
//         <button onclick="deletvalue(${d})">Delete</button>
//         <button onclick="editvalue(${d})">Edite</button>`

//     }
// }

// function showwel(e) {
//       const email =document.querySelector('#email').value;
//       const password =document.querySelector('#password').value;
//       const edit =document.querySelector('div');
//       e.preventDefault()

//       console.log(email);
//       console.log(password);
//     //   email=" ";
//     //   password=" ";
//       const obt={
//             email, password 
//       }
//       arry.push(obt)
//       console.log(arry);
      

//       for (let d = 0; d < arry.length; d++) {
//             const element = arry[e];
//             console.log(element);
//             edit.innerHTML +=`<p>Email: ${arry[i].email}</p>
//             <p>password: ${arry[i].password}</p>
//             <button onclick="deletvalue(${d})">Delete</button>
//             <button onclick="editvalue(${d})">Edite</button>`

//         }
//       renders() 
// }

// function deletvalue(index) {
//       arry.splice(index, 1)
//       email.value = '';
//       names.value = '';
//       edit.innerHTML = '';

//       renders()

// }
// // console.log(uesrs.value);\



const email = document.getElementById("email");
const password = document.getElementById("password");
const result = document.getElementById("result")



const arry = [];

function render() {
    result.innerHTML = ''
    const user = {
        Email: email.value,
        Password: password.value
    }
    arry.push(user)
    email.value = ""
    password.value = ""
    for (let i = 0; i < arry.length; i++) {
        // console.log(arry[i]);
        result.innerHTML += `<p>Email: ${arry[i].Email}</p>
        <p>Password:${arry[i].Password}</p>
        <button onclick="editvalue(${i})">Edit</button>
        <button onclick="deletevalue(${i})">Delete</button>
        `

    }
}
function showwel(e) {
    if (email.value === "") {
        
        alert('Enter Email Password')
    } else {
        e.preventDefault()
        render()
    }

}




function editvalue(index) {
    // console.log(index)
    result.innerHTML = ''
    const changeEmail = prompt("Change Emial", arry[index].Email)
    const changePassword = prompt("Change Password", arry[index].Password)
    arry[index].Email = changeEmail;
    arry[index].Password = changePassword;
    render()

}

function deletevalue(index) {
    email.value='';
    password.value='';
    result.innerHTML = '';
    arry.splice(index, 1)
    render()
    


}