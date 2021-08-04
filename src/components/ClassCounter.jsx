import React, { Component } from 'react'

import { decrement, increment } from '../reducers/counterSlice'
import { connect } from 'react-redux'

class ClassCounter extends Component {
   
    render() {
        return (
            <div>
      <h2>Redux-toolkit - Class Component</h2>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => this.props.increment()}
        >
          Increment
        </button>
        <span>{this.props.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => this.props.decrement()}
        >
          Decrement
        </button>
      </div>
    </div>
        )
    }
    
    
}

const mapStateToProps = (state) => {
    return {value:state.counter.value}
    
}
const mapDispatchToProps = () =>
{
    return ({
        increment,
        decrement
    })

}

export default connect(mapStateToProps,mapDispatchToProps())(ClassCounter)
