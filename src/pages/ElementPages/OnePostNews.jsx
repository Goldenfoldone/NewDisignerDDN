import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchOnePost} from '../../http/postAPI';
import { Osnova, CapLetters, Text, Styleda } from "../../shared/StyelNavLink";
import { styled } from "styled-components";
import { LinkSotcSeti } from "./LinkSotcSeti";

const DImg =styled.div`
    display: flex;
    justify-content: center;
`
const NewOsnova = styled(Osnova)`
    display: flex;
    gap: 10px;

    @media (width <= 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const Imgpost = styled.img`
    width: 100%;
    height: 500px;
    object-fit: contain;
    object-position: top;    
    @media (width < 608px) {
        height: 200px;
    }
`

const PostT = styled(CapLetters)`
    color: black;
    font-style: normal;
    font-size: 30px;
    margin-bottom: 10px;
`

const Postext = styled(Text)`
    padding-bottom: 40px;
    padding-right: 10px;
    font-family: 'Futurabookc';
    p a {
        color:#000;
        text-decoration: none;
    }
    p a:hover {
        color: #DB6B4D;
    }
    span{
        font-family: 'Futurabookc' !important;
        font-size: 22px !important;
    }
`
const Content = styled.div`
    border-right: 0px solid #535353;
    width: 80%;
`
const Link = styled(Styleda)`
    font-size: 25px;
`

const Spisok = styled.div`
    display: flex;
    flex-direction: column;
    @media (width < 608px) {
       margin-bottom: 30px;
    }
`
const CapLettersPost = styled(CapLetters)`
    text-align: center;
    @media (width < 608px) {
       font-size: 25px;
        
    }
`

export const OnePostNews = () => {
    const {id} =useParams()
    const [post,setPost] = useState('')
    useEffect(() => {
        fetchOnePost(id).then(data => setPost(data)) 
    }, [])
    return(    
        <NewOsnova>
            <Content>
                <CapLettersPost>{post.title}</CapLettersPost>
                <DImg>
                    <Imgpost src={process.env.REACT_APP_API_URL+'/api/static/' + post.img}/>
                </DImg>
                <Postext  dangerouslySetInnerHTML={{ __html: post.text}}/>
            </Content>
            <div>
                <PostT>Социальные сети</PostT> 
                <LinkSotcSeti />
                <PostT>Проекты:</PostT> 
                <Spisok>
                    <Link href='https://gerber.udmddn.ru/' target="_self">Гербер</Link>
                    <Link href='https://daur.tv/' target="_self">Даур ТВ</Link>
                    <Link href='https://udmddn.ru/tag/tangyra/' target="_self">Тангыра</Link>
                    <Link href='https://mirvdialoge.ru/' target="_self">Мир в диалоге</Link>
                </Spisok>
                
            </div>            
        </NewOsnova>
    )
}