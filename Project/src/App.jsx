import { useState } from 'react';
import './App.css'

function App() {  
  const [list, setList] = useState([]);
  const [input, setInput] = useState("")

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    //add a todo
    setList([...list, newTodo]);

    //clear input box
    setInput("");
  }

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id)

    setList(newList);
  }

  return (
    <div class="body">
      <header class="main_header">
        
        <div class="title">
          <h1 class="title_main">Todo List</h1>
        </div>

        <div class="nav_links">  
          <nav>
            <ul class="#">
              <li class="home"><a href="#">Home</a></li>
              <li class="about"><a href="https://github.com/1912Alan-Turing1954/Project-React">About</a></li>
            </ul>
          <a href="https://www.linkedin.com/in/logan-m-51427a264/"><button class="contact">Contact</button></a>
          </nav>
        </div>
      
      </header>
      
      <section class="main">
        <div class="todo">
          <label>Todo-List</label><br></br>
          <input
            class="input"
            type="text"   
            value={input} 
            onChange={(e) => setInput(e.target.value)}
          />
          <button class="addBtn" onClick={() => addTodo(input)}>Add</button>
          <ul class="todoList">
            {list.map((todo) => (
              <li key={todo.id}>
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    
      <footer>
        <div class="footer_div">
          <center>
            <div class="footer_links">
              <nav>
                <ul class="#">
                  <li class="about_footer"><a href="https://github.com/1912Alan-Turing1954/Project-React" class="#">About</a></li>
                  <li class="contact"><a href="#">Contact</a></li>
                </ul>  
              </nav>
            </div>
          </center>
          <div class="desc_info">
            <p>
              Made in Scotland @ 2023 VsCode
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
