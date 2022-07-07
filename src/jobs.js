import logoKuepa from './assets/img/test1.png';
import logoKuepa2 from './assets/img/kuepa.png';
let jobs=[
    {
        id:1,
        logo: <img src={logoKuepa} alt="logo" className="kuepa"/>,
        logo2: <img src={logoKuepa2} alt="logo" className="kuepa-details"/>,
        empresa: "Kuepa - Tech Power",
        email:"juliana.correal@kuepa.edu.co",
        tipo:"Pasantia",
        tiempo:"Junio 2022 - Agosto 2022",
        telefono:"311 1234567"
    }
]

export function getAllJobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((job)=>job.id===id)
}