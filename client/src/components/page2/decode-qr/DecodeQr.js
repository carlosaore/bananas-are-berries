import React, { useState, useRef } from 'react';
// import { Button } from '@material-ui/core';
import QrReader from 'react-qr-reader';
import styled from 'styled-components';

const DecodeQr = () => {

    const [scanResultQr, setScanResultQr] = useState("")

    const qrRef = useRef(null)

    const handleScan = (data) => {
        if (data) {
         setScanResultQr(data)
        }
      }

    const handleError = (err) => {
        console.log(err)
      }

      const caesar = function(word, num) {
        let solved = ""
        num = (num%26 + 26) % 26;
        for (let i = 0; i < word.length ; i++) {
            let ascii = word[i].charCodeAt();
            if ((ascii >= 65 && ascii <= 90)) {
                solved += String.fromCharCode((ascii - 'A'.charCodeAt(0) + num)%26 
                + 'A'.charCodeAt(0)) ;
            } else if(ascii >= 97 && ascii <= 122){
                solved += String.fromCharCode((ascii-'a'.charCodeAt(0) + num) % 26 
                + 'a'.charCodeAt(0));
            } else {
                solved += word[i]
            }
        }
        return solved;
    }

    // const onScanQr = () => {
    //     qrRef.current.openImageDialog();
    // }

    return (
        <StyledDecodeQrForm>
        <div className= "scan__qr__form">
            {/* <Button className="btn" variant="contained"
            onClick={onScanQr}> DECODE MESSAGE </Button> */}

            {/* <QrReader
            ref={qrRef}
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
            // legacyMode
            /> */}

            <p> { !scanResultQr ? <QrReader
            ref={qrRef}
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
            // legacyMode
            /> :  <p>{caesar(scanResultQr, -7)}</p>} </p>
        </div>
        </StyledDecodeQrForm>
    )
}
const StyledDecodeQrForm = styled.div `
.scan__qr__form {
    margin: 10px;
}

p {
    color:white;
    font-size:18px;
    text-align:center
}
`
export default DecodeQr;