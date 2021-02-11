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
            /> :  <p>{scanResultQr}</p>} </p>
        </div>
        </StyledDecodeQrForm>
    )
}
const StyledDecodeQrForm = styled.div `
.scan__qr__form {
    margin: 10px;
}

`
export default DecodeQr;