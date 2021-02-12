import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";
import 'react-phone-input-2/lib/style.css';
import GeneratedQR from './GeneratedQR'

const CreateQR = () => (
    <Context.Consumer>
         {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                
                    <SenderWrapper>
                    
                    {
                        !value.state.sendQRcode &&

                        <MessageWrapper>
                    <NameWrapper>
                    
                    <h3>Recipient Name:</h3>
                    <input type='text'/>
                    </NameWrapper>
                    <PhoneWrapper>
                    <h3>Recipient Number:</h3>
                    <PhoneInput
                            country={'us'}
                            // value={this.state.phone}
                            // onChange={phone => this.setState({ phone })}
                       />
                    </PhoneWrapper>
                    <TextWrapper>
                    <h3>Message:</h3>
                        <textarea />
                    </TextWrapper>
                    <ButtonWrapper>
                        <button onClick={value.sendQR}>Generate QR</button>
                    </ButtonWrapper>
                    </MessageWrapper>
                 
                    }
                    {
                        value.state.sendQRcode &&
                        <GeneratedQR/>
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
align-items:center;`

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
    background-color:rgb(245, 245, 245);
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
        background-color:rgb(245, 245, 245);
        border-radius:5px;
        box-shadow: 10px 10px 20px 10px rgba(0,0,0,.1)
    }
`

export default CreateQR;