import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";

const Success = () => (
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                    <>  
                    <TextWrapper>
                    <h2>Message succesfully sent!</h2>
                    <ButtonWrapper>
                        <button onClick={value.send}>
                           Back
                        </button>
                        </ButtonWrapper>
                    </TextWrapper>
                      
                    </>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

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
h2 {
    margin-bottom:5px;
    font-size:17px;
    color:rgb(175, 76, 224);
    text-align: center;
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

export default Success;