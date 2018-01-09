import React from 'react';
import selfie from '../img/portrett_small.jpg';

const Home = () => (
    <div>
        <h1>Hem</h1>
        <p>Jag som skapat sidan heter Marcus.</p>
        <img id="portrait" alt="marcus" src={selfie} />
    </div>
);

export default Home;
