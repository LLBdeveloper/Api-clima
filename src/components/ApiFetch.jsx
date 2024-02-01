import { useEffect, useState } from "react"

function ApiFetch() {

    const [cotizacion, setCotizacion] = useState([])
    
    useEffect(()=>{
        
        fetch('https://dolarapi.com/v1/dolares')
        .then(response => response.json())
        .then(json =>{
            setCotizacion(json)
        })
        .catch(error => {
            console.error('Error al obtener las cotizaciones:', error);
        });
    },[])

    return (
        <div>
            <h2>Cotizaciones</h2>
            {cotizacion.map((cotizacion, index) => (
                <div key={index}  >
                    <p>Nombre: {cotizacion.nombre} </p>
                    <p>Compra: {cotizacion.compra} </p>
                    <p>Venta: {cotizacion.venta} </p>
                    <p>Fecha de actualización: {cotizacion.fechaActualizacion}</p>
                </div>
            ))}
        </div>
    )
}

export default ApiFetch