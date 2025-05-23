import styled from "styled-components";
import { CapLetters, Osnova } from "../shared/StyelNavLink"
import { useEffect, useState } from "react";
import { fetchEvents } from "../http/evenstsAPI";
import Pagination from 'react-bootstrap/Pagination';
import { AllPosts } from "./AllPosts";

 const PaginationNews = styled(Pagination)`
    justify-content: center;
    padding-top: 30px;
    gap: 20px;
 `

const Prev = styled(Pagination.Prev)`
    a{
        background: none;
        border: 0px solid;
        color: black;
    }
    span{
        font-size: 25px;
    }    
 `
const Next = styled(Pagination.Next)`
    a{
        background: none;
        border: 0px solid;
        color: black;
    }
    span{

        font-size: 25px;
    }   
 `

 const Items = styled(Pagination.Item)`
    a{
        background: none;
        font-size: 25px;
        border: 0px solid;
        color: black;
    }
    span{
        font-size: 25px;
    } 

    &.active{
        a{
            border: 0px solid;
            background-color: #F66A55;
            color: white;
    }
        
    }
 `
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


export const Events = (props) =>{
     const [posts, setPosts] = useState()
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPages, setTotalPages] = useState(0);
        const itemsPerPage = 5;
        const maxVisiblePages = 5;
    
        useEffect(()=>{
            
           fetchEvents(itemsPerPage, currentPage).then(data=>{
              setTotalPages(Math.ceil(data.count / itemsPerPage))
              setPosts(data.rows)
            })
    
        }, [props.name, currentPage])
        if (!posts){
            return null;
        }
    
        const getPageNumbers = () => {
            const pages = [];
            
            // Все страницы помещаются - показываем все
            if (totalPages <= maxVisiblePages) {
              for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
              }
            } 
            // Много страниц - добавляем ...
            else {
              const halfVisible = Math.floor(maxVisiblePages / 2);
              let startPage = Math.max(1, currentPage - halfVisible);
              let endPage = Math.min(totalPages, currentPage + halfVisible);
              
              // Корректируем границы если близко к краям
              if (currentPage <= halfVisible) {
                endPage = maxVisiblePages;
              } else if (currentPage >= totalPages - halfVisible) {
                startPage = totalPages - maxVisiblePages + 1;
              }
              
              // Добавляем первую страницу и ...
              if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) pages.push('...');
              }
              
              // Основной диапазон
              for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
              }
              
              // Добавляем ... и последнюю страницу
              if (endPage < totalPages) {
                if (endPage < totalPages - 1) pages.push('...');
                pages.push(totalPages);
              }
            }
            
            return pages;
          };
    return(
        <SubOsnova>
        <CapLetters>{props.name}</CapLetters>
        <AllPosts massiv={posts}/>
        <PaginationNews>
                <Prev onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}  />                  
                {getPageNumbers().map((page, index) => (
                page === '...' ? (
                    <span key={`ellipsis-${index}`}>...</span>
                ) : (
                    <Items
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'active' : ''}
                    >
                         {page}
                    </Items>
                )
                ))}
                <Next onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}/>
            </PaginationNews>
        </SubOsnova>
    )
}