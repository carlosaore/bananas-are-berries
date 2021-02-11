import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Context } from "../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";
import Message from './Message';
import react, {useState} from 'react'

export default function SendMessageList() {


    return (
        <SavedMessagesWrapper>
            <Card>
            <h3>Message 1</h3>    
            </Card> 
            <Card>
            <h3>Message 2</h3>    
            </Card>     
            <Card>
            <h3>Message 3</h3>    
            </Card>  
            <Card>
            <h3>Message 4</h3>    
            </Card>  
            <Card>
            <h3>Message 5</h3>    
            </Card> 
            <ButtonWrapper>
                        <button>Send Messages</button>
                    </ButtonWrapper> 
        </SavedMessagesWrapper>
    )
}

const SavedMessagesWrapper = styled.div`
     background-color: linear-gradient(180deg, rgb(74, 207, 150), rgb(45, 166, 232));
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  height:100vh;
 `

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

const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;

h3{
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
    width:300px;
    height:60px;
    background-color:white;
    border-radius:10px;
    margin:12px 0;
}

`

const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;

button {
    width:200px;
        height:60px;
        margin: 45px 10px;
        border-radius:10px;
        border:0;
        background-color:rgb(175, 76, 224);
        color:white;
        font-size:17px;
        box-shadow: 10px 10px 30px 20px rgba(0,0,0,.1)
}

`

const Inbox = styled.div``