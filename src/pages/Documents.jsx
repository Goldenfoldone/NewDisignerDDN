import { SectionText } from "../components/Osnova/ElementMainContent/SectionText"
import { styled } from "styled-components"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 160px;
    gap: 20px;
    margin-top: 1.5%;
    padding-bottom: 50px;
`

const Link = styled.a`
    text-decoration: none;
    color: #2C535E;
    font-size: 30px;
`


export const Documents = () => {
    

   const docs = [
    {
        uri: require('../components/doc/Отчет о мерах по противодействию коррупции в 2024 году.pdf'),
        fileName: 'Отчет о мерах по противодействию коррупции в 2024 году'
    },
    {
        uri: require('../components/doc/УСТАВ ДДН новая редакция 2023.pdf'),
        fileName: 'УСТАВ ДДН новая редакция 2023'
    },
    {
        uri: require('../components/doc/План антикоррупционных мероприятий 2025.pdf'),
        fileName: 'План антикоррупционных мероприятий 2025'
    },
    {
        uri: require('../components/doc/План антикоррупционных мероприятий БУ УР Дом Дружбы народов на 2024 год.pdf'),
        fileName: 'План антикоррупционных мероприятий БУ УР Дом Дружбы народов на 2024 год'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 01.10.2012 №455.PDF'),
        fileName: 'Постановление Правит-ва УР от 01.10.2012 №455'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 03.10.2011 №347.PDF'),
        fileName: 'Постановление Правит-ва УР от 03.10.2011 №347'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 06.04.2022 №182.PDF'),
        fileName: 'Постановление Правит-ва УР от 06.04.2022 №182'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 07.02.2019 №26.PDF'),
        fileName: 'Постановление Правит-ва УР от 07.02.2019 №26'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 15.10.2019 №468.PDF'),
        fileName: 'Постановление Правит-ва УР от 15.10.2019 №468'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 18.11.2017 №474.PDF'),
        fileName: 'Постановление Правит-ва УР от 18.11.2017 №474'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 20.05.2020 №204.PDF'),
        fileName: 'Постановление Правит-ва УР от 20.05.2020 №204'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 20.09.2010 №285.pdf'),
        fileName: 'Постановление Правит-ва УР от 20.09.2010 №285'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 21.10.2020 №492.PDF'),
        fileName: 'Постановление Правит-ва УР от 21.10.2020 №492'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 22.12.2014 №548.PDF'),
        fileName: 'Постановление Правит-ва УР от 22.12.2014 №548'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 23.05.2011 №155.PDF'),
        fileName: 'Постановление Правит-ва УР от 23.05.2011 №155'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 28.03.2024г №165.pdf'),
        fileName: 'Постановление Правит-ва УР от 28.03.2024г №165'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 28.12.2022 №789.PDF'),
        fileName: 'Постановление Правит-ва УР от 28.12.2022 №789'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 30.09.2013 №439.PDF'),
        fileName: 'Постановление Правит-ва УР от 30.09.2013 №439'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 31.01.2024 №41.pdf'),
        fileName: 'Постановление Правит-ва УР от 31.01.2024 №41'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 20.05.2013 года № 206.pdf'),
        fileName: 'Постановление Правит-ва УР от 20.05.2013 года № 206'
    },
    {
        uri: require('../components/doc/Постановление Правит-ва УР от 29.08.2025 года № 514.pdf'),
        fileName: 'Постановление Правит-ва УР от 29.08.2025 года № 514'
    }
    
   ]


    
    return(
        <>
            <SectionText text='ДОКУМЕНТЫ'/>
            <Main>
            {
                docs.map((e) =>{
                    return(<Link href={e.uri} target="_blank">{e.fileName}</Link>)
                })
            }
            </Main>
        </>
    )
}