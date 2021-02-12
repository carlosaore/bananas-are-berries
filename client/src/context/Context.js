import React, { Component } from "react";

export const Context = React.createContext();

const caesar = function(word, num) {
    let solved = ""
    num = (num%26 + 26) % 26;
    for (let i = 0; i < word.length ; i++) {
        let ascii = word[i].charCodeAt();
        if ((ascii >= 65 && ascii <= 90)) {
            solved += String.fromCharCode((ascii - 'A'.charCodeAt(0) + num)%26 
            + 'A'.charCodeAt(0)) ;
        } else if(ascii >= 97 && ascii <= 122){
            solved += String.fromCharCode((ascii-'a'.charCodeAt(0) + num) % 26 
            + 'a'.charCodeAt(0));
        } else {
            solved += word[i]
        }
    }
    return solved;
}

class Provider extends Component {
    state = {
        sendStatus: false,
        sendQRcode: false,
        name: '',
        to: '',
        message: ''
    };

    send = () => {
        this.setState({sendStatus: !this.state.sendStatus});
    };

    generateQR = () => {
        this.setState({sendQRcode: !this.state.sendQRcode});
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
        to: 'whatsapp:'+ this.state.to,
        message: caesar(this.state.message,7)
      })
    })
    .then(response => {
      if(response.status === 200) { 
       console.log('success')
      }
    })
     this.send()
    }


    sendQR = (ev)=>{
        ev.preventDefault();
        // connect to BE
        fetch('http://localhost:5000/sendtofam', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
            name: 'Carlos',
            to: 'whatsapp:+34652568088',
            message:"P't dlss, P't hspcl. P't pu h ylmbnll jhtw ulhy aol ivykly. Dpss zluk tvyl tlzzhnlz zvvu"
          })
        })
        .then(response => {
          if(response.status === 200) { 
           console.log('success')
          }
        })
        this.generateQR()
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
                    handleSubmit: this.handleSubmit,
                    sendQR: this.sendQR,
                    generateQR: this.generateQR,

                    /* if you write new functions write them here as i did with the test function */
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}
export default Provider; 