export async function consultarHabitaciones(){

    const URL="https://apihotelesviernes20231.vercel.app/buscarhabitaciones"
    const PETICION={
        method:"GET"
    }

    try{
        let respuesta=await fetch(URL,PETICION)
        
        if (!respuesta.ok){
            throw new Error("Error al consultar el API");
        }

        respuesta=await respuesta.json()
        return respuesta
        

    }catch(error){
        console.log("error")
        throw error;
    }
    



}