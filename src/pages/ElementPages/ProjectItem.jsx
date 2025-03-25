import { styled } from "styled-components"
import { Pahts } from './../../shared/Paths';

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 20px;
    gap: 32px;
    @media (width < 750px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
const MainImg= styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
`
const Maina = styled.a`
    text-decoration: none;
    width: 90%;
    background-color: #D96A57;
    color:#EEE9E0;
    font-size: 24px;
    border-radius: 10px;
    padding: 9px;
    &:hover{
        background-color: #EADAC8;
        color: #D96A57;
        font-weight: bold;
    }
    @media (width < 750px) {
        font-size: 18pt;
    }
`

const Itemdiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EADAC8;
    border-radius: 30px;
    padding-bottom: 37px;
    padding-top: 87px;
    gap: 60px;
    @media (width < 750px) {
        gap: 10px;
        padding-bottom: 20px;
        padding-top: 50px;
    }
`
export const ProjectItem = (props) =>{
     
    return(
        <Main>
            {props.props.map((item, i) => {
                console.log(item.id)
                return(
                    <Itemdiv>
                        <a href={'/#/'+ Pahts.oneproject + `/${item.id}`}><MainImg src={item.img} alt="" /></a>
                        <Maina href={'/#/'+ Pahts.oneproject + `/${item.id}`}>{item.text}</Maina>
                    </Itemdiv>
                )
            })}
            
        </Main>
    )
}