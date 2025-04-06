import { styled } from "styled-components"
import { SectionText } from "./SectionText"
import { SectionNew } from './SectionNew';
import { useEffect, useState } from "react";
import { fetchPost } from "../../../http/postAPI";

const Main = styled.div`
    padding-top: 54px;
    z-index: 100;
`
const GridNew =styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 75px;
    margin-right: 74px;
    margin-top: 37px;
    gap: 79px;
    @media (width <= 1315px){
        gap: 20px;
    }
    @media (width <= 1200px){
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
`

export const ThreeElement = () =>{
    function determin_width() { 
        if (window.screen.availWidth <= 1200){
            return true;
        } else {
            return false;
        }
    }
    const [posts, setPosts] = useState()    
    useEffect(()=>{
        fetchPost({category: "Новости"}).then(data => {setPosts(data.rows)})
     }, [])
    if (!posts){
        return null;
    }
    posts.sort((a,b)=> parseFloat(b.id)-parseFloat(a.id))
    return(
        <Main>
            <SectionText text='НОВОСТИ' width={245}/>
            <GridNew>
                <SectionNew span={3} display='flex' size={40}  widthimg={440} heightimg={295} contnet={posts[0]}/>
                <SectionNew span={determin_width() ? 3: 1} display={determin_width() ? 'flex':'grid'} size={determin_width() ? 40:25}   widthimg={determin_width() ? 440:292} heightimg={determin_width() ? 295:196} contnet={posts[1]}/>
                <SectionNew span={determin_width() ? 3: 1} display={determin_width() ? 'flex':'grid'} size={determin_width() ? 40:25}   widthimg={determin_width() ? 440:292} heightimg={determin_width() ? 295:196} contnet={posts[2]}/>
                <SectionNew span={determin_width() ? 3: 1} display={determin_width() ? 'flex':'grid'} size={determin_width() ? 40:25}   widthimg={determin_width() ? 440:292} heightimg={determin_width() ? 295:196} contnet={posts[3]}/>
            </GridNew>
        </Main>
    )
}