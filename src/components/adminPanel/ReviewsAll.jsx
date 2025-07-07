import { useEffect, useState } from "react";
import { fetchReviews } from "../../http/rewiewsAPI";
import styled from "styled-components";

const General = styled.div`
    display: grid;
    grid-template-columns: 100px auto auto;
    margin-top:35px;
    margin-left: 60px;
    margin-right: 60px;
    justify-items: center;
    gap: 10px;   
`
const MeTextTable = styled.p`
    font-size: 25px;
    margin: 0 0;
`
const MyBr = styled.div`
    width: 100%;
    border-bottom: 2px solid black;
    grid-column: span 3;
`

export const ReviewsAll = () =>{
    const [review, setRewiew] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 100;
 
    useEffect(() =>{
            fetchReviews(itemsPerPage, currentPage).then(data=>{
              setRewiew(data.rows)})
        }, [currentPage])

 
    return(
    <General>
   
        <MeTextTable>Номер</MeTextTable>
        <MeTextTable>Email</MeTextTable>
        <MeTextTable>Отзыв</MeTextTable>
        <MyBr></MyBr>
    {(review || []).map((item)=>{
        const {createdAt, id, email, text} = item
        return(
            <>
            <MeTextTable>{id}</MeTextTable>
            <MeTextTable>{email}</MeTextTable>
            <MeTextTable>{text}</MeTextTable>
            <MyBr></MyBr>
            </>
                
        )
    })}
    </General>
    )
}