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


 
const Main = styled.div`
    padding: 56px  73px 50px 60px;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(4, 1fr);
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
const ItemText = styled.h1`
    font-size: 22.13px;
    text-align: center;
    padding-bottom: 30px;
    padding-left: 37px;
    padding-right: 15px;
`

const ItemImg = styled.img`
    width: 60%;
    padding-top: 50px;
`
export const NKO = () =>{
    const content =[
        {img: ork03, title:'Общественная организация «Общество русской культуры Удмуртской Республики»'},
        {img: ork26, title:'Межрегиональная общественная организация «Всеудмуртская ассоциация «Удмурт Кенеш»'},
        {img:ork08 , title:'Региональное общественное движение «Совет женщин-удмурток «Удмурт нылкышно кенеш»'},
        {img: ork12, title:'Удмуртская молодежная общественная организация «Шунды» («Солнце»)'},
        {img: ork07, title:'Региональная удмуртская молодежная общественная организация «Ресурсный центр «Куара (Голос)»'},
        {img:ork13, title:'Удмуртская республиканская общественная организация «Национальный центр закамских удмуртов»'},
        {img:ork14, title:'Региональная общественная организация «Общество бесермянского народа в Удмуртской Республике»'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Автономная некоммерческая организация «Центр возрождения бесермянской культуры»'},
        {img:ork28, title:'Региональная национально-культурная автономия татар Удмуртской Республики'},
        {img:ork01, title:'Региональное общественно-демократическое движение «Татарский общественный центр Удмуртской Республики»'},
        {img:ork24, title:'Региональное общественно-демократическое движение «Союз татарских женщин Удмуртии «Ак Калфак»'},
        {img:ork27, title:'Республиканская молодежная общественная организация «Союз татарской молодежи Удмуртской Республики «Иман» («Вера»)'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Общественное движение Удмуртской Республики «Башкирский общественный центр «Курай»'},
        {img:ork23, title:'Общественная организация «Общество мордовского народа Удмуртской Республики «Умарина»'},
        {img:ork17, title:'Региональная общественная организация «Национально-культурная автономия марийцев Удмуртской Республики»'},
        {img:ork16, title:'Удмуртская республиканская общественная организация марийского народа, проживающего в Удмуртской Республике — «Одо Мари Ушем»'},
        {img:ork18, title:'Удмуртская республиканская молодежная общественная организация «Союз марийской молодежи «Ужара» («Заря»)'},
        {img:ork19, title:'Удмуртская республиканская общественная организация «Чувашский национальный центр»'},
        {img:ork06, title:'Общественная организация «Республиканский национально-культурный Центр кряшен Удмуртии»'},
        {img:ork21, title:'Общественная организация «Общество украинской культуры Удмуртской Республики «Громада»'},
        {img:ork20, title:'Республиканская общественная организация «Общество белорусской культуры в Удмуртской Республике» («Батьковщина»)'},
        {img:ork25, title:'Верхнекамское отдельное окружное казачье общество'},
        {img:ork05, title:'Региональное отделение «Союз казаков Удмуртии» Общероссийской общественной организации «Союз казаков»'},
        {img:ork29, title:'Региональная общественная организация «Азербайджанский общественный центр Удмуртии «Достлуг»'},
        {img:ork30, title:'Армянская общественная организация Удмуртской Республики «Урарту»'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'«Удмуртская республиканская общественная организация «Чеченский национально-культурный центр «Даймохк» («Родина»)'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Региональная общественная организация «Объединение народов Дагестана Удмуртской Республики «НАСЛЕДИЕ»'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Удмуртская Республиканская Общественная Организация «Грузинское землячество»'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Региональная общественная организация «Абхазская диаспора Удмуртской Республики «Амра»'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Удмуртская республиканская общественная организация «Узбекский национальный центр социальной поддержки и развития культуры «Хумо» (Жар-птица)'},
        {img:ork10, title:'Общественная организация «Узбекская национально-культурная община в Удмуртской Республике «Тинчлик» («Мир»)'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Удмуртская республиканская общественная организация «Узбекский национальный центр социальной поддержки и развития культуры «Азия Плюс»'},
        {img:ork31, title:'Республиканская общественная организация «Таджикский общественный центр Удмуртии «Ориён-Тадж» («Благородные»)'},
        {img:ork09, title:'Общественная организация «Немецкая национально-культурная автономия Удмуртской Республики»'},
        {img:ork11, title:'Удмуртская республиканская общественная организация российско-немецкой молодежи «Югендхайм» («Молодежный дом»)'},
        {img:ork22, title:'Удмуртская региональная общественная организация «Общество греков «Никея»'},
        {img:ork15, title:'Общественная организация «Общинный центр еврейской культуры Удмуртской Республики»'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Общественный еврейский благотворительный фонд «ХЭСЭД — Ариэль» Удмуртской Республики'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Общественная организация «Корейское национально-культурное общество Удмуртской Республики «Мугунхва» («Цветок»)'},
        {img:ork04, title:'Ассоциация молодежных национально-культурных объединений Удмуртской Республики «Вместе»'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Региональная общественная организация национально-культурного развития «Ассамблея народов Удмуртии»'},
        {img:ork02, title:'Фонд поддержки и социального развития культуры, истории и туризма Удмуртской Республики «Атай»'},
        {img:'https://placeholder.apptor.studio/200/200/product1.png', title:'Автономная некоммерческая организация в сфере развития этнокультурных отношений и туризма «Ресурсный центр народов Прикамья»'},
    ]
    return(
        <>
        <SectionText text='НАЦИОНАЛЬНО-КУЛЬТУРНЫЕ ОБЪЕДИНЕНИЯ'/>
        <Main>
            {content.map((item)=>{
                return(
                <Item>
                    <ItemImg src={item.img} /> 
                    <ItemText>{item.title}</ItemText>
                </Item>
                )
            })}
            
        </Main>
        </>
    )
}