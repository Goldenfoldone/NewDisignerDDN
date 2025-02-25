import { styled } from "styled-components"
import { SectionText } from "./SectionText"
import { useEffect, useState } from "react"
import { fetchEvents } from "../../../http/evenstsAPI"


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
    padding-right: 24px;
    font-size: 23pt;
    word-wrap: break-word;
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
    const [posts, setPosts] = useState()    
    useEffect(()=>{
        fetchEvents().then(data => {setPosts(data.rows)})
    }, [])
    if (!posts){
        return null;
    }
    posts.sort((a,b)=> parseFloat(b.id)-parseFloat(a.id))
    return (
        <Main>
                <SectionText text='БЛИЖАЙШИЕ МЕРОПРИЯТИЯ' width={734}/>
                <FillColor>
        {posts.map((e, item)=>{
            let day = new Date(e.timeOn)
            let month = new Date(e.timeOn)
            let year = new Date(e.timeOn)
            let dayout = new Date(e.timeOut)
            let monthout = new Date(e.timeOut)
            let yearout = new Date(e.timeOut)
        if (item < 3){
        if (e.timeOut == e.timeOn){
            return(
                    <Events>
                        <EventsImg src={process.env.REACT_APP_API_URL +'/api/static/'+e.img} />
                        <EventsText> <span>{e.title}</span> 
                        {`${day.getDate()} ${month.toLocaleString('default', { month: 'long' })} ${year.getFullYear()}`}</EventsText>
                    </Events>)
            
        }else {
            
            return(
                    <Events>
                            <EventsImg src={process.env.REACT_APP_API_URL +'/api/static/'+e.img} />
                            <EventsText> <span>{e.title}</span> 
                           с {`${day.getDate()} ${month.toLocaleString('default', { month: 'long' })} ${year.getFullYear()}`} по {`${dayout.getDate()} ${monthout.toLocaleString('default', { month: 'long' })} ${yearout.getFullYear()}`}</EventsText>
                            
                            
                    </Events>  
            )     
                  
        }}
    })}
    <TwoElButton>Ещё</TwoElButton>
    </FillColor>        

</Main>)
}