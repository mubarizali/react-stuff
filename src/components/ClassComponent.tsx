import React, { Component } from 'react'
import PropTypes from 'prop-types'

type MyProps = { myProp:string }; //define everything that is going to be contained in your props here
type MyState = { value: string, toggle:Boolean }; //define everything that is going to be contained in your state here

export default class ClassComponent extends Component<MyProps,MyState> { //any can be passed as well

    static defaultProps = {
        myProp: 'stranger'
      }
    
    // For some reason this is obsolete
    // constructor(props:MyProps) {
    //     super(props)
        
    
    //     this.state = {
    //         value: props.name,
    //     };
    // }

    state =
    {
        value:this.props.myProp, // Don't do this generally, i.e. copying props into states
        toggle:false

    }
    
    componentDidMount()
    {
        console.log('[CC] Inside ComponentDidMount')
        this.setState(
            {value:this.state.value + " (Component Mounted)"}
        )
    }
    
    componentDidUpdate(prevProps:MyProps,prevState:MyState) //componentDidUpdate(prevProps, prevState, snapshot)
    {
    console.log('[CC] Inside ComponentDidUpdate')
       if(prevProps.myProp !== this.props.myProp)
       {
           this.setState({value:`safely updated inside componentDidUpdate with props: ${this.props.myProp}`})
       }
    }

    componentWillUnmount()
    {
        console.log("Unmounting Class Component")
    }
    
      
    

    render() {
        return (
            <div>
                <h2>Tis a class component</h2>
                <h3>current state: {this.state.value}</h3>
                <button onClick={()=>this.setState({toggle: !this.state.toggle})}>
                Change from {(this.state.toggle)? "Truthy":"Falsy"}
                </button>

                
            </div>
        )
    }
}
