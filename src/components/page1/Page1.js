import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";
import CreateQR from './CreateQR';
import QrCode from './QrCode';
import SavedMessages from './SavedMessages'

const PageOne = () => (
    <Context.Consumer>
        {(value) => (
            <ApiContext.Consumer>
                {(api) => (
                    <SavedMessages/>
                )}
            </ApiContext.Consumer>
        )}
    </Context.Consumer>
);



export default PageOne;