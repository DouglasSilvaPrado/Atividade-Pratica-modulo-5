import React from 'react'

// layout
import Carousel from '../../layout/Carousel';
import Divider from '../../layout/Divider'
//pages
import Promocao from '../Promocao';
import Contato from '../Contato';



function Home() {
    return (  
        <>
            <Carousel />
            <Divider />
            <Promocao />
            <Contato />       
        </>
    );
}

export default Home;