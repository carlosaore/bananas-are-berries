import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
    state = {
        sendStatus: false,
        name: '',
        to: '',
        message: ''
    };

    send = () => {
        this.setState({sendStatus: !this.state.sendStatus});
    };

    handleName = (ev) =>{
        this.setState({name: ev.target.value})
    }

     handleNumber = (ev) =>{
        this.setState({to: ev.target.value})
    }
     handleMessage = (ev) =>{
        this.setState({message: ev.target.value})
    }

    handleSubmit = (event)=>{
        event.preventDefault();
    // connect to BE
    fetch('http://localhost:5000/sendtochief', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        name: this.state.name,
        to: Number(this.state.to),
        message: this.state.message
      })
    })
    .then(response => {
      if(response.status === 200) { 
       console.log('success')
      }
    })

    }

    render() {
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    send: this.send,
                    handleName: this.handleName,
                    handleNumber: this.handleNumber,
                    handleMessage: this.handleMessage,
                    handleSubmit: this.handleSubmit

                    /* if you write new functions write them here as i did with the test function */
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}
export default Provider; 