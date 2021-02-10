import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";

const CreateQR = () => (
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
                    <MessageWrapper>
                    <NameWrapper>
                    <h3>Full Name:</h3>
                        <input />
                    </NameWrapper>
                    <PhoneWrapper>
                    <h3>Phone Number:</h3>
                        <input />
                    </PhoneWrapper>
                    <TextWrapper>
                    <h3>Message:</h3>
                        <textarea />
                    </TextWrapper>
                    </MessageWrapper>
                    <ButtonWrapper>
                        <button>Generate QR</button>
                    </ButtonWrapper>
                    </SenderWrapper>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

const SenderWrapper = styled.div`
 background-image: linear-gradient(180deg, rgba(74, 207, 150, .9), rgb(45, 166, 232, .9));
 height:100vh;`

const LogoWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
text-align:center;
align-items:center;

    img {
        width:50px;
        height:auto;
        margin-right:5px;

    }
    h4{
        color:white;
        margin-bottom:30px;
        font-size:20px;
    }

   
`
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

export default CreateQR;