import React, { useState } from 'react';

const CoinContainer = () => {
    const coinSides = [heads.png, tails.png];

    const headsOrTails = (sides) => {
       const idx = Math.floor(Math.random()*2);
       return sides[idx];
    }
    const [image, setImage] = useState(headsOrTails(coinSides));

    const flip = () => (setImage(headsOrTails(coinSides)))

    return (
        <div>
            <h1>Flip a coin!</h1>
            <Coin imgSrc={image} />
            <button onClick={flip}>Flip</button>
        </div>
    )
}

export default CoinContainer;