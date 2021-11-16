import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"

export const useFetchGif = (category) => {

    const [load, setLoad] = useState({
        data: [],
        loading: true,
    })

    useEffect( () =>{
        getGif(category)
           .then ( imgs =>{
               setLoad({
                   data: imgs,
                   loading: false,
               })
           } )
    }, [category] )  


    /* 
      *Se pone category en los corchetes por si la categoria cambia, volver a ejecutar la funcion
     */

    return load

}