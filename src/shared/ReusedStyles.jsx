import { styled } from "styled-components";
import mainBack from "../components/img/фон.jpg"


export const Main = styled.div`
    background-image: url(${mainBack});
`
export const MainColor = styled.div`
    display: flex;
    background-color: #EADAC8;
    justify-content: space-between;
    padding: 73px 77px 43px 77px;
    gap: 100px;
`
export const ImgUp = styled.img`
    max-width: 508px;
    max-height: 404px;
    @media (width <= 1024px){
        max-width: 358px;
        max-height: 254px;
    }
    @media (width <= 924px){
        display: none;
    }
`
export const Textp = styled.p`
    grid-column: span 3;
    margin: 0 0;
    color: black;
    font-size: 18px;
    text-align: justify;
    margin-bottom: 12px;
    @media (width > 1500px){
        font-size: 20pt;
    }
    @media (width < 1440px){
        font-size: 15pt;
    }
`
export const TextContent = styled.div`
    display: grid;
    color: #CA4D3E;
    grid-template-columns: repeat(3, 1fr);
    
    h1{
        grid-column: span 3;
        margin: 0 0;
        font-weight: 400;
        font-size: 45pt;
        margin-bottom: 12px;
        @media (width < 1440px){
            font-size: 40pt;
        }
    }
    h2{
        grid-column: span 3;
        font-weight: 100;
        margin: 0 0;
        font-size: 30pt;
        margin-bottom: 12px;
        @media (width < 1440px){
            font-size: 25pt;
        }
    }
    a {
        background-color: #F66A55;
        border: 0px;
        border-radius: 10px;
        font-size: 29pt;
        text-decoration: none;
        text-align:center;
        color: white !important;
        cursor: pointer;
        @media (width < 1440px) {
            font-size: 26pt;
            grid-column: span 2;
        }
    }
`
export const Myh1 = styled.h1`
    color: #CA4D3E;
    margin: 0 0;
    font-weight: 400;
    font-size: 45pt;
    margin-bottom: 12px;
    @media (width < 1440px){
        font-size: 40pt;
    }
`
