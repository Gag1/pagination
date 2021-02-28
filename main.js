const pagination = document.querySelector('#pagination');
const table = document.querySelector("#table");
const items = [];
const notesOnPage = 7;
const select = document.getElementById('select');
// const display = select.options[select.selectedIndex].value;

let users = [
    {name:'Joe',surname:'Smith',age:30},
    {name:'George',surname:'Josef',age:20},
    {name:'Dmitri',surname:'Lorems',age:15},
    {name:'Alex',surname:'honey',age:19},
    {name:'Max',surname:'Ardes',age:7},
    {name:'Sergei',surname:'sparkly',age:4},
    {name:'Andrei',surname:'fairy',age:5},
    {name:'Mania',surname:'Santakrus',age:27},
    {name:'fairy',surname:'Neosda',age:14},
    {name:'Tania',surname:'Sarian',age:16},
    {name:'Sergei',surname:'sparkly',age:45},
    {name:'Andrei',surname:'fairy',age:55},
    {name:'Mania',surname:'Santakrus',age:27},
    {name:'Max',surname:'Neosda',age:11},
    {name:'Tania',surname:'Sarian',age:13},
    {name:'Sergei',surname:'sparkly',age:4},
    {name:'Andrei',surname:'fairy',age:5},
    {name:'Mania',surname:'Santakrus',age:27},
    {name:'Max',surname:'Neosda',age:10},
    {name:'Tania',surname:'Sarian',age:12},
    {name:'Sergei',surname:'sparkly',age:45},
    {name:'Andrei',surname:'fairy',age:55},
    {name:'Mania',surname:'Santakrus',age:27},
    {name:'fairy',surname:'Neosda',age:70},
    {name:'Tania',surname:'Sarian',age:8},
    {name:'Sergei',surname:'sparkly',age:45},
    {name:'Andrei',surname:'fairy',age:95},
    {name:'Mania',surname:'Santakrus',age:67},
    {name:'fairy',surname:'Neosda',age:14},
    {name:'Tania',surname:'Sarian',age:12},
    {name:'Mania',surname:'Santakrus',age:67},
    {name:'fairy',surname:'Neosda',age:14},
    {name:'Tania',surname:'Sarian',age:12},
    {name:'Mania',surname:'Santakrus',age:67},
    {name:'Mania',surname:'Santakrus',age:67},

]
let newUsers = users


function descendingChange(){
    showPage(items[0])

    const newUsersAges = users.map((val,i,arr) =>{return val.age;})
    newUsersAges.sort();

    const newUsersNames = users.map((val,i,arr) =>{return val.name;})
    newUsersNames.sort()

    const newUsersSurnames = users.map((val,i,arr) =>{return val.surname;})
    newUsersSurnames.sort();

    users.forEach((val,i,arr) =>{return val.name = newUsersNames[i]})
    users.forEach((val,i,arr) =>{return val.surname = newUsersSurnames[i]})
    users.forEach((val,i,arr) =>{return val.age = newUsersAges[i]})
  
}

     
function ascendingChange(){
    showPage(items[0])

    const newUsersAges = users.map((val,i,arr) =>{return val.age;})
    newUsersAges.sort(function(a,b){return b-a})

    const newUsersNames = users.map((val,i,arr) =>{return val.name;})
    newUsersNames.sort(function(a,b){return b-a})
    newUsersNames.reverse()

    const newUsersSurnames = users.map((val,i,arr) =>{return val.surname;})
    newUsersSurnames.sort(function(a,b){return b-a})
    newUsersSurnames.reverse()

    users.forEach((val,i,arr) =>{return val.name = newUsersNames[i]})
    users.forEach((val,i,arr) =>{return val.surname = newUsersSurnames[i]})
    users.forEach((val,i,arr) =>{return val.age = newUsersAges[i]})
    console.log(users);
  
    document.querySelector('.list img').classList.add('activeImgRotate');
  
}

const countItems = Math.ceil(users.length / notesOnPage)
const showPage = (function(){
   let active;
   return function(item){
   
   if(active){
       active.classList.remove('active')
   }
   active = item;
   item.classList.add('active');
 
  let pageNum =+ item.innerHTML;
  let start = (pageNum - 1) * notesOnPage;
  let end = start + notesOnPage;


  let notes = users.slice(start,end);
  table.innerHTML = '';
  for(let note of notes){
     let tr = document.createElement('tr');
     table.appendChild(tr)    
      createCell(note.name, tr)
      createCell(note.surname, tr)
      createCell(note.age, tr)
  }
 }

}());


for(let i = 1; i <= countItems; i++){
      
      let li = document.createElement('li');
      li.innerHTML = i;
      pagination.appendChild(li);
      items.push(li);
}


for(let item of items){
    item.addEventListener('click', function(){
          showPage(this);
 });
// showPage(items[0])

}

showPage(items[0])

let newUsersNames;
function createCell(text,tr){
  let td = document.createElement('td');
  td.innerHTML = text;
  tr.appendChild(td)

   const input = document.querySelector('input');
   input.addEventListener('input', () =>{
   if(input.value === td.innerHTML){
        td.style.background = 'yellow'
   }else{
       td.style.background = 'white'
   }

 })
 
}




