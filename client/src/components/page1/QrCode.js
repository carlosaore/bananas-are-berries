import React from 'react';
import styled from 'styled-components';


const qrNumber = Math.floor((Math.random()*1000000)+1);

export default function QrCode() {
    return (
        <QrWrapper>
                    <QR>
                    <h2>QR Code ID: {qrNumber}</h2>
                    <img src='https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png'/>
                    </QR>
                    <ButtonWrapper>
                        <button>Go Back</button>
                        <button>Save QR</button>
                    </ButtonWrapper>
        </QrWrapper>
    )
}

const QrWrapper = styled.div`
${'' /* background-image: linear-gradient(180deg, rgba(74, 207, 150, .9), rgb(45, 166, 232, .9)); */}
height:100vh;
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