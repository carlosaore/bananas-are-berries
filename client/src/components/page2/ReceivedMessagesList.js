import { Context } from "../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";

export default function ReceivedMessagesList() {
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
        </SavedMessagesWrapper>
    )
}

const SavedMessagesWrapper = styled.div`
   
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

const Inbox = styled.div``