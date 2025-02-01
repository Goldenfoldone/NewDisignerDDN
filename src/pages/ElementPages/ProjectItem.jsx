import { styled } from "styled-components"

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 20px;
    gap: 20px;
`
const MainImg= styled.img`
    height: 400px;
`
const Maina = styled.a`
    text-decoration: none;
`

const Itemdiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EADAC8;
    border-radius: 30px;
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