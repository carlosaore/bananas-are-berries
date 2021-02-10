import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";
import CreateQR2 from './CreateQR2';
import QrCode2 from './QrCode2';
import SavedMessages2 from './SendMessages2'

const PageThree = () => (
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                    <CreateQR2/>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);


export default PageThree; 