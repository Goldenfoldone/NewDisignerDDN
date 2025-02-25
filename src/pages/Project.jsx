import { SectionText } from "../components/Osnova/ElementMainContent/SectionText"
import { styled } from "styled-components"
import { ProjectItem } from "./ElementPages/ProjectItem"
import country from "../components/img/project/ЛОГО РОДИНА3-01.png"
import bilingv from "../components/img/project/билингва лого (центр)-01.png"
import bud from "../components/img/project/буд лого новое 2.png"
import voice from "../components/img/project/голос моей родины лого.png"
import expert from "../components/img/project/лого этн-ры.png"
import world from "../components/img/project/мирвдиалоге картинки 2.png"
import can from "../components/img/project/можем-поможем лого.png"
import museum from "../components/img/project/музей ддн лого.png"
import etepxert from "../components/img/project/etnoexpert-01.png"

const text = [
    {title:'РОДИНА – ЗНАЧИТ ВМЕСТЕ!', color:'#F66A55', subtitle: 'Объединяем народы, знакомим жителей Удмуртии с этнокультурным многообразием, создаем практики совместной деятельности',project:[
        {img: country, text:'ИгроБум «Родина – значит вместе!»'},
        {img: etepxert, text:'Молодёжная интеллектуальная игра «Этноэксперт»'},
        {img: world, text:'Форум муниципальных образований «Мир в диалоге»'}
]},
    {title:'РАДИ ВСЕХ И ДЛЯ КАЖДОГО!', color:'#3D545E', subtitle: 'Собираем и аккумулируем информацию о народах Удмуртии, изучаем современное состояние народов Удмуртии, помогаем сохранять и развивать этническое сообщество в условиях поликультурной среды',project:[
        {img: bilingv, text:'Этноязыковой центр «Билингва»'},
        {img: museum, text:'Музей-лаборатория народов Удмуртии'},
        {img: voice, text:'Фестиваль-конкурс «Голос моей Родины»'}
    ]},
    {title:'ДАРИМ ДОБРО НА РАВНЫХ', color:'#AA9479', subtitle: 'Обучаем современным практикам межкультурной коммуникации, привлекаем иностранных граждан в знакомство с региональной культурой, выстраиваем сетевое взаимодействие с институтами гражданского общества',project:[
        {img: expert, text:'Региональный корпус Этноволонётров'},
        {img: bud, text:'Образовательный центр «Буд»'},
        {img: can, text:'Семейный центр социокультурной адаптации мигрантов «Можем-Поможем»'}
    ]},
    {title:'НАЦИОНАЛЬНЫЕ ПРАЗДНИКИ', color:'#D96A57', subtitle: 'Республиканские праздники разных народов', margin:60, project:[
        {img: '', text:'Удмуртский праздник Гербер'},
        {img: '', text:'Марийский праздник Семык'},
        {img: '', text:'Татарский и башкирский праздник Сабантуй'},
        {img: '', text:'Бесермянский праздник Кӧрбан'},
        {img: '', text:'Русский праздник Масленица'},
    ]},
]

const Main = styled.div`
   background-color: ${props => props.color};
   margin: 28px 86px 0px 86px;
   margin-bottom: ${props => props.margin}px;
   color: #EADAC8;
   border-radius: 30px;
   @media (width < 608px) {
        margin: 28px 30px 0px 30px;
        margin-bottom: ${props => props.margin}px;
    }
`
const MianP = styled.p`
    font-size: 25pt;
    text-align: center;
    margin-bottom: 0px;
    line-height: 40px;
    padding-top: 10px;
    @media (width < 750px) {
        font-size: 18pt;
        line-height: 25px;
    }
`


export const Project = () =>{
    return(
        <>
        <SectionText text='Проекты'/>
        {text.map ((item) => {
            return(
                <>
                <Main color={item.color} margin={item.margin}>
                    <MianP>{item.title}</MianP>
                    <ProjectItem props={item.project}/>
                </Main>
                </>
            )
        })}
        
        </>
    )
}