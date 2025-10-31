import { styled } from "styled-components"
import { SectionText } from "./SectionText"
import { useEffect, useState } from "react"
import { fetchEvents } from "../../../http/evenstsAPI"
import { Pahts } from "../../../shared/Paths"


const Main = styled.div`
    padding-top: 54px;
`


const FillColor = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    padding-bottom: 50px;
    background-color: #2C535E;
    @media (width <= 924px){
        flex-direction: column;
        align-items: center;
        justify-content:space-between;
        gap: 15px;
    }
`
const Events =  styled.a`
    z-index: 3;
    text-decoration: none;
    color: black;
    @media (width <= 924px){
        &:not(:first-child){
            display: none;
        }
    }
`
const EventsImg = styled.img`
    width: 297px;
    object-fit: contain;
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
    padding-right: 24px;
    font-size: 23pt;
    word-wrap: break-word;
    z-index: 10;
    span{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    br{
    }
`
const TwoElButton = styled.a`
    height: 50px;
    width: 279px;
    background-color:  #F66A55;
    border: 1px solid white;
    font-size: 20pt;
    justify-self: center;
    text-decoration: none;
    color: black;
    text-align: center;
    padding-top: 4px;
    &:hover{
    background-color: #F0EAE0;
    border: 1px solid black;
    color: #F66A55;
    }
`
const FlexBox = styled.div`

display:grid;
gap: 10px;
`

const DivColor = styled.div`
   display: flex;
   justify-content: center;
`

export const TwoElement = () => {
    const [posts, setPosts] = useState()    
    useEffect(()=>{
        fetchEvents().then(data => {
            setPosts(data.rows)
        })
    }, [])
    
    if (!posts){
        return null;
    }
    
    // Сортируем по дате окончания события (timeOut) - ближайшие сначала
    const sortedPosts = [...posts].sort((a,b) => {
        const dateA = new Date(a.timeOut);
        const dateB = new Date(b.timeOut);
        return dateA - dateB; // Ближайшие даты будут первыми
    });
    
    // Фильтруем только будущие события
    const currentDate = new Date();
    const futureEvents = sortedPosts.filter(event => {
        const eventDate = new Date(event.timeOut);
        return eventDate >= currentDate;
    });
    
    // Берем только 3 ближайших события
    const nearestEvents = futureEvents.slice(0, 3);
    
    return (
        <Main>
            <SectionText text='БЛИЖАЙШИЕ МЕРОПРИЯТИЯ' width={734}/>
            <FlexBox>
                <FillColor>
                    {nearestEvents.length > 0 ? (
                        nearestEvents.map((e) => {
                            let day = new Date(e.timeOn)
                            let month = new Date(e.timeOn)
                            let year = new Date(e.timeOn)
                            let dayout = new Date(e.timeOut)
                            let monthout = new Date(e.timeOut)
                            let yearout = new Date(e.timeOut)
                            
                            if (e.timeOut === e.timeOn) {
                                return (
                                    <Events href={'/#/'+ Pahts.onepostevents + `/${e.id}`}>
                                        <DivColor>
                                            <EventsImg src={process.env.REACT_APP_API_URL +'/api/static/'+e.img} />
                                        </DivColor>                        
                                        <EventsText> 
                                            {`${day.getDate()} ${month.toLocaleString('default', { month: 'long' })} ${year.getFullYear()}`}
                                        </EventsText>
                                    </Events>
                                )
                            } else {          
                                return (
                                    <Events href={'/#/'+ Pahts.onepostevents + `/${e.id}`}>
                                        <DivColor>
                                            <EventsImg src={process.env.REACT_APP_API_URL +'/api/static/'+e.img} />
                                        </DivColor>
                                        <EventsText> 
                                            с {`${day.getDate()} ${month.toLocaleString('default', { month: 'long' })} ${year.getFullYear()}`} по {`${dayout.getDate()} ${monthout.toLocaleString('default', { month: 'long' })} ${yearout.getFullYear()}`}
                                        </EventsText>
                                    </Events>  
                                )     
                            }
                        })
                    ) : (
                        <EventsText>В ближайшее время мероприятий не запланировано</EventsText>
                    )}
                </FillColor>     
                <TwoElButton href={'/#/'+ Pahts.evnentsfull}>Ещё</TwoElButton>
            </FlexBox> 
        </Main>
    )
}