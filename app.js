const uesrs =document.querySelector('#task');




const arry =[]
function showwel(e) {
      const email =document.querySelector('#email').value;
      const names =document.querySelector('#name').value;
      e.preventDefault()
      
      console.log(email);
      console.log(names);
      const obt={
            email, names
      }
      arry.push(obt)
      console.log(arry);

      email.value=" ";
      names.value=" ";      
}
// console.log(uesrs.value);\