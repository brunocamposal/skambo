import React from 'react';
import MainBanner from './style';

const BoostBanner = ({color, image, textHeader, info}) => {
        
    let infos = info.split(/\n/);
    const headInfo = infos.shift()

    return (
        <MainBanner color={color} >
            <div><h2>{textHeader}</h2></div>
            <div><img alt='Banner Image' href={image} /></div>
            <Infos>
                <h3>{headInfo}</h3>
                {infos.map((p, i) => (<p>{p}</p>))}
            </Infos>
        <MainBanner/>
    )

}

export deffault BoostBanner