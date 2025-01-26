import { styled } from "styled-components";
import { CapLetters, Osnova } from "../shared/StyelNavLink"
import { useEffect, useState } from "react";
import { fetchPost } from "../http/postAPI";
import { AllPosts } from "./AllPosts";


 
 
const SubOsnova = styled(Osnova)`
    padding-bottom: 40px;
`;
 
 
 
 export const FullNew = (props) => {
    const [posts, setPosts] = useState()
    console.log(props.name)
    useEffect(()=>{
        fetchPost({category: props.name}).then(data => {setPosts(data.rows)})
    }, [props.name])
    return (
        <>
        <SubOsnova>
            <CapLetters>{props.name}</CapLetters>        
            <AllPosts massiv={posts}/>
        </SubOsnova>
        </>
    )
};