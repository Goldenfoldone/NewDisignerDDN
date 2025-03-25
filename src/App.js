import {Routes, Route, Outlet} from 'react-router-dom';
import { MainLayout } from './pages/MainLayout';
import {MainContent} from './components/Osnova/MainContent';
import oblo from "./components/img/oblojkaPostone.jpg"
import oblo2 from "./components/img/oblojkaPosttwo.jpg"
import holl from './components/img/holl-1-etazha-ddn-edited-2048x1365.jpg'
import holl2 from './components/img/konfa.jpg'
import muz1 from './components/img/muz1.jpg'
import torg from './components/img/dsc_0016-1024x685.jpg'
import mnfunc from './components/img/dsc_0361-1280x857.jpg'
import minizal from './components/img/dsc_0711.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import { Pahts } from './shared/Paths';
import { InfoOrg } from './pages/Information_org';
import { Structure } from './pages/Structure';
import { People } from './pages/People';
import {PrivateRouter} from './components/adminPanel/PrivateRouter';
import {AdminMenu} from './components/adminPanel/AdminMenu';
import { Login } from './components/adminPanel/Login';
import { NoteNewsAll } from './components/adminPanel/NoteNewsAll';
import { NewsPostingsPage } from './components/adminPanel/NewsPostingsPage';
import { EditingNote } from './components/adminPanel/EditingNote';
import { Hrentalpost } from './pages/HrentalPost';
import { FullNew } from './pages/FullNew';
import { HallsRent } from './pages/HallsRent';
import React from 'react';
import { OnePostNews } from './pages/ElementPages/OnePostNews';
import { CreatEvents } from './components/adminPanel/CreatEvents';
import { Project } from './pages/Project';
import { NKO } from './pages/NKO';
import { Contacts } from './pages/Contacts';
import { Documents } from './pages/Documents';
import { Oneprodject } from './pages/ElementPages/Oneprodject';
import { OneNKO } from './pages/ElementPages/OneNKO';

const rus_news= [{img:oblo, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'},{img:oblo2, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'}, {img:oblo, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'}];

const servicpost = [
  {img:muz1,
    title:'Музыкальный салон (105 м2)', 
    price:'1200',
    scope:"Услуги по организации и проведению мероприятий в Музыкальном салоне (творческих и поэтических вечеров, презентаций); Фотосессия - 1200 руб/час",
    priceincl: 'Белый рояль (закрытый), 8 мраморных столов, 24 банкетки, Рояль открывается только для музыкальных вечеров'},
  {
    img:holl,
    title:'Холл первого этажа (356 м2)', 
    price:'',
    scope:"Услуги по организации и проведению мероприятий (выставок изобразительного и декоративно-прикладного искусства, фотовыставок, презентаций, мастер-классов, танцевальных мероприятий)",
    priceincl: 'Столы для регистрации с накидками до 3 шт, Столы  до 25 шт, Стулья до 50 шт, '},
  {
    img:holl2,
    title:'Конференц-зал (этноковоркинг) (56 м2)', 
    price:'1200',
    scope:"Услуги по организации и проведению мероприятий в конференц-зале (мультимедийных презентаций, семинаров, совещаний, лекций) -1200 руб/час",
    priceincl: ''},
  {
    img:torg,
    title:'Зал торжественных мероприятий (509 м2)', 
    price:'9000',
    scope:"Услуги по организации и проведению мероприятий в Зале торжественных мероприятий - 9000 руб/час; Услуги по организации и проведению мероприятий в Зале торжественных мероприятий с предоставлением светодиодного экрана размером 7*4 м (1 этаж, 509,9 кв.м.) - 14000 руб/час",
    priceincl: 'Звуковая аппаратура и звуковое сопровождение мероприятия, 2 радиомикрофона, стулья по количеству гостей'},
  {
    img:mnfunc,
    title:'Многофункциональный зал (270 м2)', 
    price:'4800',
    scope:"Услуги по организации и проведению мероприятий в Многофункциональном зале 4800 руб/час.; концертный вариант до 230 человек;бала/дискотеки до 150-200 человек; Услуги по организации и проведению мероприятий в Многофункциональном зале с предоставлением светодиодного экрана размером 5*3 м – 7800 руб/час",
    priceincl: 'Звуковая аппаратура и звуковое сопровождение мероприятия, 2 радио микрофона на стойках, Работа специалиста по видео сопровождению мероприятия, Стулья  на количество гостей'}, 
  {
    img: minizal,
    title: 'Малый зал (263 м2)', 
    price:'3300', 
    scope: 'Услуги по организации и проведению мероприятий в Малом зале вместимостью в режиме конференции, концерта, бизнес-семинаров, презентаций (до 110 человек) - 3300 руб/час; Услуги по организации и проведению мероприятий в Малом зале вместимостью в режиме банкета до 100 человек - 2500 руб/час; Услуги по организации и проведению мероприятий в Малом зале вместимостью в режиме фуршета до 150 человек  - 2500 руб/час ',
    priceincl:'Звуковая аппаратура и звуковое  сопровождение мероприятия, 2 микрофона на стойках, Видео сопровождение мероприятия (1 плазменная панель), столы до 20 шт, стулья на количество гостей' }];

const administration = ['dir','secretary','dep_dir_1','dep_dir_2','dep_tex_obsl','dep_tex_snab','dep_dir_admin','dep_dep_relations','dep_dep_events','dep_dep_education','dep_dep_project','dep_dep_info','dep_dep_admin_res']
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout> <Outlet/> </MainLayout>}>
          <Route index element={<MainContent news={rus_news} serv={servicpost} />} />
          <Route path={Pahts.indormation} element={<InfoOrg/>} />
          <Route path={Pahts.structure} element={<Structure/>} />
          <Route path={Pahts.news} element={<FullNew name='Новости' />}/>
          <Route path={Pahts.hrental} element={<HallsRent mas={servicpost}/>}/>
          <Route path={Pahts.project} element={<Project/>}/> 
          <Route path={Pahts.nko} element={<NKO/>}/>
          <Route path={Pahts.contacts} element={<Contacts/>}/>
          <Route path={Pahts.doc} element={<Documents/>}/>
          {
            administration.map(path =>(
              <Route key= '/' path={Pahts.structure + '/' + path} element={<People/>} />
            ))
          }          
          <Route path={Pahts.hrental + '/:id'} element={<Hrentalpost mas={servicpost}/>}/> 
          <Route path={Pahts.onepostpage + '/:id'} element={<OnePostNews/>}/>
          <Route path={Pahts.oneproject + '/:id'} element={<Oneprodject/>}/>
          <Route path={Pahts.onenko + '/:id'} element={<OneNKO/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path={Pahts.admin} element={<PrivateRouter><AdminMenu> <Outlet /> </AdminMenu></PrivateRouter>}>
          <Route path={Pahts.postingspost} element= { <NewsPostingsPage/> }/>
          <Route path={Pahts.note} element= { <NoteNewsAll/> }/>
          <Route path={Pahts.note + '/:id'} element= { <EditingNote/>}/> 
          <Route path={Pahts.Aevents} element={<CreatEvents/>}/>
        </Route>        
      </Routes>
      
    </>

  );
}

export default App;
