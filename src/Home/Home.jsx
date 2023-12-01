import { useState,useEffect } from "react"
import {consultarHabitaciones} from "../services/habitacionesServicio.js"
export function Home(){

    const [habitaciones, setHabitaciones]=useState(null)
    const [cargando, setCargando]=useState(true)

    useEffect(function(){
        consultarHabitaciones()
        .then(function(respuesta){
            console.log(respuesta)
            setHabitaciones(respuesta.habitaciones)
            setCargando(false)
        })
        .catch((respuesta)=>console.log(respuesta))
    },[])

    if(cargando){
        return(
            <>
                <h4>cargando</h4>
            </>
        )
    }else{

        return(

            <>
                {console.log(habitaciones)}
                <h1>HOTEL: </h1>
                <hr />
    
                
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {
                            
    
                            habitaciones.map(function(habitacion){
                                return (
    
                                    <div className="col" key={habitacion._id}>
                                        <div className="card h-100 shadow">
                                            <h3>{habitacion.nombre}</h3>
                                            <img src={habitacion.foto[0]} alt="" className="img-fluid w-100 h-100" />
                                        </div>
                                    </div>
    
                                )
                            })
                        }
                    </div>
                </div>
    
    
            </>
    
        )

    }

    


}