import logoUSA from './assets/img/sergio-arboleda-university.png';
import logoUSA2 from './assets/img/sergio-arboleda-university.png';
import logoKuepa from './assets/img/test1.png';
import logoKuepa2 from './assets/img/kuepa.png';

let studies=[
    {
        id:1,
        logo: <img src={logoKuepa} alt="logo" className="kuepa"/>,
        logo2: <img src={logoKuepa2} alt="logo" className="kuepa-details"/>,
        empresa: "Programa Técnico Tech Power",
        email:"kuepa@techpower.com",
        tiempo:"Enero 2022 - presente",
        titulo:"Técnico en Desarrollador(a) Frontend",
        telefono:"(601) 917 7888"
    },
    {
        id:2,
        logo: <img src={logoUSA} alt="logo" className="usa"/>,
        logo2: <img src={logoUSA2} alt="logo" className="usa-details"/>,
        empresa: "MinTic - Universidad Sergio Arboleda",
        email:"oficinajuridica@usa.edu.co",
        tiempo:"Abril 2021 - Diciembre 2021",
        titulo:"Diplomado en Desarrollador(a) Web Fullstack",
        telefono:"(601) 325 8181"
    }
]

export function getAllStudies(){
    return studies;
}

export function getStudy(id){
    return studies.find((study)=>study.id===id)
}
