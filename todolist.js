//필요한 요소들을 변수로 선언
const todoForm  /*변수명*/ = document.getElementById('todo_form');
const todoInput  /*변수명*/ = document.getElementById('todo_input');
const todoList /*변수명*/ = document.getElementById('todo_list');
const todoTemplate /*변수명*/ = document.getElementById('todo_template');
const todoupdate /*변수명*/= document.getElementById('update');


const handleFormSubmit = (event) => { //form 태그는 기본적으로 submit 이벤트에 form 태그 안의 다양한 양식의 데이터들을 다루고 필요한 action을 취한다음 다음 페이지를 갱신하는 특징이있음 그런 동작을 막기위한 이벤트 핸들러
  event.preventDefault();
  //인풋의 값을 추출함
  const inputValue = todoInput.value.trim();
  if (inputValue === '') return;
  //값이 없으면 아무것도 리턴하지않음

  const todoItem = todoTemplate.content.cloneNode(true).querySelector('.todo_item'); 
  const checkbox = todoItem.querySelector('.item_checkbox');
  //특정태그를 명확하게 지정하기위해 쓰는 qureyselector
  todoItem.querySelector('.item_title').textContent = inputValue;
  //document의 특정요소(Id,class,tag 등등..) event(ex - click하면 함수를 실행하라

  todoItem.addEventListener("click", function(){   
    if (checkbox.checked) {
      todoItem.style.textDecoration = "line-through";
      todoItem.style.color = "red";
    }
    else {
      todoItem.style.textDecoration = "none";
      todoItem.style.color = "black";
    }
    })                

  function addTodo(){
    if(addValue.value==false){
      alert('error')
    }else{
      let del = document.createElement('button');
      del.addEventListener("click, deletelist");  
    }
  }
  

  //마우스를 올리면 함수를 실행하라 등등.. )를 등록할 때 사용합니다.
  todoItem.querySelector('.edit').addEventListener("click" ,
  function todoedit() {
    let name  = prompt('수정하고 싶은 내용을 입력해주세요');
    

    if (name) {
      if(confirm("Are you sure change this value : " + name + "?")) {
        // 텍스트를 name으로 교체
        todoItem.querySelector('.item_title').textContent = name;
      }
    }
  })


  //구성된 값을 todoList에 추가
  todoList.appendChild(todoItem);
  //사용한 입력값을 초기화해 다시 사용할수 있게함
  todoInput.value = '';
}

todoForm.addEventListener('submit', handleFormSubmit); // form 태그에 'submit' 이벤트를 하나 추가
