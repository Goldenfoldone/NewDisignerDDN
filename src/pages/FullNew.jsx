import { styled } from "styled-components";
import { CapLetters, Osnova } from "../shared/StyelNavLink"
import { useEffect, useState } from "react";
import { fetchPost } from "../http/postAPI";
import { AllPosts } from "./AllPosts";




 
 
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

 
 
 export const FullNew = (props) => {
    const [posts, setPosts] = useState()
    const [count, setCount] = useState()
    useEffect(()=>{
        fetchPost({category: props.name}).then(data => {setPosts(data.rows); setCount(data.count);})
    }, [props.name])
    if (!posts){
        return null;
    }
    console.log(count)
    posts.sort((a,b)=> parseFloat(b.id)-parseFloat(a.id))
    return(
    <SubOsnova>
            <CapLetters>{props.name}</CapLetters>        
            <AllPosts massiv={posts}/>
                
    </SubOsnova>)
    


};