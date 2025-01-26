import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from './../../index';
import { useContext, useEffect } from "react"
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Pahts } from '../../shared/Paths';
import { fetchPost } from "../../http/postAPI";

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


export const NoteNewsAll = () => {
    const {new_post} = useContext(Context)
    const histo = useNavigate()
    useEffect(() =>{
        fetchPost().then(data => new_post.setPosts(data.rows))
    }, [])
    return (
        <Osnova>
        {new_post.posts.map(post =>
            <Card style={{ width: '18rem' }} key={post.id}>
                <Card.Img variant="top" src={process.env.REACT_APP_API_URL +'/api/static/'+ post.img} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Text  dangerouslySetInnerHTML={{ __html: post.text}}>
                    
                    </Text>
                    <Button variant="primary" onClick={() =>histo('/admin/note/' + post.id)}>Редактирование</Button>
                </Card.Body>
            </Card>
        )
        }
        </Osnova>
    )
}