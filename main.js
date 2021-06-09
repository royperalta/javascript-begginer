//Single element
  //console.log(document.getElementById('my-form'));
  //console.log(document.querySelector('h1'));
  //console.log(document.getElementById('my-form'));

//Multiple element
/*
console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();

ul.lastElementChild.textContent = 'hola';
ul.firstElementChild.textContent = 'Texto1';
ul.firstElementChild.innerHTML = '<h1>TEXTO GRANDE</h1>';

const btn = document.querySelector('.btn');
btn.style.backgroundColor ='red';



btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('body').style.backgroundColor = 'purple';
  document.querySelector('.container').classList.add('bg-dark');
})

*/
const MyForm = document.querySelector('#my-form');
const names = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

MyForm.addEventListener('submit',onSubmit);

function onSubmit(e){
  e.preventDefault();
  
  if(names.value === '' || emailInput.value===''){
    msg.classList.add('error')
    msg.innerHTML = "Please enter all fields";
   setTimeout(()=>{msg.remove()},3000); 
  
  }else{
    const li =document.createElement('li');
    li.appendChild(document.createTextNode(`
    ${names.value} : ${emailInput.value}
    `))
    userList.appendChild(li);
    names.value='';
    emailInput.value='';
  }
}



