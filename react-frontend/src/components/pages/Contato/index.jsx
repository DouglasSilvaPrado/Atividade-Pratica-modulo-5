import React from 'react'

import MiniCard from "../../layout/MiniCard";
import Input from "../../form/Input"
import SubmitButton from "../../form/SubmitButton";

function Contato() {
    return ( 
        <>
            <div className="container vh-90" id="contato">
                <h2 className="primary-color display-6 text-center fw-bold my-5">
                    Entre em contato
                </h2>
                <div>
                    <form action="https://formsubmit.co/douglassilvadaprado@gmail.com" method="POST">
                        <div className="form-group w-50 mx-auto">      
                            <Input
                            type="text"
                            className="form-control my-3"
                            placeholder="Digite seu nome"
                            name="Nome"
                            required={true}
                            />
                            <Input
                            type="email"
                            className="form-control my-3"
                            placeholder="Digite seu Email"
                            name="Email"
                            required={true}
                            />
                            <textarea placeholder="Digite sua Mensagem" rows="4" cols="50" name="mensagem" required={true} className="form-control my-3"></textarea>
                            <Input type ="hidden" name ="_captcha" value ="false"/>
                            <Input type ="hidden" name ="_autoresponse" value ="Mensagem enviada!"/>
                            <Input type ="hidden" name ="_next" value = "http://localhost:3000/"/>
                            <SubmitButton className="btn btn-primary form-control my-3" text="Enviar"/>
                        </div>
                    </form>
                </div>
                <div className="text-center my-5">
                <span className="primary-color">Fale Conosco</span>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mb-5">
                <div className="col">
                    <MiniCard icon={"bi bi-whatsapp"} text="(21) 99999-9999" />
                </div>
                <div className="col">
                    <MiniCard icon={"bi-geo-alt"} text="AV. Comendador Teles Rua 4 " />
                </div>
                <div className="col">
                    <MiniCard icon={"bi-send"} text="Agencia@gmail.com" />
                </div>
            </div>
            </div>
            
        </>
     );
}

export default Contato;