import React, {useState} from 'react';
import styled from 'styled-components';
import { Context } from "../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";


const qrNumber = Math.floor((Math.random()*1000000)+1);

const GenerateQR = () => (
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                    <>  
                    <QrWrapper>
                    <QR>
                    <h5>Below is your unique encrypted QR code which contains your message and sending details. The message cannot be displayed until it has reached the recipients phone. </h5>
                    <h2>QR Code ID: {qrNumber}</h2>
                    <img src='https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png'/>
                    </QR>
                    <ButtonWrapper>
                        <button onClick={value.send}>
                           Back
                        </button>
                        <button>Save QR</button>
                    </ButtonWrapper>
        </QrWrapper>
                      
                    </>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);

const QrWrapper = styled.div`
    background-color: linear-gradient(180deg, rgb(74, 207, 150), rgb(45, 166, 232));
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
 `


const QR = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;

img{
    width:300px;
    
}

h2 {
    color:white;
}

h5 {
    margin:5px 0 10px 0;
    color:white;
}
`

const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;

button {
    width:140px;
        height:50px;
        margin: 45px 10px;
        border-radius:10px;
        border:0;
        background-color:rgb(175, 76, 224);
        color:white;
        font-size:17px;
        box-shadow: 10px 10px 30px 20px rgba(0,0,0,.1)
}

`

export default GenerateQR;