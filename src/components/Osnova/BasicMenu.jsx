import { styled } from "styled-components"
import logo from '../img/sign.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Pahts } from "../../shared/Paths";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRef, useState } from "react";



const Main = styled.div`
    display: flex;
    height: 122px;
    background-color: #F66A55;
    align-items: center;
    padding-left: 37px;
    padding-right: 67px;
    justify-content: center;
    gap: 30px;
    position: sticky;
    top: 0;
    z-index: 1000;
    @media (width <= 768px){
        justify-content: space-between;
        height: fit-content;
        padding-bottom:20px;
    }
`
const MenuLogo = styled.img`
   width: 94px;
   height: 61px;
`
const MenuLabel = styled.div`
    display: flex;
    gap: 70px;
    flex-wrap: wrap;
    align-items: center;
    @media (width <= 1440px){
        grid-gap: 0px 40px;
        justify-content: center;
    }
    @media (width <= 608px){
        display: none;
    }
`
const LabelTitle = styled.a`
    color: #F0EAE0;
    font-size: 20pt;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: #2C535E;
    }
`
const Burger = styled(Navbar)`
    display: none;
    @media (width <= 768px){
        display: block;
    }
`
const Linktel = styled(Nav.Link)`
    font-size: 23px;
`
const LinkDropdowntel = styled(NavDropdown)`
    font-size: 23px;
`
const LinkDropdowntelItem = styled(NavDropdown.Item)`
    font-size: 23px;
    color: #F66A55;
`
const MenuDropdown = styled(NavDropdown)`
    color: #F0EAE0;
    font-size: 24pt;
    cursor: pointer;
    .dropdown-toggle::after{
        display: none !important;
    }


    .dropdown-menu{
        background-color: #EADAC8;
        border: 0;
    }
    &:hover{
        color: #2C535E;
    }
`
const MenuDropdownItem = styled(NavDropdown.Item)`
    color: #CA4D3E;
    font-size: 20pt;
    &:hover{
        background-color: #F66A55;
        color: #F0EAE0;
    }
`
const LinkSoc = styled(Link)`
    &:hover{
        rect{fill:#F66A55;}
        path{fill:#2C535E;}
    }
`

const Oblochka = styled.div`
    display: flex;
    padding: 0px 0;
    gap: 20px;
    align-items: center;
`
const NavBarCanvas = styled(Navbar.Offcanvas)`
    background-color: #2C535E;
    color: #F66A55;
    div div div div{
        background-color: #2C535E;
        border: 1px solid #F66A55;
        a:nth-child(-n+2){
            border-bottom: 1px solid #F66A55;
        }
    }
    

    
`


export const BasicMenu = () => {
    const navigation = useNavigate()
    const [show, setShow] = useState(false);
    const toggleOffCanvas = () => {
        setShow((show) => !show);
      };
    const label = [{name:'О нас', sabmenu:[{name:'Сведения об организации', url:Pahts.indormation},{name:'Структура', url:Pahts.structure},{name:'Документы', url:Pahts.doc}]}, {name:"Новости", url:Pahts.news}, {name:"Проекты", url:Pahts.project}, {name:"НКО", url:Pahts.nko}, {name:"Аренда залов", url:Pahts.hrental}, {name:"Контакты", url:Pahts.contacts}];
    return (
        <Main>
            <a href="/"><MenuLogo src={logo}/></a> 
            <MenuLabel>
                {label.map((el) => {if (el.sabmenu === undefined){
                    return <LabelTitle onClick={() => navigation('/' + el.url)}>{el.name}</LabelTitle>
                }else {
                     return <MenuDropdown title={el.name}>
                        {el.sabmenu.map((item) => {
                            return <MenuDropdownItem onClick={() => navigation('/' + item.url)}>{item.name}</MenuDropdownItem>
                        })}
                    </MenuDropdown>
                }})}
                <Oblochka>
                    <LinkSoc to='https://vk.com/udmddn'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#0077FF"/>
                        <path d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z" fill="white"/>
                        </svg>
                    </LinkSoc>
                    <LinkSoc to="https://ok.ru/group/56587615076542">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#F79A38"/>
                        <path d="M26.2376 22.7928C26.7624 22.2681 26.8373 21.5185 26.3876 20.7689C26.0128 20.1692 25.3381 19.8694 24.5885 20.0193C24.2887 20.0942 23.9888 20.2442 23.689 20.469C21.3652 22.0432 18.2168 21.9683 15.893 20.3941C15.7431 20.3191 15.5932 20.2442 15.4433 20.1692C14.6187 19.7944 13.7941 19.9443 13.3444 20.6939C12.8196 21.4435 12.8946 22.2681 13.5692 22.9428C13.7192 23.0927 13.8691 23.1676 13.944 23.3176L14.019 23.3925C15.0685 24.2171 16.3428 24.7418 17.9919 24.9667L17.0174 25.9412C16.1929 26.7658 15.2933 27.6653 14.4688 28.4899C14.2439 28.7148 13.944 29.0896 13.944 29.6143C13.944 30.2889 14.3188 30.9636 14.9935 31.2634C15.2184 31.4133 15.4433 31.4133 15.6681 31.4133C16.0429 31.4133 16.4927 31.2634 16.7926 30.8886C17.917 29.7642 18.8165 28.8647 19.716 27.9651C19.791 27.8902 19.791 27.8902 19.791 27.8902C19.791 27.8902 19.866 27.8902 19.866 27.9651C20.4656 28.6398 21.1403 29.2395 21.74 29.9141C22.0398 30.214 22.3397 30.5138 22.6395 30.8137C23.0143 31.1885 23.3142 31.3384 23.7639 31.3384C24.4386 31.4134 25.1882 30.9636 25.488 30.2889C25.7879 29.6892 25.638 28.9396 25.1132 28.4899C24.3636 27.7403 23.614 26.9157 22.7894 26.1661L21.5151 24.8917C22.1898 24.8168 22.9394 24.6669 23.614 24.367C24.7384 23.9922 25.563 23.4675 26.2376 22.7928Z" fill="white"/>
                        <path d="M19.791 20.6939C23.0143 20.6939 25.638 18.1452 25.638 14.9219C25.638 13.3477 25.0383 11.8485 23.9138 10.7241C22.7894 9.59969 21.3652 9 19.866 9C16.6426 9 14.094 11.6236 14.019 14.772C14.019 16.3462 14.6187 17.7704 15.7431 18.8948C16.7926 20.0942 18.2168 20.6939 19.791 20.6939ZM18.1419 13.1978C18.5916 12.7481 19.1913 12.5232 19.791 12.5232C21.1403 12.5232 22.1148 13.5726 22.1148 14.847C22.1148 16.1963 21.0653 17.1707 19.791 17.1707C18.4417 17.1707 17.4672 16.1213 17.4672 14.847C17.4672 14.2473 17.6921 13.6476 18.1419 13.1978Z" fill="white"/>
                        <path d="M26.2376 22.7928C26.7624 22.2681 26.8373 21.5185 26.3876 20.7689C26.0128 20.1692 25.3381 19.8694 24.5885 20.0193C24.2887 20.0942 23.9888 20.2442 23.689 20.469C21.3652 22.0432 18.2168 21.9683 15.893 20.3941C15.7431 20.3191 15.5932 20.2442 15.4433 20.1692C14.6187 19.7944 13.7941 19.9443 13.3444 20.6939C12.8196 21.4435 12.8946 22.2681 13.5692 22.9428C13.7192 23.0927 13.8691 23.1676 13.944 23.3176L14.019 23.3925C15.0685 24.2171 16.3428 24.7418 17.9919 24.9667L17.0174 25.9412C16.1929 26.7658 15.2933 27.6653 14.4688 28.4899C14.2439 28.7148 13.944 29.0896 13.944 29.6143C13.944 30.2889 14.3188 30.9636 14.9935 31.2634C15.2184 31.4133 15.4433 31.4133 15.6681 31.4133C16.0429 31.4133 16.4927 31.2634 16.7926 30.8886C17.917 29.7642 18.8165 28.8647 19.716 27.9651C19.791 27.8902 19.791 27.8902 19.791 27.8902C19.791 27.8902 19.866 27.8902 19.866 27.9651C20.4656 28.6398 21.1403 29.2395 21.74 29.9141C22.0398 30.214 22.3397 30.5138 22.6395 30.8137C23.0143 31.1885 23.3142 31.3384 23.7639 31.3384C24.4386 31.4134 25.1882 30.9636 25.488 30.2889C25.7879 29.6892 25.638 28.9396 25.1132 28.4899C24.3636 27.7403 23.614 26.9157 22.7894 26.1661L21.5151 24.8917C22.1898 24.8168 22.9394 24.6669 23.614 24.367C24.7384 23.9922 25.563 23.4675 26.2376 22.7928Z" fill="white"/>
                        </svg>
                    </LinkSoc>
                    <LinkSoc to="">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#27A6E5"/>
                        <path d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z" fill="#FEFEFE"/>
                        </svg>

                    </LinkSoc> 
        </Oblochka>
            </MenuLabel>
            <Burger  key={false} expand={false} >
                <Container fluid >
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} onClick={() => {toggleOffCanvas()}}/>
                    <NavBarCanvas
                    id={`offcanvasNavbar-expand-false`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                    placement="end"
                    show={show}
                    >
                    <Offcanvas.Header closeButton onClick={() => {toggleOffCanvas()}}>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-fasle`}>
                        Дом Дружбы Народов
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        {label.map((el) => {if (el.sabmenu === undefined){
                            return <Linktel id={`offcanvasNavbar-expand-true`}  onClick={() => {
                                navigation('/' + el.url)
                                toggleOffCanvas()
                            }}>{el.name}</Linktel>
                        }else {
                            return <LinkDropdowntel
                            title={el.name}
                            id={`offcanvasNavbarDropdown-expand-fasle`}>
                            {el.sabmenu.map((item) => {
                                return <LinkDropdowntelItem onClick={() => {
                                    navigation('/' + item.url)
                                    toggleOffCanvas()
                                }}>{item.name}</LinkDropdowntelItem>
                            })}
                            </LinkDropdowntel>
                        }})}
                
                        </Nav>
                    </Offcanvas.Body>
                    </NavBarCanvas>
                </Container>
        </Burger>
        </Main>
    )
}