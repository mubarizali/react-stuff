import React,{useState} from "react";
import { Counter } from "./features/counter/Counter";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";





const App = () =>{
  const [state, setState] = useState({value:false})
  
  
  
    return (
     <div>
      <Counter></Counter>
      <button onClick={()=>setState({value:!state.value})}>Click</button>
      <ClassComponent myProp={(state.value)?'Different Props':'Passed Prop'} ></ClassComponent>
      <FunctionalComponent myProp={(state.value)?'Different Props':'Passed Prop'}></FunctionalComponent>
      
      </div>
    );
  
}

export default App;
