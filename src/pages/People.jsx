import {useLocation} from "react-router-dom";
import dir from '../components/img/administration/Шахтина.jpg';
import secretary from '../components/img/administration/Абрамович.JPG';
import dep_dir_1 from '../components/img/administration/Брекоткин.JPG';
import dep_dir_2 from '../components/img/administration/Жуйкова.JPG';
import dep_tex_obsl from '../components/img/administration/Уткин.JPG';
import dep_tex_snab from '../components/img/administration/Гаратуев.JPG';
import dep_dir_admin from '../components/img/administration/Коконова.JPG';
import dep_dep_relations from '../components/img/administration/Полатова.JPG';
import dep_dep_events from '../components/img/administration/Мираева.JPG';
import dep_dep_education from '../components/img/administration/Чурина.JPG';
import dep_dep_project from '../components/img/administration/Серов.JPG';
import dep_dep_info from '../components/img/administration/Уткина.JPG';
import dep_dep_admin_res from '../components/img/administration/Миникеева.JPG';
import { styled } from 'styled-components';

const Ground = styled.div`
    margin-top: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 50px;
    padding-left: 50px;
    background-color: #2C535E;
    display: flex;
    align-items: center;
    gap: 20px;
    @media (width < 750px) {
        flex-direction: column;
    }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const PImg = styled.img`
    width: 30%;
    border-radius: 10px;
    @media (width < 750px) {
        width: 50%;
    }
`
const PName = styled.p`
    color: #F0EAE0;
    font-size: 50pt;
    margin: 0 0 ;
    @media (width < 750px) {
        font-size: 30pt;
    }
`
const PPost = styled.p`
    color: #F66A55;
    font-size: 20pt;
    margin: 0 0;
    @media (width < 750px) {
        font-size: 15pt;
    }
`
const Ptext = styled.p`
color: #F0EAE0;
    margin: 0 0;
    font-size: 25pt;
    @media (width < 750px) {
        font-size: 15pt;
    }
`
const Plink = styled.a`
    padding-left: 10px;
    text-decoration: none;
    color: #F0EAE0;
`
export const People = () => {
    const location = useLocation()
    const admin = location.pathname.slice(location.pathname.lastIndexOf('/') + 1)
    const people = {
        'dir':
        {
            img: dir, 
            name:'Шахтина Юлия Германовна',
            contact_tel:'8 (3412) 63-10-10',
            contact_mail:'shakhtina_yg@ddn.udmr.ru', 
            post:'директор',
            contact_telweb:'tel:83412631010',
            contact_mailweb:'mailto:shakhtina_yg@ddn.udmr.ru'},
        'secretary':
        {
            img:secretary, 
            name:'Абрамович Анна Борисовна',
            contact_tel:'8 (3412) 63-10-11',
            contact_mail:'mail@ddn.udmr.ru', 
            post:'секретарь руководителя',
            contact_telweb:'tel:83412631011',
            contact_mailweb:'mailto:mail@ddn.udmr.ru'},
        'dep_dir_1':
        {
            img:dep_dir_1, 
            name:'Брекоткин Вадим Владимирович',
            contact_tel:'8 (3412) 63-10-63',
            contact_mail:'brekotkin_vv@ddn.udmr.ru', 
            post:'заместитель директора по общим вопросам',
            contact_telweb:'tel:83412631043',
            contact_mailweb:'mailto:brekotkin_vv@ddn.udmr.ru'},
        'dep_dir_2':
        {
            img:dep_dir_2, 
            name:'Жуйкова Алина Владимировна',
            contact_tel:'8 (3412) 63-10-24',
            contact_mail:'zhuikova_av@ddn.udmr.ru ', 
            post:'заместитель директора по основной деятельности',
            contact_telweb:'tel:83412631024',
            contact_mailweb:'mailto:zhuikova_av@ddn.udmr.ru '},
        'dep_tex_obsl':
        {
            img:dep_tex_obsl, 
            name:'Уткин Евгений Владимирович',
            contact_tel:'8 (3412) 63-10-04',
            contact_mail:'utkin_ev@ddn.udmr.ru', 
            post:'начальник отдела информационно-технического обеспечения',
            contact_telweb:'tel:83412631004',
            contact_mailweb:'mailto:utkin_ev@ddn.udmr.ru'},
        'dep_tex_snab':
        {
            img:dep_tex_snab, 
            name:'Гаратуев Мурат Масхутович',
            contact_tel:'8 (3412) 63-10-17',
            contact_mail:'garatuev_mm@ddn.udmr.ru', 
            post:'начальник отдела технического обеспечения и снабжения',
            contact_telweb:'tel:83412631017',
            contact_mailweb:'mailto:garatuev_mm@ddn.udmr.ru'},
        'dep_dir_admin':
        {
            img:dep_dir_admin, 
            name:'Кононова Алла Геннадьевна',
            contact_tel:'8 (3412) 63-10-68',
            contact_mail:'kononova_ag@ddn.udmr.ru', 
            post:'начальник административно-правового отдела ',
            contact_telweb:'tel:83412631068',
            contact_mailweb:'mailto:kononova_ag@ddn.udmr.ru'},
        'dep_dep_relations':
        {
            img:dep_dep_relations, 
            name:'Полатова Олеся Анатольевна',
            contact_tel:'8 (3412) 63-10-68',
            contact_mail:'polatova_oa@ddn.udmr.ru', 
            post:'заведующий отделом организации мероприятий и взаимодействия с национально-культурными объединениями',
            contact_telweb:'tel:83412631068',
            contact_mailweb:'mailto:polatova_oa@ddn.udmr.ru'},
        'dep_dep_events':
        {
            img:dep_dep_events, 
            name:'Мираева Татьяна Вениаминовна',
            contact_tel:'8 (3412) 63-10-75',
            contact_mail:'miraeva_tv@ddn.udmr.ru', 
            post:'заведующий отделом этнокультурного просвещения и языковых практик',
            contact_telweb:'tel:83412631075',
            contact_mailweb:'mailto:miraeva_tv@ddn.udmr.ru'},
        'dep_dep_education':
        {
            img:dep_dep_education, 
            name:'Чурина Татьяна Владимировна',
            contact_tel:'8 (3412) 63-10-44',
            contact_mail:'churina_tv@ddn.udmr.ru', 
            post:'заведующий отделом по работе с муниципальными образованиями',
            contact_telweb:'tel:83412631044',
            contact_mailweb:'mailto:churina_tv@ddn.udmr.ru'},
        'dep_dep_project':
        {
            img:dep_dep_project, 
            name:'Серов Роман Дмитриевич',
            contact_tel:'8 (3412) 63-10-88',
            contact_mail:'serov_rd@ddn.udmr.ru', 
            post:'заведующий отделом молодёжных инициатив и общественных проектов',
            contact_telweb:'tel:83412631088',
            contact_mailweb:'mailto:serov_rd@ddn.udmr.ru'},
        'dep_dep_info':
        {
            img:dep_dep_info,
            name:'Уткина Мария Михайловна',
            contact_tel:'8 (3412) 63-10-62',
            contact_mail:'utkina_mm@ddn.udmr.ru', 
            post:'начальник информационно-аналитического отдела',
            contact_telweb:'tel:83412631062',
            contact_mailweb:'mailto:utkina_mm@ddn.udmr.ru'},
        'dep_dep_admin_res':
        {
            img:dep_dep_admin_res, 
            name:'Миникеева Флуза Чингизовна',
            contact_tel:'8 (3412) 63-10-01',
            contact_mail:'minikeeva_fch@ddn.udmr.ru', 
            post:'заведующий отделом администрирования ресурсов',
            contact_telweb:'tel:83412631001',
            contact_mailweb:'mailto:minikeeva_fch@ddn.udmr.ru'}
    }
    const {img, name,contact_tel,contact_mail,post,contact_mailweb,contact_telweb} = people[admin]
    return (
        <>
        <Ground>
            <PImg src={img}/>
            <Contact>
                <PName>{name}</PName>
                <PPost>{post}</PPost>
                <Ptext>Контактный телефон: <Plink href={contact_telweb}>{contact_tel}</Plink></Ptext>
                <Ptext>e-mail:<Plink href={contact_mailweb}>{contact_mail}</Plink></Ptext>
            </Contact>            
        </Ground>
        </>
    )
}