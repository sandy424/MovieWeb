import {useEffect, useState} from "react";

function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(value === "") {
      return;
    }
    setTodo(currentArray => [value, ...currentArray]);
    setValue("");
  };  
  console.log(todo);
  return (
    <div>
      <h2>My To Do ({todo.length})</h2>
      <form onSubmit={onSubmit}>
        <input value={value} type="text" placeholder="Write your to do.." onChange={onChange} />
        <button>Add To Do</button>
      </form>
      <hr/>
      {todo.map((item, index) => 
        <li key={index}>{item}</li>)}
    </div>
  );
}

export default App;