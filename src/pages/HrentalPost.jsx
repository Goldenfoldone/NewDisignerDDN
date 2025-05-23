import { useParams } from "react-router-dom"
import { styled } from 'styled-components'
import { Osnova, Text, Styleda, Styledp, CapLetters} from "../shared/StyelNavLink"

const Img = styled.img`
    display: grid;
    max-width: 800px;
    margin-bottom: 15px;
    @media (width < 608px) {
        max-width: 100%;
    }
    
`
const Doptext = styled(Styledp)`
    margin-left: 40px;
`
const Title = styled(CapLetters)`
    padding-bottom: 20px;
`



export const Hrentalpost = (props) =>{
    const{id} = useParams()
    const data = props.mas[id]
    return (
        <>
        <Osnova>
            <Title>{data.title}</Title>
            <Img src={data.img}/>
            <Text>Возможности проведения:</Text>
            {data.scope.split('; ').map((e) => {
                 return <Doptext>{e}</Doptext>
            })}
            <Text>В стоимость входит:</Text>
            {data.priceincl.split(', ').map((e) => {
                 return <Doptext>{e}</Doptext>
            })}
            <Text>Примечание: <br />Оплата до 5 часов – почасовая <br /> От 5-8 часов применяется скидка 10% <br /> Свыше 8 часов применяется скидка 20%</Text>
            <Text>Контакты:</Text>            
            <Text><Styleda href="tel:+73412631001">+7 (3412) 63-10-01</Styleda> Миникеева Флюза Чингизовна</Text>
            <Text><Styleda href="tel:+73412631001">+7 (3412) 63-10-37</Styleda> Администратор</Text>

        </Osnova>
        
        </>
    )
}