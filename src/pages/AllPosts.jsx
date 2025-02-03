import { styled } from "styled-components"
import {Styledp, Styleda} from "../shared/StyelNavLink";
import { Pahts } from "../shared/Paths";

const Osnova = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    @media (width < 608px) {
        flex-direction: column;

    }
`;

const Img = styled.img`
    max-width: 280px;
    border-radius: 10px;
    @media (width < 608px) {
        max-width: 350px;
        
    }
`;

const Zagolovok = styled.h1`
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    margin:0;
    color: #535353;
    @media (width < 608px) {
        min-width: 280px;
        
    }
`;

const Links = styled(Styleda)`
    font-size: 25px;
`
const Decript = styled(Styledp)`
    font-size: 20px;
    font-style: italic;
    color: #535353;
`



export const AllPosts  = (props) => {
    return(
        <>
        {(props.massiv || []).map((item) => {
            const {img, title, descropion, id} = item;
                return(
                    <>
                        <Osnova>
                            <div>
                                <Img src={process.env.REACT_APP_API_URL+'/api/static/' + img}/>
                            </div>
                            <div>
                                <Zagolovok>{title}</Zagolovok>
                                <Decript>{descropion}</Decript>
                                <Links href={'/#/'+ Pahts.onepostpage + `/${id}`} target="_self">Подробнее &rarr;</Links>
                            </div>
                        </Osnova>
                    </>
                )
            })} 
        </>
    )
}