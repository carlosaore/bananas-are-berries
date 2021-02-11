import React, {useState} from 'react';
import styled from 'styled-components';
import DecodeQr from './decode-qr/DecodeQr';


const qrNumber = Math.floor((Math.random()*1000000)+1);

export default function QrCode() {

    const [expanded, setExpanded] = useState(false)

    function expand() {
        setExpanded(true);
    }

    return (
        <QrWrapper>
                    <Instructions>
                        <p>• Open Camera to Scan QR Code</p>
                        <p>• Press Scan Button to Scan Code</p>
                        <p>• QR will be saved to your send folder</p>
                        <p>• Open camera again to rescan code</p>
                    </Instructions>
                    <QR>
                    {/* {expanded ? <img src='https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png'/> : null} */}
                    {expanded ? <DecodeQr/> : null}
                    </QR>
                    <ButtonWrapper>
                        <button onClick={expand}>Camera</button>
                        <button>Scan</button>
                    </ButtonWrapper>
        </QrWrapper>
    )
}

const QrWrapper = styled.div`
    background-color: linear-gradient(180deg, rgb(74, 207, 150), rgb(45, 166, 232));
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");

 `


const QR = styled.div`
display:flex;
flex-direction:column;
/* justify-content:center; */
/* text-align:center; */
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

const Instructions = styled.div `
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:left;
color:white;
margin:10px 0 40px 15px;

@media(min-width:400px) {
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
    margin:10px 0 40px 0px;
}

p {
    font-size:13px;
    width:80%;
    margin-bottom:2px;
}
`