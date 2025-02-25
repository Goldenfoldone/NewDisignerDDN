import { styled } from "styled-components"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { SectionText } from "./SectionText"
import { Newbutton } from "./SectionNew"
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import holl from '../../img/holl-1-etazha-ddn-edited-2048x1365.jpg'
import holl2 from '../../img/holl2.jpg'
import muz1 from '../../img/muz1.jpg'
import torg from '../../img/dsc_0016-1024x685.jpg'
import mnfunc from '../../img/dsc_0361-1280x857.jpg'
import minizal from '../../img/dsc_0711.jpg'
import { Pahts } from "../../../shared/Paths";

const Main = styled.div`
    background-color: #EADAC8;
    height: 678px;
    margin-top: 67px;
    margin-bottom: 56px;
    @media (width <=722px){
        height: 450px;
    }
    @media (width <=722px){
        height: 470px;
    }
    
`
const MainText = styled.p`
    font-size: 30pt;
    color: #2C535E;
    margin-left: 75px;
    line-height: 82px;
    span{
        font-size:40pt;
        font-weight: bold;
    }
    @media (width <= 1200px){
        font-size: 30pt;
        line-height: 70px;
        span{
            font-size: 35pt;
        }
    }
    @media (width <= 768px){
        font-size: 25pt;
    }
    @media (width <= 724px){
        font-size: 15pt;
        line-height: 50px;
        span{
            font-size:25pt;        
        }
    }
    @media (width <= 414px){
        font-size: 14pt;
        line-height: 40px;
        span{
            font-size:15pt;        
        }
    }
`
const SectionTextmini = styled.p`
    font-size: 20pt;
    width: 816px;
    margin: 0 auto;
    text-align: center;
    color: #2C535E;
    @media (width <= 1200px){
        font-size: 15pt;
        width: fit-content;
    }
    @media (width <= 724px){
        font-size: 10pt;
    }
`


const ButtonCenter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 37px;
    margin-bottom: 72px;
`

const Button = styled(Newbutton)`
    width: 242px;
`
const Button_Modal =styled(Newbutton)`
    font-size: 20px;
    width: 150px;
    padding-top: 13px;

`
const SliderBack = styled.div`    
    margin-top: 91px;
    height: 214px;
    background-color: #c49e62;
    margin-bottom: 151px;
`
const MySlider = styled(Slider)`
    top: -40px;
    padding-left: 60px;
    padding-right: 60px;
    overflow: hidden;
    z-index: 3;
    .slick-track{
        left: 0px;
    }
    @media (width <= 1200px){
        top: -20px;
        .slick-track{
            left: 0px;
        }
    }
    @media (width <= 1024px){
        padding: 0 0;
    }
`

const servicpost = [{img:muz1,title:'Музыкальный салон ', price:'2000',scope:"тематических вечеров; концертов камерной музыки; творческих встреч; мероприятий клубов по интересам; ",priceincl: 'Белый рояль (закрытый), 8 мраморных столов, 24 посадочных места, Рояль открывается только для музыкальных вечеров'},{img:holl,title:'Холл первого этажа ', price:'1000',scope:"Встреча и регистрация гостей мероприяти; Выставки изобразительного искусства; Выставки декоративно-прикладного искусства; Фотовыставки; Презентации; Мастер-классы; Танцевальные мероприятия",priceincl: 'Столы для регистрации – 3 шт, Столы для раздаточного материала – до 5 шт, '},{img:holl2,title:'Холл второго этажа', price:'700',scope:"Выставки изобразительного искусства; Выставки изобразительного искусства; Фотовыставки; Презентации;",priceincl: 'Стеклянные витрины — 5 штук, Подвесные настенные стенды для организации выставок'},{img:torg,title:'Зал торжественных мероприятий ', price:'7800',scope:"конференц-система и технологическое телевидение; система видеосъемки и электронного голосования, плазменная панель; синхронный перевод на два языка; современное звуковое оборудование; аудиозапись мероприятия; всероссийских и международных конференций, совещаний, торжественных церемоний; мультимедийных презентаций, электронных голосований, телемостов;",priceincl: 'Зал с возможностью организовать до 300 посадочных мест, 202 стула по периметру зала,Трибуна с 2 микрофонами, 2 стола для секретариата, Государственная символика Российской Федерации и Удмуртской Республики, Звуковое сопровождение мероприятия, работа звукорежиссёра, 4 плазменных панели, работа специалиста по видео-сопровождению мероприятия'},{img:mnfunc,title:'Многофункциональный зал ', price:'4100',scope:"2 плазменные панели; современная звуко- и светоаппаратура, потолочные фермы и радиомикрофоны; стационарная эстрада; концертов, собраний и совещаний; встреч с творческими коллективами; межнациональных конференций; молодежных вечеринок и этнодискотек; ",priceincl: 'Звуковое сопровождение мероприятия, работа звукорежиссёра на семинаре/конференции, 2 радио-микрофона на стойке, Видеосопровождение мероприятия (2 плазменные панели), До 3 столов с накидками, До 6 мягких стульев — для президиума, Стулья/столы на количество гостей'}, 
{img: minizal,title: 'Малый зал', price:'2500', scope: 'современная звуковая аппаратура; плазменная панель; стационарная эстрада; совещаний, собраний; корпоративных вечеров; юбилейных торжеств; новогодних балов',priceincl:'Звуковое сопровождение мероприятия, работа звукорежиссёра, 2 радио-микрофона на стойках, Видео сопровождение мероприятия (1 плазменная панель), работа специалиста по видео сопровождению мероприятия, До 3 столов с накидками, до 6 мягких стула — для президиума, Стулья/столы на количество гостей для конференции, круглого стола' }];

const SliderItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SliderItemImg = styled.img`
    width: 421px;
    height: 282px;
    border-radius: 10px;
    @media (width <= 1200px){
        width: 300px;
        height: 250px;
    }
`
const Sliderlink = styled.a`
    text-decoration: none;
    color: black;
    text-align: center;
`

const SliderText = styled.p`
    font-size: 15pt;
`

export const FourElements = () => {
    function determin_width() { 
        if (window.screen.availWidth < 1024){
            return true;
        } else {
            return false;
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: determin_width() ? 1 : 3,
        slidesToScroll: 1,
        arrows: false,
      };
    return (
        <>
            <Main>
                <SectionText text='ДОМ ДРУЖБЫ НАРОДОВ СЕГОДНЯ'/> 
                <SectionTextmini>
                    ресурсный центр в сфере реализации <br></br> государственной национальной политики Удмуртской Республики
                </SectionTextmini>
                <MainText>
                    Проводится<br></br> Более <span>800</span> мероприятий в год <br></br> Реализуется <span>20</span> ключевых проектов<br></br> Совместно с <span>40</span> национально культурными объединениями<br></br> При участии <span>30</span> муниципальных образований <br></br> с общим охватом <span>900 тыс.</span> человек ежегодно
                </MainText>
            </Main>
            <SectionText text='АРЕНДА ЗАЛОВ'/>
            <SliderBack>
            <MySlider {...settings}>
                {servicpost.map((e, item) => {
                    return(
                    <div>
                    <SliderItem>
                        <Sliderlink href={'#/'+Pahts.hrental + `/${item}`}>
                            <SliderItemImg src={e.img}/>
                            <SliderText>{e.title}</SliderText>
                        </Sliderlink>                        
                    </SliderItem>
                    </div>
                    
                    )          
                })}
            </MySlider>
            </SliderBack>
            <SectionText text='МЫ БУДЕМ РАДЫ УЗНАТЬ ВАШЕ МНЕНИЕ О НАС' width={578}/>
            <ButtonCenter>
                <Button variant="primary" onClick={handleShow}>Оставить отзыв</Button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Отзыв</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ваш Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.ru"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        >
                        <Form.Label>Текст отзыва</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button_Modal variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button_Modal>
                    <Button_Modal variant="primary" onClick={handleClose}>
                        Отправить отзыв
                    </Button_Modal>
                </Modal.Footer>
            </Modal>         
            </ButtonCenter>               
        </>
    )
}