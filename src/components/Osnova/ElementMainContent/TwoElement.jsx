import { styled } from "styled-components"
import { SectionText } from "./SectionText"

const Main = styled.div`
    padding-top: 54px;
`


const FillColor = styled.div`
    display: flex;
    justify-content: space-around;
    height: 495px;
    margin-top: 100px;
    background-color: #2C535E;
    @media (width <= 924px){
        flex-direction: column;
        align-items: center;
        justify-content:space-between;
        gap: 15px;
        height: 520px;
    }
`
const Events =  styled.div`
    z-index: 3;
    @media (width <= 924px){
        &:not(:first-child){
            display: none;
        }
    }
`
const EventsImg = styled.img`
    width:297px;
    height: 268px;
    background-color: black;
    border: 6px solid white;
    border-top: 0px;
    border-bottom: 0px;
    
`
const EventsText = styled.p`
    margin: -4px 0;
    width: 297px;
    background-color: white;
    text-align: left;
    border-end-end-radius: 30px;
    border-end-start-radius: 30px;
    padding-top: 24px;
    padding-left: 30px;
    padding-bottom: 30px;
    font-size: 23pt;
    word-wrap: break-word;
`
const TwoElButton = styled.button`
    display: none;
    @media (width <= 924px){
        display: block;
        background-color:  #F66A55;
        border: 1px solid white;
        height: 50px;
        width: 279px;
        font-size: 20pt;
        margin-bottom: 10px;
    }
`

export const TwoElement = () => {
    return(
        <Main>
            <SectionText text='БЛИЖАЙШИЕ МЕРОПРИЯТИЯ' width={734}/>
            <FillColor>
                <Events>
                    <EventsImg/>
                    <EventsText>ИНФОРМАЦИЯ <br/>О МЕРОПРИЯТИИ ДАТА</EventsText>
                </Events>
                <Events>
                    <EventsImg/>
                    <EventsText>ИНФОРМАЦИЯ <br/>О МЕРОПРИЯТИИ ДАТА</EventsText>
                </Events>
                <Events>
                    <EventsImg/>
                    <EventsText>ИНФОРМАЦИЯ <br/>О МЕРОПРИЯТИИ ДАТА</EventsText>
                </Events>
                <TwoElButton>Ещё</TwoElButton>
            </FillColor>        
        </Main>
    )
}