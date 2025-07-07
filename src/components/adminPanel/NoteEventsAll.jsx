import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from './../../index';
import { useContext, useEffect,useState } from "react"
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import { deleteEvents, fetchEvents } from '../../http/evenstsAPI';

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
const Osnova = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 50px;
    justify-content: space-around;
    margin-top: 25px;

`

const Text = styled(Card.Text)`
    display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const NoteAdminButton = styled(Button)`
    margin-right:10px;
    background-color: ${props => props.color};
    border: 0 ;
    .btn:hover{
        background-color: ${props => props.color};
    }
`


export const NoteEventsAll = () => {
    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState()
    const handleClose = () => setShow(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;
    const maxVisiblePages = 5;
    const handelShowYES = () => {
        setShow(false);
        deleteEvents(postToDelete.id).then(() => {window.location.reload()})
    }    
    
    const histo = useNavigate()
    useEffect(() =>{
        fetchEvents(itemsPerPage, currentPage).then(data=>{
          setTotalPages(Math.ceil(data.count / itemsPerPage))
          setPosts(data.rows)})
    }, [currentPage])
    const handleShow = (post) => {
            setPostToDelete(post);
            setShow(true)
            
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
    return (
        <Osnova>
        {(posts||[]).map(post =>
            <Card style={{ width: '18rem' }} key={post.id}>
                <Card.Img variant="top" src={process.env.REACT_APP_API_URL +'/api/static/'+ post.img} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Text  dangerouslySetInnerHTML={{ __html: post.text}}>
                    
                    </Text>
                    <NoteAdminButton variant="primary" onClick={() =>histo('/admin/adminevents/' + post.id)}>Редактирование</NoteAdminButton>
                    <NoteAdminButton variant="danger" color='red' onClick={()=> handleShow(post)}>Удаление</NoteAdminButton>
                </Card.Body>
            </Card>
            
        )
        }
        <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Удаление записи  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Название записи: {postToDelete?.title}  
                    </Modal.Body>
                    <Modal.Body>
                        Её уже нельзя будет вернуть или востановить
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Нет
                    </Button>
                    <Button variant="primary" onClick={handelShowYES}>
                        Да
                    </Button>
                    </Modal.Footer>
            </Modal>
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
        </Osnova>
    )
}