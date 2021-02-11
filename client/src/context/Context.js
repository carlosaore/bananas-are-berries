import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
    state = {
        sendStatus: false,
    };

    send = () => {
        this.setState({sendStatus: !this.state.sendStatus});
    };

    render() {
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    send: this.send,
                    /* if you write new functions write them here as i did with the test function */
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}
export default Provider; 