import { SectionText } from "../components/Osnova/ElementMainContent/SectionText"
import { styled } from "styled-components"
import { ProjectItem } from "./ElementPages/ProjectItem"

const text = [
    {title:'РОДИНА – ЗНАЧИТ ВМЕСТЕ!', color:'#F66A55', subtitle: 'Объединяем народы, знакомим жителей Удмуртии с этнокультурным многообразием, создаем практики совместной деятельности',project:[
        {img: '', text:'ИгроБум «Родина – значит вместе!»'},
        {img: '', text:'Молодёжная интеллектуальная игра «Этноэксперт»'},
        {img: '', text:'Форум муниципальных образований «Мир в диалоге»'}
]},
    {title:'РАДИ ВСЕХ И ДЛЯ КАЖДОГО', subtitle: 'Собираем и аккумулируем информацию о народах Удмуртии, изучаем современное состояние народов Удмуртии, помогаем сохранять и развивать этническое сообщество в условиях поликультурной среды',project:[
        {img: '', text:'Этноязыковой центр «Билингва»'},
        {img: '', text:'Музей-лаборатория народов Удмуртии'},
        {img: '', text:'Фестиваль-конкурс «Голос моей Родины»'}
    ]},
    {title:'ДАРИМ ДОБРО НА РАВНЫХ', subtitle: 'Обучаем современным практикам межкультурной коммуникации, привлекаем иностранных граждан в знакомство с региональной культурой, выстраиваем сетевое взаимодействие с институтами гражданского общества',project:[
        {img: '', text:'Региональный корпус Этноволонётров'},
        {img: '', text:'Образовательный центр «Буд»'},
        {img: '', text:'Семейный центр социокультурной адаптации мигрантов «Можем-Поможем»'}
    ]},
    {title:'НАЦИОНАЛЬНЫЕ ПРАЗДНИКИ', subtitle: 'Республиканские праздники разных народов',project:[
        {img: '', text:'Удмуртский праздник Гербер'},
        {img: '', text:'Марийский праздник Семык'},
        {img: '', text:'Татарский и башкирский праздник Сабантуй'},
        {img: '', text:'Бесермянский праздник Кӧрбан'},
        {img: '', text:'Русский праздник Масленица'},
    ]},
]

const Main = styled.div`
   background-color: ${props => props.color};
   margin: 20px 150px 0px 150px;
   color: #EADAC8;
   border-radius: 30px;
`
const MianP = styled.p`
    font-size: 25pt;
    text-align: center;
    margin-bottom: 0px;
    line-height: 40px;
`

export const Project = () =>{
    return(
        <>
        <SectionText text='Проекты'/>
        <Main color={text[0].color}>
            <MianP>{text[0].title}</MianP>
            <MianP>{text[0].subtitle}</MianP>
            <ProjectItem props={text[0].project}/>
        </Main>
        </>
    )
}