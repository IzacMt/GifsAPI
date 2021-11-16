import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { Input } from "@chakra-ui/react"


export const AddCategory = ({setCategories}) => {

    /*
     * El UseState catchara el valor que se escriba dentro del input 
    */

    const [inputValue, setInputValue] = useState('')

    /*
     * La funcion recibe el evento y se dispara cada que cambia le valor de la caja de texto
     * El e.target.value esta almacenando lo que hay dentro del evento, cuando value tiene el valor escrito
    */

    const inputChange = (e)=>{
        setInputValue(e.target.value)
    }

    /*
     * El Sumit dispara el enter del Input, para ello debemos poner el input del return
     * Dentro de un formulario que dispare el Sumit
    */

    const inputSumit  = (e) =>{
        e.preventDefault() /* Esta etiqueta Previene el refresh de la pagina */

        /*
         !Hacemos una Validacion para evitar strings vacios, para eliminar los espacios en blanco usamos .trim()
        */

         if (inputValue.trim().length>2){
             /*
             *Para hacer un añadidod e las categorias, usamos la referencia cats, ya que no tenemos 
             *Acceso a la seccion de categorias como tal.
             ? El inputValue es el valor de la caja de texto
            */
            setCategories(cats=>[inputValue,...cats])
            setInputValue('') /* Esto hace que la caja de texto se vuelva vacia una vez presionado enter */

         }
    }

    return (
        <>
            <form onSubmit={inputSumit}>
                <Input 
                    mt={5}
                    placeholder="Search"
                    size="md"
                    variant="outline"
                    type="text"
                    value={inputValue}
                    onChange={inputChange}
                />
            </form>
        </>
    )
}


/* Hacemos que SetCategories sea obligatorios */

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
