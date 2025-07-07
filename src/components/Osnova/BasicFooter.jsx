import { styled } from "styled-components"
import logo from '../img/sign.png'
import iconmail from '../img/svg/icon=mail.svg'
import icontell from '../img/svg/icon=tel.svg'
import iconvk from '../img/svg/icon=vk.svg'
import icontelegram from '../img/svg/icon=telegram.svg'


const Main = styled.div`
    background-color: #2C535E;

`
const FooterMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media (width <= 724px){
        flex-direction: column;
        align-content: center;  
    }
    
`
const LinkFooter = styled.a`
    font-size: 25px;
    color: #E4E0D8;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: #F66A55;
    }
`
const ContactInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 186px 1fr;
    padding-top: 149px;
    padding-bottom: 96px;
    @media (width <= 768px){
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-content: center;
    }
`
const MenuLogo = styled.img`
   width: 94px;
   height: 61px;
   justify-self: center;
   @media (width <= 724px){
        align-self: flex-end;
        margin-right: 90px;
   }
   
`
const Contact = styled.div`
    display: grid;
    gap: 18px;
    justify-self: ${props => props.gridjust};
    
`
const ContactEl = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    img{
        width: ${props => props.width};
        height: ${props => props.height};
    }
    a{
        text-decoration: none;
        color: #E4E0D8;
        font-size: 20px;
        white-space: nowrap;
        &:hover{
            color: #F66A55;
        }
    }
`


export const BasicFooter = () =>{
    const label = ['ДДН', "Отчетность", "Новости", "Афиша", "Положения", "Контакты"]
    return(
        <Main>
           {/*  <FooterMenu>
                {label.map((el) => {return <LinkFooter>{el}</LinkFooter>})}
            </FooterMenu>*/}
            <ContactInfo>
                <> 
                    <Contact gridjust='end'>
                        <ContactEl width={23} height={23}> 
                            <img src={icontell} alt="" />
                            <a href="tel:+73412631011">+7 (3412) 63-10-11</a>
                        </ContactEl>
                        <ContactEl width={30} height={21}>
                            <img src={iconmail} alt="" />
                            <a href="mailto:mail@ddn.udmr.ru">mail@ddn.udmr.ru</a>
                        </ContactEl>
                    </Contact>
                </>
                <><MenuLogo src={logo}/></>
                <>
                <Contact gridjust='start'>
                        <ContactEl width={23} height={23}> 
                            <img src={iconvk} alt="" />
                            <a href="https://vk.com/udmddn" >https://vk.com/udmddn</a>
                        </ContactEl>
                        <ContactEl width={30} height={21}>
                            <img src={icontelegram} alt="" />
                            <a href="https://t.me/udmddn">https://t.me/udmddn</a>
                        </ContactEl>
                </Contact>
                </>
            </ContactInfo>            
        </Main>
    )
}
