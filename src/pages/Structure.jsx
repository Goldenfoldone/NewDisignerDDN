import { styled } from 'styled-components';
import { Main, Myh1} from './../shared/ReusedStyles';
import { Pahts } from '../shared/Paths';
import { Pahts_administration } from '../shared/Paths_admministration';

const MainStructyr = styled(Main)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`


const Structurh1 = styled(Myh1)`
    width: fit-content;
    margin: 30px;
`
const DirectorButton =styled.a`
    text-decoration: none;
    font-size: 25pt;
    margin: 40px auto  0px auto;
    padding: 10px 50px;
    background-color: #F66A55;
    box-shadow: 15px -15px 0px 0px #fbbfb6; 
    color: #F0EAE0;
    cursor: pointer;
`
const ZavButton = styled.a`
    position: absolute;
    left: 200px;
    text-decoration: none;
    font-size: 25pt;
    margin: 40px 0  0px 0;
    padding: 10px 50px;
    background-color: #F66A55;
    color: #F0EAE0;
    cursor: pointer;
    @media (width <= 1024px){
        position: static;
    }
`
const ButtonOs =styled.a`
    text-decoration: none;
    width: 560px;
    font-size: 25pt;
    margin: 0 0;
    padding: 10px 50px;
    background-color: #F66A55;
    color: #F0EAE0;
    cursor: pointer;
    @media (width <= 1400px){
        width: 460px;
    }
    @media (width <= 1150px){
        width: 360px;
    }
`
const Graphline = styled.div`
    width: 100%;
    height: 150px;
    @media (width <= 1024px){
        display: flex;
        align-items: center;
    }
`
const GraphHelper = styled.div`
        width: ${props => props.width}px;
        height: 75px;
        margin-left: ${props => props.mleft}px;
        border-bottom: ${props => props.bottom}px solid black;
        border-right:${props => props.right}px solid black;
        border-top: ${props => props.top}px solid black;
        border-left: ${props => props.left}px solid black;
        @media (width <= 1440px){
            margin-left: ${props => props.mleft -20}px;
            width: ${props => props.width - 100}px;
        }
        @media (width <= 1024px) {
            display: none;
        }
        @media (width <= 1400px){
            width: ${props => props.width - 150}px;
        }
        @media (width <= 1240px){
            width: ${props => props.width - 200}px;
        }
`
const Table = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 90px;
    flex-wrap: wrap;
`
const Column = styled.div`
    display: grid;
    align-content: center;
    gap: 20px;
`

export const Structure = () => {
    const administration1 =[{name:'Заместитель директора по общим вопросам', url:Pahts_administration.deputy_director_1},{name:'Отдел информационно-технического обеспечения', url:Pahts_administration.department_tex_obsl},{name:'Отдел технического обеспечания и снабжения', url: Pahts_administration.department_tex_snab},{name:'Административно-правовой отдел', url:Pahts_administration.department_admin}]
    const administration2 =[{name:'Заместитель директора по основной деятельности', url:Pahts_administration.deputy_director_2},{name:'Отдел межнациональных отношений и финно-угорского сотрудничества', url:Pahts_administration.depertment_relations},{name:'Отдел организации мероприятий', url:Pahts_administration.department_events},{name:'Отдел по работе с муниципальными образованиями', url:Pahts_administration.departnent_education},{name:'Отдел молодёжных инициатив и общественных проектов', url:Pahts_administration.department_project},{name:'Информационно-аналитический отдел', url:Pahts_administration.department_info},{name:'Отдел администрирования ресурсов', url:Pahts_administration.department_admin_res}]
    return(
        <MainStructyr>
            <Structurh1>Структура учреждения</Structurh1>
            <DirectorButton href={'#/'+Pahts.structure + '/' + Pahts_administration.direcory}>Директор</DirectorButton>
            <Graphline>
            <ZavButton href={'#/'+Pahts.structure + '/' + Pahts_administration.secretary}>Секретарь руководителя</ZavButton>
            <GraphHelper bottom={2} right={2} left ={0} top={0} width={300} mleft={550}></GraphHelper>   
            <GraphHelper bottom={0} right={2} left ={0} top={0} width={300} mleft={550}></GraphHelper>     
            </Graphline>
            <Graphline>
                <GraphHelper bottom={0} right={2} left ={0} top={0} width={300} mleft={550}></GraphHelper>
                <GraphHelper bottom={0} right={2} left ={2} top={2} width={800} mleft={450}></GraphHelper>
            </Graphline>
            <Table>
                <Column>
                {administration1.map((item) =>{
                    return <ButtonOs href={'#/'+Pahts.structure + '/' +item.url}>{item.name}</ButtonOs>
                })}
                </Column>
                <Column>
                {administration2.map((item) =>{
                    return <ButtonOs href={'#/'+Pahts.structure + '/' +item.url}>{item.name}</ButtonOs>
                })}
                </Column>
            </Table>
        </MainStructyr>
    )
}