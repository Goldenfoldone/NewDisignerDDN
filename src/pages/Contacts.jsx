import { SectionText } from "../components/Osnova/ElementMainContent/SectionText"
import { styled } from "styled-components"
import iconvk from '../components/img/svg/vk.svg'
import icontelegram from '../components/img/svg/telegram.svg'

const Main = styled.div`
   background-color: #3D545E;
   display: flex;
   justify-content: space-evenly;
   padding-top: 30px;
   padding-bottom: 30px;
   margin-top: 30px;
   @media (width <=768px) {
        flex-direction: column;
    }
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    @media (width <=768px) {
        padding-left: 25px;
    }
`
const Glava = styled.h1`
    color: #F66A55;
`
const Link = styled.a`
    color:#F0EAE0;
    font-size: 40px;
    text-decoration: none;
    padding-left: ${props => props.margin}px;

    @media (width <=768px) {
        font-size: 20px;
        padding-left: 30px;
    }
`

const Contact = styled.div`
    background-color: #F66A55;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 60px;
    margin-bottom: 60px;
`
const Text2 = styled.div`
    display: flex;
    padding-left: 250px;
    padding-top: 20px;
    gap: 100px;
    @media (width <=768px) {
        flex-direction: column;
        padding-left: 30px;
        gap: 20px;
    }
    
`
const Text3 = styled.div`
     display: flex;
     gap: 20px;
     
     img{
        width: 60px;
        @media (width <=768px) {
        width: 30px;
        }
     }
     a{
        font-size: 40px;
        font-weight: 100;
        text-decoration: none;
        color: #F0EAE0;
        @media (width <=768px) {
        font-size: 20px;
        }
     }
`
const MyFrames = styled.div`
    display: flex;
    justify-content: center;

    iframe{
        width: 750px;
        @media (width <=768px) {
        width: 350px;
        margin-top: 20px;
        }
    }

    
`


export const Contacts = () => {
    return(
        <>
        <SectionText text='КОНТАКТЫ'/>
        <Main>
            <Text>
                <Glava>АДРЕС:</Glava>
                <Link>г.Ижевск,</Link>
                <Link>ул.Орджоникидзе,33а</Link>
                <Glava>Телефон:</Glava>
                <Link href="tel:+73412631011">+7 (3412) 63-10-11</Link>
                <Glava>E-MAIL:</Glava>
                <Link href="mailto:mail@ddn.udmr.ru">mail@ddn.udmr.ru</Link>
            </Text>
            <MyFrames>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaec335d9cc34384cc90617bb8f06387c577ac4930ee57bb3d028455e0351d93f&amp;source=constructor"  frameborder="0"></iframe>
            </MyFrames>
        </Main>
        <Contact>
            <Link margin={250}>НАШИ СООБЩЕСТВА:</Link>
            <Text2>
                <Text3>
                    <img src={iconvk} alt="" />
                    <a href="https://vk.com/udmddn" >https://vk.com/udmddn</a>
                </Text3>
                <Text3>
                    <img src={icontelegram} alt="" />
                    <a href="https://t.me/udmddn">https://t.me/udmddn</a>
                </Text3>
            </Text2>
            
        </Contact>
        </>
    )
}