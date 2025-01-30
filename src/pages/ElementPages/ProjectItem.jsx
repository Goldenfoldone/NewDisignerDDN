import { styled } from "styled-components"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`
const MainImg= styled.img`
    
`
const Maina = styled.a`
    text-decoration: none;

`
export const ProjectItem = (props) =>{
     
    return(
        <Main>
            <MainImg src={props.props[0].img} alt="" />
            <Maina href="">{props.props[0].text}</Maina>
        </Main>
    )
}