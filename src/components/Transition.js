import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import '../css/App.css'

class TransitionComp extends Component {
  state = {
    show: true,
  }

  showDiv = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        {/*
          This is a solution with Style inline
        <Transition in={this.state.show} timeout={2000} mountOnEnter unmountOnExit>
          {state => (
            <div
              style={{
                background: 'red',
                height: '100px',
                transition: 'all 2s ease',
                opacity: state === 'exited' || state === 'exiting' ? 0 : 1,
              }}
            >
              <p>
                <strong>{state}</strong>
              </p>
            </div>
          )}
        </Transition> */}

        {/* This is a solution with classes */}
        <Transition
          in={this.state.show}
          timeout={{
            enter: 2000,
            exit:1000
          }}
          onEnter={(node) => {console.log('Enter')}}
        >
          {
            state =>
            <div className={`square square-${state}`}>
              {`square square-${state}`}
            </div>
          }

        </Transition>
        <div onClick={this.showDiv} className="showDiv">
          Show or hide
        </div>
      </div>
    )
  }
}

export default TransitionComp
