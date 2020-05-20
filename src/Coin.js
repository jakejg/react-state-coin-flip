import React, { useState } from 'react';
import './Coin.css'

const Coin = ({imgSrc}) => (
    <div>
        <img src={imgSrc} ></img>
    </div>
)

export default Coin;