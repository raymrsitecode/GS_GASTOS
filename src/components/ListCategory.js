import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
const  ListCategory = ({categories}) => {

    const [counter, setCounter] = useState(0);
    const [images, setImages] = useState([]);

    useEffect( () =>{
        searchGift();
    }, 
    []
    );
    const searchGift = async() => {

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=nluFW93SmT8fJltuvra9SjEXaa8nw0Vr&q=Rick and morty&limit=10';
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    console.log(data);
    setImages( gifs );
       
    }

   
    return (
        <>
          
          <ul>
               
                    {
                        categories.map( category => <h3 key={category}>{category} </h3> )
                    }
                   
                         {
                            images.map( img  => (
                               <GifGridItem 
                               key = {img.id}
                               img ={img}
                               {...img}/>
                            ))
                         } 
                   
                   
          </ul>  
        
        </>
    )
}

 ListCategory.propTypes = {
     categories: PropTypes.array.isRequired
 }

export default ListCategory;