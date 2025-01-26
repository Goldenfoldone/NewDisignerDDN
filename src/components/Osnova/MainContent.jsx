import { styled } from "styled-components"
import { OneElement } from "./ElementMainContent/OneElement"
import { TwoElement } from "./ElementMainContent/TwoElement"
import oneornament from "../img/орнамент1.png"
import twoornament from "../img/орнамент2.png"
import { ThreeElement } from "./ElementMainContent/ThreeElement"
import { FourElements } from "./ElementMainContent/FourElement"


const OneOrnament = styled.img`
    display: inline-block;
    position: absolute;
    z-index: 2;
    top: 1150px;
    right: 0;
    @media (width < 1024px){
        display: none;
    }
    
`
const TwoOrnament = styled.img`
    display: inline-block;
    position: absolute;
    z-index: 2;
    top: 3500px;
    @media (width <=1200px){
        top: 4400px;
    }
    @media (width < 1024px){
        display: none;
    }
`

export const MainContent = () =>{
    return(
        <>
        <OneElement/>
        <TwoElement/>
        <OneOrnament src={oneornament}/>
        <ThreeElement/>
        <FourElements/>
        <TwoOrnament src={twoornament}/>
        </>
    )
}