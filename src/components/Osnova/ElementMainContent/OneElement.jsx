import { styled } from "styled-components"
import imggirls from '../../img/рисунок с девушками.png'
import { MainColor,TextContent,Textp,ImgUp } from "../../../shared/ReusedStyles"
import { Pahts } from "../../../shared/Paths"

const Main = styled.div`
    padding-top: 50px;
`


export const OneElement = () => {
    return (
        <Main>
            <MainColor>
                <TextContent>
                <h1>ДОМ ДРУЖБЫ НАРОДОВ</h1>
                <h2>КАЛЫКЪЁСЛЭН ЭШЪЯСЬКОН ЮРТСЫ</h2>
                <Textp>История Удмуртии – это богатая история сотрудничества народов, которые её населяют. Со дня своего основания Дом Дружбы народов призван сделать это историческое достояние достоянием современности. Здесь в мире и согласии живут 136 народов. Здесь чтут традиции друг друга, проводят совместные праздники, сохраняют обычаи и поддерживают добрососедские отношения.</Textp>
                <a href={'#/'+Pahts.indormation}>О нас</a>
                </TextContent>
                <ImgUp src={imggirls}/>
            </MainColor>            
        </Main>
    )
}