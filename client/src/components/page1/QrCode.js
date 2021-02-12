import React, {useState} from 'react';
import styled from 'styled-components';
import DecodeQr from '../page2/decode-qr/DecodeQr';
import { Link } from "react-router-dom";

export default function QrCode() {

    const [saveQR, setSaveQR] = useState(false)

    function showSave() {
        setSaveQR(true)
    }

    return (
        <QrWrapper>
                {!saveQR ? 
                <DecodeWrapper>
                <QR>
                <h2>Please Scan a QR code to view Message</h2>
                </QR>
                <DecodeQr/>
                </DecodeWrapper>
                : 
                <h3>Your QR Message has been saved. </h3> 
                }
                    <ButtonWrapper>
                    <Link to='/'> <button >Go Back</button></Link>
                            <button onClick={showSave}>Save QR</button>
                    </ButtonWrapper>
        </QrWrapper>
    )
}

const QrWrapper = styled.div`
    background-color: linear-gradient(180deg, rgb(74, 207, 150), rgb(45, 166, 232));
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
height:100vh;

h3{color:white};
 `


const QR = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
/* align-items:center; */

img{
    width:300px;
    
}

h2 {
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

const DecodeWrapper = styled.div`
`