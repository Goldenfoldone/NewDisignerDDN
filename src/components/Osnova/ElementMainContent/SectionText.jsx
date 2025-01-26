import { styled } from "styled-components"
import rhomb from "../../img/Ромб_секция2.png"

const SectionName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
`
const ImgRhomb =styled.img`
    width: 21px;
    height: 28px;
    z-index: 500;
    @media (width <= 724px) {
        width: 10px;
        height: 17px;
    }
`
const SctionP = styled.p`
    font-size: 35pt;
    margin: 0 0;
    color: #2C535E;
    width: ${props => props.width}px;
    text-align: center;
    z-index: 500;
    @media (width <= 922px){
        width: fit-content;
        font-size: 30pt;
    }
    @media (width <= 724px) {
        font-size: 20pt;
    }
`



export const SectionText = (props) => {
    return(
        <SectionName>
                <ImgRhomb src={rhomb} />
                <SctionP width={props.width}>{props.text}</SctionP>
                <ImgRhomb src={rhomb} />
        </SectionName>
    )
}