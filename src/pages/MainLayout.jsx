import { styled } from "styled-components"
import { BasicFooter } from "../components/Osnova/BasicFooter"
import { BasicMenu } from "../components/Osnova/BasicMenu"
import { Main } from "../shared/ReusedStyles"

const MinHeight = styled.div`
    min-height: 705px;
`

export const MainLayout = (props) => {
    return(
        <Main>
        <BasicMenu/>
            <MinHeight>
                {props.children}
            </MinHeight>
        <BasicFooter/>
        </Main>
    )
}