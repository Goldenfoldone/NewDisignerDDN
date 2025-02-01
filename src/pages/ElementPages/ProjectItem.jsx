import { styled } from "styled-components"

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 20px;
    gap: 32px;
`
const MainImg= styled.img`
    width: 281px; 
    height: 120px;
    object-fit: cover;
    object-position: center center;
`
const Maina = styled.a`
    text-decoration: none;
    width: 246px;
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
`
export const ProjectItem = (props) =>{
     
    return(
        <Main>
            {props.props.map((item, i) => {
                return(
                    <Itemdiv>
                        <MainImg src={item.img} alt="" />
                        <Maina href="">{item.text}</Maina>
                    </Itemdiv>
                )
            })}
            
        </Main>
    )
}