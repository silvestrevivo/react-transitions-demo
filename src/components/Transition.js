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
        {/* {this.state.show ? (
          <div
            style={{
              background: 'red',
              height: '100px',
            }}
          />
        ) : null} */}
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
        </Transition>
        <div onClick={this.showDiv} className="showDiv">
          Show or hide
        </div>
      </div>
    )
  }
}

export default TransitionComp
