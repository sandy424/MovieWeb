import {useEffect, useState} from "react";

function App() {
  
  const [key, setKey] = useState("");
  const [counter, setValue] = useState(0);

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKey(event.target.value);

  useEffect(() => {
    console.log("Call the API....");
  }, []);
  useEffect(() => {
    if(key !== "" && key.length > 5){
      console.log("Search for", key);
    }
  }, [key]);

  return (
    <div>
      <input type="text" placeholder="Search here" onChange={onChange} value={key}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;