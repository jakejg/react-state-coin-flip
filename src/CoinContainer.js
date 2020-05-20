import React, { useState } from 'react';
import Coin from './Coin';
import heads from './heads.png';
import tails from './tails.png';

const headsOrTails = (sides) => {
    const idx = Math.floor(Math.random()*2);
    return sides[idx];
 }


const CoinContainer = () => {
    const coinSides = [heads, tails];

    const [imageSrc, setImageSrc] = useState();
    const [headFlips, setHeadFlips] = useState(0);
    const [tailFlips, setTailFlips] = useState(0);

    const flip = () => {
        const newSide = headsOrTails(coinSides);
        setImageSrc(newSide);

        if (newSide === heads) setHeadFlips(headFlips + 1);
        if (newSide === tails) setTailFlips(tailFlips + 1);

    };


    return (
        <div>
            <h1 >Flip a coin!</h1>
            {imageSrc && <Coin imgSrc={imageSrc} />}
            <button onClick={flip}>Flip</button>
            <p>Out of {headFlips + tailFlips} flips there have been {headFlips} heads and {tailFlips} tails</p>

        </div>
    )
}

export default CoinContainer;