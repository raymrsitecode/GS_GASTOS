import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    console.log(id);
    return (
        <div className="card">  
            <img src={url} alt={title}/>
            <h1>{title}</h1>
        </div>
    )
}

export default GifGridItem;