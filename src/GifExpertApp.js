import React ,{ useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd =()=>{
    //     // primera forma de hacerlo
    //     //setCategories([...categories,'Alalala']);
    //     // Esta es otra forma se recibe el estado anterior y se le agrega el elemento 
    //     setCategories(cate => [...cate,'Alalala']); 
    // }
    // <button onClick ={ handleAdd }>Agregar</button>  esto dentro del return solo para referencia

    return (
        <>
          <h2>GifExpertApp</h2>  
            <AddCategory setCategories= { setCategories } />
          <hr />
          <ol>
            {
                categories.map(category => 
                    // si se presiona varias veces click sale error por key duplicado pero 
                    // eso no pasará por que se obtendran los keys de la base de datos.
                     ( 
                        <GifGrid 
                            key = { category }
                            category= { category }
                        /> 
                     )
                )
            }
          </ol>  
        </>
    )
}
