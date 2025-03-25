import { styled } from "styled-components"
import { BasicFooter } from "../components/Osnova/BasicFooter"
import { BasicMenu } from "../components/Osnova/BasicMenu"
import { Main } from "../shared/ReusedStyles"
import bildbord from '../components/img/different/80_billboard.jpg'

const MinHeight = styled.div`
    min-height: 705px;
`
const Bildbor = styled.img`
    width: 100%;
`

export const MainLayout = (props) => {
    return(
        <Main>
        <Bildbor src={bildbord}/>
        <BasicMenu/>
            <MinHeight>
                {props.children}
            </MinHeight>
        <BasicFooter/>
        </Main>
    )
}