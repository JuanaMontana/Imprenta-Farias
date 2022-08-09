import React, { useState, useContext } from "react";

import "firebase/firestore";



const Form = () => {

    const initialValues = {
        name:'',
        apellido:'',
        phone:'',
        email:''
    };
    
    return(
        <div>
            <h2 className="p-3 mb-2 text-center mt-4">Finalizar compra</h2>
            <p className="text-center">Ingresa tus datos</p>
            <center>
                <form  className="w-75 p-3" id="form"  >
                    <input placeholder="Nombre"  type="text" name="name" className="form-control mt-4" required></input>
                    <input  placeholder="Apellido"  type="text" name="apellido" className="form-control mt-4" required></input>
                    <input  placeholder="Teléfono"  type="number" name="phone" className="form-control mt-4" required></input>
                    <input placeholder="Email"  type="email" name="email" className="form-control mt-4" required></input>
                    <button type="submit" className="btn btn-secondary mt-2">Enviar datos</button>
                </form>
            </center>
            
        </div>
    )

};

export default Form;