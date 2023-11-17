//Declare here
const todolist = [] 
const input1 = document.querySelector('.todo')
const input2 = document.querySelector('.date')
const output = document.querySelector('.display-list')

// 1) Add to list
function AddList(){

  todolist.push({
    name:input1.value,
    date:input2.value,
    status: false
  });

  input1.value = '';
  input2.value = '';

  RegenerateList()
}

// 2) Generate <p> element list
function RegenerateList(){

    let generate_list = ''
    todolist.forEach(function(value,i) { 
      
      let checked;
      let crossWord;
      
      if (value.status){
        checked = 'checked';
        crossWord = 'crossWord'
      }
      else{
        checked = ''
        crossWord = ''
      }

      generate_list += `
        <div class=rows>
          <div><input class=test${i} onclick=Test(${i}) type="checkbox"
          ${checked}>
          
          <snap class="word${i}_1 ${crossWord}"> ${value.name}</snap></div>

          <snap class="word${i}_2  ${crossWord}">${value.date}</snap>
          <button 
            class="delete"
            onclick="todolist.splice(${i},1); RegenerateList()"
            >Delete</button> 
        </div>`
        
    });
  
    output.innerHTML = generate_list
}

function Test(i){
  if (document.querySelector(`.test${i}`).checked){
    
    todolist[i].status = true
    document.querySelector(`.word${i}_1`).classList.add('crossWord')
    document.querySelector(`.word${i}_2`).classList.add('crossWord')
    
  } else {
    todolist[i].status = false
    document.querySelector(`.word${i}_1`).classList.remove('crossWord')
    document.querySelector(`.word${i}_2`).classList.remove('crossWord')
  }
}