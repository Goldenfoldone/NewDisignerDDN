import {Routes, Route, Outlet} from 'react-router-dom';
import { MainLayout } from './pages/MainLayout';
import {MainContent} from './components/Osnova/MainContent';
import oblo from "./components/img/oblojkaPostone.jpg"
import oblo2 from "./components/img/oblojkaPosttwo.jpg"
import holl from './components/img/holl-1-etazha-ddn-edited-2048x1365.jpg'
import holl2 from './components/img/holl2.jpg'
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

const rus_news= [{img:oblo, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'},{img:oblo2, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'}, {img:oblo, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'}];

const servicpost = [{img:muz1,title:'Музыкальный салон (105 м2)', price:'2000',scope:"тематических вечеров; концертов камерной музыки; творческих встреч; мероприятий клубов по интересам; ",priceincl: 'Белый рояль (закрытый), 8 мраморных столов, 24 посадочных места, Рояль открывается только для музыкальных вечеров'},{img:holl,title:'Холл первого этажа (356 м2)', price:'1000',scope:"Встреча и регистрация гостей мероприяти; Выставки изобразительного искусства; Выставки декоративно-прикладного искусства; Фотовыставки; Презентации; Мастер-классы; Танцевальные мероприятия",priceincl: 'Столы для регистрации – 3 шт, Столы для раздаточного материала – до 5 шт, '},{img:holl2,title:'Холл второго этажа (169 м2)', price:'700',scope:"Выставки изобразительного искусства; Выставки изобразительного искусства; Фотовыставки; Презентации;",priceincl: 'Стеклянные витрины — 5 штук, Подвесные настенные стенды для организации выставок'},{img:torg,title:'Зал торжественных мероприятий (509 м2)', price:'7800',scope:"конференц-система и технологическое телевидение; система видеосъемки и электронного голосования, плазменная панель; синхронный перевод на два языка; современное звуковое оборудование; аудиозапись мероприятия; всероссийских и международных конференций, совещаний, торжественных церемоний; мультимедийных презентаций, электронных голосований, телемостов;",priceincl: 'Зал с возможностью организовать до 300 посадочных мест, 202 стула по периметру зала,Трибуна с 2 микрофонами, 2 стола для секретариата, Государственная символика Российской Федерации и Удмуртской Республики, Звуковое сопровождение мероприятия, работа звукорежиссёра, 4 плазменных панели, работа специалиста по видео-сопровождению мероприятия'},{img:mnfunc,title:'Многофункциональный зал (256 м2)', price:'4100',scope:"2 плазменные панели; современная звуко- и светоаппаратура, потолочные фермы и радиомикрофоны; стационарная эстрада; концертов, собраний и совещаний; встреч с творческими коллективами; межнациональных конференций; молодежных вечеринок и этнодискотек; ",priceincl: 'Звуковое сопровождение мероприятия, работа звукорежиссёра на семинаре/конференции, 2 радио-микрофона на стойке, Видеосопровождение мероприятия (2 плазменные панели), До 3 столов с накидками, До 6 мягких стульев — для президиума, Стулья/столы на количество гостей'}, 
{img: minizal,title: 'Малый зал (263 м2)', price:'2500', scope: 'современная звуковая аппаратура; плазменная панель; стационарная эстрада; совещаний, собраний; корпоративных вечеров; юбилейных торжеств; новогодних балов',priceincl:'Звуковое сопровождение мероприятия, работа звукорежиссёра, 2 радио-микрофона на стойках, Видео сопровождение мероприятия (1 плазменная панель), работа специалиста по видео сопровождению мероприятия, До 3 столов с накидками, до 6 мягких стула — для президиума, Стулья/столы на количество гостей для конференции, круглого стола' }];

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
          {
            administration.map(path =>(
              <Route key= '/' path={Pahts.structure + '/' + path} element={<People/>} />
            ))
          }          
          <Route path={Pahts.hrental + '/:id'} element={<Hrentalpost mas={servicpost}/>}/> 
          <Route path={Pahts.onepostpage + '/:id'} element={<OnePostNews/>}/>
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
