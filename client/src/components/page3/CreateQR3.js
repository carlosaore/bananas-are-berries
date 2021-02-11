import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import Success from './Success';

const CreateQR3 = () => (
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                
                    <SenderWrapper>
                    <LogoWrapper>
                        <Link to="/">
                        <img src={logo} alt="Octopus-Logo" />
                        </Link>
                        <h4>MAILIO</h4>
                    </LogoWrapper>
                    {
                        !value.state.sendStatus &&

                        <MessageWrapper>
                    <h4>Send encoded message</h4>
                    <NameWrapper>
                    
                    <h3>Recipient Name:</h3>
                         <input
                           type='text'
                            value={value.state.name}
                            onChange={value.handleName}
                       />
                    </NameWrapper>
                    <PhoneWrapper>
                    <h3>Camp Leader Number:</h3>
                    <input
                            type='number'
                            value={value.state.to}
                            onChange={value.handleNumber}
                       />
                    </PhoneWrapper>
                    <TextWrapper>
                    <h3>Message:</h3>
                        <textarea value={value.state.message}
                            onChange={value.handleMessage} />
                    </TextWrapper>
                    <ButtonWrapper>
                        <button onClick={value.handleSubmit}>Send</button>
                    </ButtonWrapper>
                    </MessageWrapper>
                 
                    }
                    {
                        value.state.sendStatus &&
                        <Success/>
                    }
                    

                    </SenderWrapper>
                
                    
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

const SenderWrapper = styled.div`
    background-color: linear-gradient(180deg, rgb(74, 207, 150), rgb(45, 166, 232));
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
 height:100vh;`


const MessageWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h4 {
    color:rgb(175, 76, 224);

}

`

const NameWrapper = styled.div`

h3 {
    margin-bottom:5px;
    font-size:17px;
    color:rgb(175, 76, 224);
}

input{
    width:280px;
    height:30px;
    border:0;
    background-color:rgb(230, 230, 230);
        border-radius:5px;
    box-shadow: 10px 10px 20px 10px rgba(0,0,0,.1)
}
`

const PhoneWrapper = styled.div`
h3 {
    margin-bottom:5px;
    font-size:17px;
    color:rgb(175, 76, 224);
}

input{
    width:280px;
    height:30px;
    border:0;
    background-color:rgb(230, 230, 230);
    border-radius:5px;
    box-shadow: 10px 10px 20px 10px rgba(0,0,0,.1)
}
`



const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;

button {
    width:200px;
        height:50px;
        margin: 45px 0;
        border-radius:10px;
        border:0;
        background-color:rgb(175, 76, 224);
        color:white;
        font-size:17px;
        box-shadow: 10px 10px 30px 20px rgba(0,0,0,.1)
}

`
const TextWrapper = styled.div`
h3 {
    margin-bottom:5px;
    font-size:17px;
    color:rgb(175, 76, 224);
}
    textarea{
        width:280px;
        height:220px;
        border:0;
        background-color:rgb(230, 230, 230);
        border-radius:5px;
        box-shadow: 10px 10px 20px 10px rgba(0,0,0,.1)
    }
`
const LogoWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
text-align:center;


    img {
        width:50px;
        height:auto;
        margin:10px;

    }
    h4{
        color:white;
        margin-bottom:30px;
        font-size:20px;
    }

   
`

export default CreateQR3;