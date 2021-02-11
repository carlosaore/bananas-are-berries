import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import QRCode from 'qrcode';
import styled from 'styled-components';

const GeneQr = () => {

    const [text, setText] = useState("")

    const [imageQr, setImageQr] = useState("")

    const generateQR = async () => {
        try {
          const res = await QRCode.toDataURL(text);
          setImageQr(res);
        } catch (err) {
          console.error(err)
        }
      }

    return (
        <StyledGeneQrForm>
        <div className="qr__form">
            <textarea className="textarea" type="text" placeholder="Type something..." 
            onChange={(e) => setText(e.target.value)} />

            <Button className="btn" variant="contained" 
            onClick={() => generateQR()}> GENERATE QR </Button>

            {imageQr ? ( <a href={imageQr} download> <img src={imageQr} alt="QR"/> </a> ) : null}
        </div>
        </StyledGeneQrForm>
    )
}
const StyledGeneQrForm = styled.div `
.qr__form {
    display: flex;
    flex-direction: column;
}
.textarea {
    height: 200px;
    margin: 20px;
} 
.textarea::placeholder { 
    opacity: 0.3;
}
.btn {
    width:200px;
        height:50px;
        margin: auto;
        border-radius:10px;
        border:0;
        background-color:rgb(175, 76, 224);
        color:white;
        font-size:17px;
        box-shadow: 10px 10px 30px 20px rgba(0,0,0,.1);
        margin-bottom: 25px;
}
img {
    width: 100%;
}
`
export default GeneQr;