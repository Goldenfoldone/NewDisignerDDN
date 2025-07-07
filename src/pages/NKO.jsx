import { SectionText } from "../components/Osnova/ElementMainContent/SectionText"
import { styled } from "styled-components"
import ork01 from '../components/img/nko/01 татарский общественный центр.png'
import ork02 from '../components/img/nko/02 атай.png'
import ork03 from '../components/img/nko/03 орк.png'
import ork04 from '../components/img/nko/04 вместе.png'
import ork05 from '../components/img/nko/05 казаки.png'
import ork06 from '../components/img/nko/06 кряшены.png'
import ork07 from '../components/img/nko/07 куара.png'
import ork08 from '../components/img/nko/08 нылкышно кенеш.png'
import ork09 from '../components/img/nko/09 немцы.png'
import ork10 from '../components/img/nko/10 узбеки.png'
import ork11 from '../components/img/nko/11 югендхайм.png'
import ork12 from '../components/img/nko/12 шунды.png'
import ork13 from '../components/img/nko/13 закамские удмрты.png'
import ork14 from '../components/img/nko/14 бесермяне.png'
import ork15 from '../components/img/nko/15 евреи.png'
import ork16 from '../components/img/nko/16 одо мари ушем.png'
import ork17 from '../components/img/nko/17 марийцы.png'
import ork18 from '../components/img/nko/18 ужара.png'
import ork19 from '../components/img/nko/19 чуваши.png'
import ork20 from '../components/img/nko/20 белоруссы.png'
import ork21 from '../components/img/nko/21 громада.png'
import ork22 from '../components/img/nko/22 никея.png'
import ork23 from '../components/img/nko/23 умарина.png'
import ork24 from '../components/img/nko/24 союз татарских женщин.png'
import ork25 from '../components/img/nko/25 казачий округ.png'
import ork26 from '../components/img/nko/26 кенеш.png'
import ork27 from '../components/img/nko/27 иман.png'
import ork28 from '../components/img/nko/28 татары.png'
import ork29 from '../components/img/nko/29 достлуг.png'
import ork30 from '../components/img/nko/30 армяне.png'
import ork31 from '../components/img/nko/31 ориен тадж.png'
import { Pahts } from './../shared/Paths';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';

 const PaginationNews = styled(Pagination)`
    justify-content: center;
    padding-top: 30px;
    gap: 20px;
    flex-wrap: wrap;
    grid-column: 1 / 4;

    @media (width <= 768px){
        width: fit-content;
        grid-column: 1 / 3;
        justify-self: center;
    }
 `
 const Prev = styled(Pagination.Prev)`
    a{
        background: none;
        border: 0px solid;
        color: black;
    }
    span{
        font-size: 25px;
    }    
 `
 const Next = styled(Pagination.Next)`
    a{
        background: none;
        border: 0px solid;
        color: black;
    }
    span{

        font-size: 25px;
    }   
 `
 const Items = styled(Pagination.Item)`
    a{
        background: none;
        font-size: 25px;
        border: 0px solid;
        color: black;
    }
    span{
        font-size: 25px;
    }   
    &.active{
        span{
            border: 0px solid;
            background-color: #F66A55;
            color: white;
        }
        
    }
 `

 
const Main = styled.div`
    padding: 56px  73px 50px 60px;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(3, 1fr);

    @media (width <= 768px){
        grid-template-columns:  repeat(2, 1fr);
    }
`

const Item = styled.div`
    display: flex;
    width: 95%;
    height: 426px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #E5D9C7;
    box-shadow: 20px 20px 0px 0px #3D545E;
`
const ItemText = styled.a`
    font-size: 22.13px;
    text-align: center;
    padding-bottom: 30px;
    padding-left: 37px;
    padding-right: 15px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    @media (width <= 768px){
        font-size: 19px;
    }
`

const ItemImg = styled.img`
    max-height: 200px;
    padding-top: 50px;
    display: block;
    max-width: 100%;

`
const Myspiner = styled(Spinner)`
    width: 750px;
    height: 750px;
`
export const NKO = () =>{
    const content =[
        {
            img: ork03, 
            title:'Общественная организация «Общество русской культуры Удмуртской Республики»',
            id: 1
        },
        {
            img: ork26, 
            title:'Межрегиональная общественная организация «Всеудмуртская ассоциация «Удмурт Кенеш»',
            id:2
        },
        {
            img:ork08 , 
            title:'Региональное общественное движение «Совет женщин-удмурток «Удмурт нылкышно кенеш»',
            id:3
        },
        {
            img: ork12, 
            title:'Удмуртская молодежная общественная организация «Шунды» («Солнце»)',
            id:4
        },
        {
            img: ork07, 
            title:'Региональная удмуртская молодежная общественная организация «Ресурсный центр «Куара (Голос)»',
            id:5
        },
        {
            img:ork13, 
            title:'Удмуртская республиканская общественная организация «Национальный центр закамских удмуртов»',
            id:6
        },
        {
            img:ork14, 
            title:'Региональная общественная организация «Общество бесермянского народа в Удмуртской Республике»',
            id:7
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Автономная некоммерческая организация «Центр возрождения бесермянской культуры»',
            id:8
        },
        {
            img:ork28, 
            title:'Региональная национально-культурная автономия татар Удмуртской Республики',
            id:9
        },
        {
            img:ork01, 
            title:'Региональное общественно-демократическое движение «Татарский общественный центр Удмуртской Республики»',
            id:10
        },
        {
            img:ork24, 
            title:'Региональное общественно-демократическое движение «Союз татарских женщин Удмуртии «Ак Калфак»',
            id:11
        },
        {
            img:ork27, 
            title:'Республиканская молодежная общественная организация «Союз татарской молодежи Удмуртской Республики «Иман» («Вера»)',
            id:12
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Общественное движение Удмуртской Республики «Башкирский общественный центр «Курай»',
            id:13
        },
        {
            img:ork23, 
            title:'Общественная организация «Общество мордовского народа Удмуртской Республики «Умарина»',
            id:14
        },
        {
            img:ork17, 
            title:'Региональная общественная организация «Национально-культурная автономия марийцев Удмуртской Республики»',
            id:15
        },
        {
            img:ork16, 
            title:'Удмуртская республиканская общественная организация марийского народа, проживающего в Удмуртской Республике — «Одо Мари Ушем»',
            id:16
        },
        {
            img:ork18, 
            title:'Удмуртская республиканская молодежная общественная организация «Союз марийской молодежи «Ужара» («Заря»)',
            id:17
        },
        {
            img:ork19, 
            title:'Удмуртская республиканская общественная организация «Чувашский национальный центр»',
            id:18
        },
        {
            img:ork06, 
            title:'Общественная организация «Республиканский национально-культурный Центр кряшен Удмуртии»',
            id:19
        },
        {
            img:ork21, 
            title:'Общественная организация «Общество украинской культуры Удмуртской Республики «Громада»',
            id:20
        },
        {
            img:ork20, 
            title:'Республиканская общественная организация «Общество белорусской культуры в Удмуртской Республике» («Батьковщина»)',
            id:21
        },
        {
            img:ork25, 
            title:'Верхнекамское отдельное окружное казачье общество',
            id:22
        },
        {
            img:ork05, 
            title:'Региональное отделение «Союз казаков Удмуртии» Общероссийской общественной организации «Союз казаков»',
            id:23
        },
        {
            img:ork29, 
            title:'Региональная общественная организация «Азербайджанский общественный центр Удмуртии «Достлуг»',
            id:24
        },
        {
            img:ork30, 
            title:'Армянская общественная организация Удмуртской Республики «Урарту»',
            id:25
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'«Удмуртская республиканская общественная организация «Чеченский национально-культурный центр «Даймохк» («Родина»)',
            id:26
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Региональная общественная организация «Объединение народов Дагестана Удмуртской Республики «НАСЛЕДИЕ»',
            id:27
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Удмуртская Республиканская Общественная Организация «Грузинское землячество»',
            id:28
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Региональная общественная организация «Абхазская диаспора Удмуртской Республики «Амра»',
            id:29
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Удмуртская республиканская общественная организация «Узбекский национальный центр социальной поддержки и развития культуры «Хумо» (Жар-птица)',
            id:30},
        {
            img:ork10, 
            title:'Общественная организация «Узбекская национально-культурная община в Удмуртской Республике «Тинчлик» («Мир»)',
            id:31
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Удмуртская республиканская общественная организация «Узбекский национальный центр социальной поддержки и развития культуры «Азия Плюс»',
            id:32
        },
        {
            img:ork31, 
            title:'Республиканская общественная организация «Таджикский общественный центр Удмуртии «Ориён-Тадж» («Благородные»)',
            id:33
        },
        {
            img:ork09, 
            title:'Общественная организация «Немецкая национально-культурная автономия Удмуртской Республики»',
            id:34
        },
        {
            img:ork11, 
            title:'Удмуртская республиканская общественная организация российско-немецкой молодежи «Югендхайм» («Молодежный дом»)',
            id:35
        },
        {
            img:ork22, 
            title:'Удмуртская региональная общественная организация «Общество греков «Никея»',
            id:36
        },
        {
            img:ork15, 
            title:'Общественная организация «Общинный центр еврейской культуры Удмуртской Республики»',
            id:37
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Общественный еврейский благотворительный фонд «ХЭСЭД — Ариэль» Удмуртской Республики',
            id:38
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Общественная организация «Корейское национально-культурное общество Удмуртской Республики «Мугунхва» («Цветок»)',
            id:39
        },
        {
            img:ork04, 
            title:'Ассоциация молодежных национально-культурных объединений Удмуртской Республики «Вместе»',
            id:40
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Региональная общественная организация национально-культурного развития «Ассамблея народов Удмуртии»',
            id:41
        },
        {
            img:ork02, 
            title:'Фонд поддержки и социального развития культуры, истории и туризма Удмуртской Республики «Атай»',
            id:42
        },
        {
            img:'https://placeholder.apptor.studio/200/200/product1.png', 
            title:'Автономная некоммерческая организация в сфере развития этнокультурных отношений и туризма «Ресурсный центр народов Прикамья»',
            id:43
        },
    ]
    const [currentPage, setCurrentPage] = useState(1); // Текущая страница
    const [itemsPerPage, setItemsPerPage] = useState(6); // Количество элементов на странице
      
    const [currentItems, setCurrentItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const totalPages = Math.ceil(content.length / itemsPerPage);
    // Функция для изменения страницы
    // Функция для загрузки данных с искусственной задержкой

    
  const loadPageData =(page) => {
    setLoading(true);
    
    
    // Имитация задержки загрузки (например, 500 мс)
    setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageItems = content.slice(startIndex, endIndex);
      
      setCurrentItems(pageItems);
      setLoading(false);
    }, 600); // Можно изменить время задержки
  };
    // Обработчики для кнопок
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      
    }
  };
   

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);

    }
  };
  // При изменении страницы загружаем данные
  useEffect(() => {
    loadPageData(currentPage);
  }, [currentPage]);
    return(
        <>
        
        {/* Если данные загружаются, показываем заглушку */}
        {loading ? (
                <div style={{ minHeight: "200px", display: "grid", placeItems: "center" }}>
                <SectionText text='Загрузка...'/>
                {/* Можно добавить спиннер: */} <Myspiner animation="grow" variant="light" />
                </div>
            ) : (
                <>
                <SectionText text='НАЦИОНАЛЬНО-КУЛЬТУРНЫЕ ОБЪЕДИНЕНИЯ'/>
                <Main>
                {currentItems.map((item)=>{
                    return(
                    <Item>
                        <ItemImg src={item.img} /> 
                        <ItemText href={'/#/'+ Pahts.onenko + `/${item.id}`}>{item.title}</ItemText>
                    </Item> 
                    )
                })}
                <PaginationNews>
                <Prev onClick={goToPrevPage}  />                
                {Array.from({ length: Math.ceil(content.length / itemsPerPage) }).map(
                    (_, index) => (
                        <Items
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        active={loading || currentPage === index + 1}
                        >
                        {index + 1}
                        </Items>
                    )
                )}
                <Next onClick={goToNextPage}/>
                </PaginationNews>
                </Main>
                </>
        )}
        
        
        </>
    )
}