import React from 'react'


import Card from "../../layout/Card";

function Promocao() {
    return ( 
        <>
            <div className="container"  id="promo">
                <h2 className="primary-color display-6 text-center fw-bold my-5">
                    Promoções para sua viagem
                </h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
                    <div className="col">
                        <Card 
                            img="img/maldives.png"
                            title="Mermaid Beach Resort: A maneira mais alegre de passar suas férias" 
                            subTitle="📍maldivas 📅 4 dias"
                            priceOld="200"
                            price="175" 
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="img/cinnamon.png"
                            title="Desfrute de um cruzeiro romântico no lado ensolarado da vida" 
                            subTitle="📍cinnamon 📅4 dias"
                            priceOld="300"
                            price="250" 
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="img/dhigu.png"
                            title="Mermaid Beach Resort: A maneira mais alegre de passar suas
                            férias" 
                            subTitle="📍maldivas 📅4 dias"
                            priceOld="200"
                            price="175" 
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="img/rio.png"
                            title="Rio de Janeiro" 
                            subTitle="📅18 dias"
                            priceOld="100"
                            price="75" 
                        />
                    
                    </div>
                    <div className="col">
                        <Card 
                            img="img/Florianopolis.png"
                            title="Florianópolis" 
                            subTitle="📅20 dias"
                            priceOld="200"
                            price="175" 
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="img/Fortaleza.png"
                            title="Fortaleza" 
                            subTitle="📅8 dias"
                            priceOld="150"
                            price="125" 
                        />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Promocao;