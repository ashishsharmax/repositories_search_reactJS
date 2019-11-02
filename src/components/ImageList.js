import React from 'react';

import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imagess = props.repositories.map((it) => {
        return <ImageCard key={it.id} image={it}/>
    })
    return (<div className="image-list">
    <div>{imagess}</div>
    </div>
    )
}
 
export default ImageList