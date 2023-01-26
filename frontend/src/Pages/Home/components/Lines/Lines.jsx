import React from 'react'
import Line from './Line/Line'
import { STATUS } from '../../../Status/Types/StatusTypes';
const {
    NAISSANCE,
    DECES,
    MARIAGE
}=STATUS
function Lines({data}) {
    const {actesAnnuel}=data||{};
    const {
        actesNaissanceAnnuel,
        actesMariageAnnuel,
        actesDecesAnnuel,
    }=actesAnnuel||{}

    const lines=[
        { 
            "id": DECES ,
            "data":actesDecesAnnuel.map((resAnnee)=>({
                "x":resAnnee.annee.toString(),
                "y":resAnnee._count
            }))
        },
        { 
            "id": MARIAGE ,
            "data":actesMariageAnnuel.map((resAnnee)=>({
                "x":resAnnee.annee.toString(),
                "y":resAnnee._count
            }))
        },
        { 
            "id": NAISSANCE,
            "data":actesNaissanceAnnuel.map((resAnnee)=>({
                "x":resAnnee.annee.toString(),
                "y":resAnnee._count
            }))
        },
    ];
    
  return (
    <>
    {
        <Line data={lines} description={"Nombre des différents actes par Année "} /> 
    }
    </>
  )
}

export default Lines