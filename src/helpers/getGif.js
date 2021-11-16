

export const getGif =  async(category) =>{

    /* 
     *encodeURI Remplaza los espacios de la cadena de texto por %20
    */

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BJiIW4DKFDZHA4h7riNVR5uMZQS1f6wm`
    const resp = await fetch(url)
    const {data} = await resp.json()

    /* 
     *Se Utiliza el signo de ? para especificar si viene "images" lo utilice, si no, no
    */
    

     
    /* 
    * Hacemos un map para poner los titulos
    */
    const gif = data.map (img => {
        return{
            id: img.id,
            title: img.title,
            url:  img.images?.downsized_medium.url
        }
    })

    return gif
    /* Retorna una promesa */

 }      
