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
            <Text>Стоимость аренды:</Text>
            <Doptext>1 час - <b>{data.price} рублей</b></Doptext>
            <Text>В стоимость входит:</Text>
            {data.priceincl.split(', ').map((e) => {
                 return <Doptext>{e}</Doptext>
            })}
            <Text>Контакты:</Text>            
            <Text><Styleda href="tel:+73412631001">+7 (3412) 63-10-01</Styleda> Миникеева Флюз Чингизовна</Text>
            <Text><Styleda href="tel:+73412631001">+7 (3412) 63-10-37</Styleda> Администратор</Text>

        </Osnova>
        
        </>
    )
}