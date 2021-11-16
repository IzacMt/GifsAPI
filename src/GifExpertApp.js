import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

import {Text } from "@chakra-ui/react"

export const GifExpertApp = () => {

    /*
     * Se usara el useState para poner optimizar esto
    */

    const [categories, setCategories] = useState(['Fate Stay Night'])

    /* Agregar un nuevo elemento al arreglo
        *Usamos el operador spred donde se mantiene las categorias y se agrega al final
    */

    /* const handleAdd = () => {
        setCategories( [...categories,'Demon Slayer'] )
    } */

    return (
        <>
            <Text>GifExpertApp</Text>

            <AddCategory setCategories={setCategories}/>
            <hr></hr>



                {
                    /*
                    * Map transforma cada uno de los elementos que estan dentro del arreglo 
                    * Recibe dos elementos, el primero es el elemnto del arreglo y el indice
                    */
                    categories.map(category => {
                        /* return <li key={category}>{category}</li> */
                        return <GifGrid category={category} key={category}/>
                    })
                }
        </>
    )
}
