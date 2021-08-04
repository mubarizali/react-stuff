import React, { FC, ReactElement,useState,useEffect } from "react";

type MyProps = { myProp: string }; //define everything that is going to be contained in your props here
type MyState = { value: string; toggle: Boolean }; //define everything that is going to be contained in your state here

const FunctionalComponent: FC<MyProps> = (props): ReactElement => {
  const [state, setState] = useState({value:props.myProp,toggle:false});

  useEffect(() => {
      setState({...state,value:`${state.value} (Component Mounted)`})
      console.log('Inside UseEffect in ComponentDidMount')
      return () => {
          console.log('UseEffect Cleanup in ComponentDidMount')
      }
  },[])

  useEffect(() => {
    setState({...state,value:`safely updated inside componentDidUpdate with props: ${props.myProp}`})
    console.log('Inside UseEffect in componentDidUpdate')
    return () => {
        console.log('UseEffect Cleanup')
    }
}, [props])
  
  return (
    <div>
      <h2>Tis a Functional component</h2>
      <h3>current state: {state.value}</h3>
      <button onClick={() => setState({...state,toggle:!state.toggle})}>
        Change from {(state.toggle)? "Truthy":"Falsy"}
      </button>
    </div>
  );
};

FunctionalComponent.defaultProps = {
myProp:"init"
}

export default FunctionalComponent;
