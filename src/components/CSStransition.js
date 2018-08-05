import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../css/App.css';

class Fade extends Component{
    state = {
        show: true,
      }

    showDiv = () => {
    this.setState({ show: !this.state.show })
    }

    render(){
        return(
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={5000}
                    classNames="square"
                >
                    <div className="square">
                        Hello
                    </div>
                </CSSTransition>
                <div onClick={this.showDiv} className="showDiv">
                    Show or hide
                </div>
            </div>
        )
    }
}


export default Fade;
