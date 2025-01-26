import sign from '../img/sign.png';
import { Link, NavLink, Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Pahts } from './../../shared/Paths';

const Glimg = styled.img`
  max-width: 100px;
  max-height: 70px;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 5px;
  padding-right: 35px;
`

const Menu = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
`
const AdLink = styled(Link)`
  color: azure;
  text-decoration: none;
  font-size: 25px;
  padding-right: 35px; 

  &:hover{
    color:#E2E8ED;
    transform: scale(1.2, 1.2);
  }
  &.active{
    color:#DB6B4D;
  }
`


const adminItems = [{name:'Страницы'},{name:'Записи', url: Pahts.note},{name:'Комментарии'},{name:'Создание страницы',url: Pahts.postingspost},{name:'Создание записи'}]

export const AdminMenu = () => {
    const params = useLocation()  
    return (
      <>
        <Menu>
        <Glimg src={sign}/>
          {adminItems.map((e) => {
            const liter = params.pathname.split('/').filter(e => e === Pahts.postingspost).join()
            return(              
              <AdLink to={e.url} className={e.url === liter ? 'active' : ''}>{e.name}</AdLink>
            )
          })}
        </Menu>
        <Outlet/>
      </>
    );
};
