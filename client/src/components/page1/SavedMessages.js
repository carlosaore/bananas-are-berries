import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";

export default function SavedMessages() {
    return (
        <SavedMessagesWrapper>
            <LogoWrapper>
                    <Link to="/">
                    <img src={logo} alt="Octopus-Logo" />
                    </Link>
                    <h4>MAILIO</h4>
                    </LogoWrapper>
        </SavedMessagesWrapper>
    )
}

const SavedMessagesWrapper = styled.div`
    background-image: linear-gradient(180deg, rgba(74, 207, 150, .9), rgb(45, 166, 232, .9));
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