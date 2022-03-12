import React from 'react'

import Card from '../../layout/Card'
import { Link } from 'react-router-dom';
import Input from '../../form/Input'
function Destino() {
    return ( 
        <>
            <div className="container vh-90">
                <h2 className="primary-color display-6 text-center fw-bold my-5">
                    Os Melhores Destinos
                </h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <div className="col">
                        <Card 
                            img="https://thumbcdn-z.hotelurbano.net/a943oXpgWbYzGj8F44cIMlLSoNQ=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2021/11/25/09/02/toquio.jpg"
                            title="Toquio" 
                            subTitle="📍 4 ou 7 dias"
                            price="225"
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="https://thumbcdn-z.hotelurbano.net/J3eL5uQ8yUxz7cXidZiz3nzCGkg=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2021/11/22/15/18/1.png"
                            title="Orlando" 
                            subTitle="📍 10 ou 14 dias"
                            price="350"
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="https://thumbcdn-z.hotelurbano.net/tAuW7h77TfVB-aYzATrXHw3fh7I=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2021/11/16/12/30/1_shutterstock_2055029483___Vista_a__rea_da_praia_do_Mucug_____Arraial_D_ajuda__Porto_Seguro.jpg"
                            title="Porto Seguro" 
                            subTitle="📍 4 ou 7 dias"
                            price="90"
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="https://thumbcdn-z.hotelurbano.net/P9W0uy43b1uMUTKFavGV_c8XJqE=/400x180/center/middle/filters:quality(70)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2021/12/02/14/44/1073623.jpg"
                            title="Madrid" 
                            subTitle="📍 5 ou 7 dias"
                            price="210"
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="https://thumbcdn-z.hotelurbano.net/e3Ig6vVXV8iio7rc32csHoiJoNk=/400x180/center/middle/filters:quality(70)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2021/12/10/14/47/1_bp.jpg"
                            title="Fortaleza" 
                            subTitle="📍 4 ou 7 dias"
                            price="80"
                        />
                    </div>
                    <div className="col">
                        <Card 
                            img="https://thumbcdn-z.hotelurbano.net/TpafYqyity_RXi56LDweEAqtDzQ=/400x180/center/middle/filters:quality(70)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2021/12/06/10/50/1_shutterstock_300089531___Bariloche__Argentina.jpg"
                            title="Barilochi" 
                            subTitle="📍 8 ou 10 dias"
                            price="300"
                        />
                    </div>
                </div>
                
                <Link to="/Viagens"><Input type="button" className="btn btn-primary my-3 form-control" value="Agendar Viagem"/></Link>
                    
            </div>
        </>
     );
}

export default Destino;