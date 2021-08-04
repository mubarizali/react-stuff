import React,{useState} from "react";
import { Counter } from "./components/Counter";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassCounter from "./components/ClassCounter";





const App = () =>{
  const [state, setState] = useState({value:false})
  
  
  
    return (
     <div>
      <Counter></Counter>
      <ClassCounter></ClassCounter>
      <button onClick={()=>setState({value:!state.value})}>Click</button>
      <ClassComponent myProp={(state.value)?'Different Props':'Passed Prop'} ></ClassComponent>
      <FunctionalComponent myProp={(state.value)?'Different Props':'Passed Prop'}></FunctionalComponent>
      
      </div>
    );
  
}

export default App;
