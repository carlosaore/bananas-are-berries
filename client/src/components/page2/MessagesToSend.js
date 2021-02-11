import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";
import React from 'react';
import SendMessageList from './SendMessageList';
import ReceivedMessageList from './ReceivedMessagesList'

export default function MessagesToSend() {
    return (
        <MessagesWrapper>
            <SendMessageList/>
        </MessagesWrapper>
    )
}

const MessagesWrapper = styled.div`
    background-color: linear-gradient(180deg, rgb(74, 207, 150), rgb(45, 166, 232));
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");

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
