import { styled } from "styled-components";
import { Pahts } from "../../../shared/Paths";


const New = styled.div`
    display: ${props => props.display};
    grid-column: span ${props => props.span};
    gap: 10px;
    @media (width <=768px){
        display: flex;
        flex-direction: column;
    }
`
const NewContent = styled.div`
    display: ${props => props.display};
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    
`

const Img = styled.img`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 12px;
    @media (width <= 724px){
        width: 300px;
        height: 200px;
    }
    @media (width <= 414px){
        padding-right: 0px;
    }
`
const Text = styled.p`
    font-size: ${props => props.fontsize}px;
    text-overflow: ellipsis;
    white-space: ${props => props.whitespace};
    overflow: hidden;
     display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    @media (width <=922px){
        font-size: 19pt;
    }
`
export const Newbutton = styled.a`
    border: 0px;
    font-size: 26px;
    color: #F0EAE0;
    text-decoration: none;
    text-align: center;
    width: 201px;
    height: 56px;
    border-radius: 5px;
    background-color: #2C535E;
    padding-top: 9px;
    cursor: pointer;
    &:hover{
        background-color: #F66A55;
    }
    @media (width <=922px){
        font-size: 19pt;
        width: 180px;
        height: 40px;
    }
    @media (width <= 610px){
        height: 56px;
    }
`

export const SectionNew = (props) => {
    const post = props.contnet
    return(
        <New span={props.span} display={props.display}>
        <Img src={process.env.REACT_APP_API_URL +'/api/static/'+ post.img} width={props.widthimg} height={props.heightimg}/>
        <NewContent display={props.display}>
            <Text fontsize={props.size} whitespace={props.whitespace} dangerouslySetInnerHTML={{__html: post.title}}></Text>
            <Newbutton href={'/#/'+ Pahts.onepostpage + `/${post.id}`} target="_blank">Подробнее</Newbutton>
        </NewContent>
        
        </New>
    )
}