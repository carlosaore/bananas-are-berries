import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import styled from 'styled-components';
import logo from "../images/octopus.png";
import twilio from '../images/twilio.png';
import { Link } from "react-router-dom";

const HomePage = () => (
    <LandingPageWrapper>
        <LogoWrapper>
        <img src={logo} alt="Octopus-Logo" />
        <h1>MAILIO</h1>
        </LogoWrapper>
        <ButtonWrapper>
        <Link to="/page1"><button>I Am Bob</button></Link>
        <Link to="/page2"><button>I Am Chief</button></Link>
        <Link to="/page3"><button>I Am Fam</button></Link>
        </ButtonWrapper>
        <Partners>
            <img src={twilio} alt="twilio logo" />
        </Partners>
    </LandingPageWrapper>
);

const LandingPageWrapper = styled.div`
 background-image: linear-gradient(180deg, rgb(74, 207, 150), rgb(45, 166, 232));
 height:100vh;
`

const LogoWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;

    img {
        width:230px;
        height:auto;
        margin-top:40px;

    }
    h1{
        color:white;
        margin-bottom:30px;
    }

   
`

const ButtonWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;


    button{
        width:200px;
        height:50px;
        margin: 15px 0;
        border-radius:10px;
        border:0;
        background-color:rgb(175, 76, 224);
        color:white;
        font-size:17px;
        box-shadow: 10px 10px 30px 20px rgba(0,0,0,.1)
    }
`

const Partners = styled.div`
width:100%;
margin-top:25px;
bottom:0;
display:flex;
justify-content:center;

img{
    width:90px;
    right:0;
    bottom:0;
    margin:20px 10px 15px 20px;
}

`

export default HomePage;
