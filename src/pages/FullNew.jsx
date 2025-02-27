import { styled } from "styled-components";
import { CapLetters, Osnova } from "../shared/StyelNavLink"
import { useEffect, useState } from "react";
import { fetchPost } from "../http/postAPI";
import { AllPosts } from "./AllPosts";
import Pagination from 'react-bootstrap/Pagination';



 
 
const SubOsnova = styled(Osnova)`
    padding-bottom: 40px;
    .active{
        span{
            background-color: #F66A55;
            border: 0px;
            border-radius: 5px;
        }
    }
`;
 const PaginationNews = styled(Pagination)`
    justify-content: center;
    padding-top: 30px;
    gap: 20px;
 `
 const Prev = styled(Pagination.Prev)`
    a{
        background: none;
        border: 0px solid;
    }
    span{
        font-size: 25px;
    }    
 `
 const Next = styled(Pagination.Next)`
    a{
        background: none;
        border: 0px solid;
    }
    span{
        font-size: 25px;
    }   
 `
 const Item = styled(Pagination.Item)`
    a{
        background: none;
        font-size: 25px;
        border: 0px solid;
    }
    span{
        font-size: 25px;
    }   
 `
 
 
 export const FullNew = (props) => {
    const [posts, setPosts] = useState()
    const [count, setCount] = useState()
    useEffect(()=>{
        fetchPost({category: props.name}).then(data => {setPosts(data.rows); setCount(data.count);})
    }, [props.name])
    if (!posts){
        return null;
    }
    posts.sort((a,b)=> parseFloat(b.id)-parseFloat(a.id))
    
    if (count> 10){
        let num = [count]
        let page = count / 10 + 1;
        return(
        <SubOsnova>
                <CapLetters>{props.name}</CapLetters>        
                <AllPosts massiv={posts}/>
                    {/*    <PaginationNews>
                            <Prev />
                            <Item active>{1}</Item>
                            {num.map(() => {
                                const nump = []
                                if (page > 10){
                                    
                                    for (let i = Math.ceil(page / 2) - 2; i < Math.ceil(page / 2) + 2; i++) {
                                        nump.push(i)
                                    }
                                    return(
                                        <>
                                             <Pagination.Ellipsis />
                                             {nump.map((i) =>{return <Item key={i}>{i}</Item>})}
                                             <Pagination.Ellipsis />
                                        </>
                                    )
                                }else{
                                    for (let i = 2; i < page; i++) {
                                        nump.push(i)
                                    }
                                    return(<>{nump.map((i) =>{return <Item key={i}>{i}</Item>})}</>)
                                    
                                }
                            })}
                           
            
            
                            
                            <Item>{page}</Item>
                            <Next />
                        </PaginationNews>*/} 
        </SubOsnova>)
    }else {
        return (
            <SubOsnova>
                <CapLetters>{props.name}</CapLetters>        
                <AllPosts massiv={posts}/>
            </SubOsnova>)
    }


};