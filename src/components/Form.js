import React, { useState, useContext } from "react";
import { collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/useContext";
import "firebase/firestore";
import "firebase/auth";

function Field({
  name,
  inputLabel,
  nameField,
  style,
  type,
  id,
  placeholder,
  valueInput,
  onChange,
}) {
  return (
    <>
      <div className="col-sm-6">
        <label
          htmlFor={inputLabel}
          name={name}
          className="form-label"
          style={style}
        >
          {nameField}
        </label>
        <input
          type={type}
          value={valueInput}
          className="form-control"
          id={id}
          placeholder={placeholder}
          required
          onChange={onChange}
        ></input>
      </div>
    </>
  );
}
const Form = () => {

    return (
        <div>
            <h2 className="p-3 mb-2 text-center mt-4">Finalizar compra</h2>
            <p className="text-center">Ingresa tus datos</p>
            <center>
                <form className="w-75 p-3" id="form"  >
                <Field
                  inputLabel="inputName"
                  name="name"
                  nameField="Nombre y Apellido"
                //   valueInput={name}
                  style={{ paddingTop: "5px" }}
                  type="text"
                  id="inputName"
                  placeholder="Nombre y Apellido"
                  
                />
                <Field                  
                  inputLabel="inputPhone"
                  name="phone"
                  nameField="Teléfono"
                 // valueInput={phone}
                  style={{ paddingTop: "10px" }}
                  type="text"
                  id="inputPhone"
                  placeholder="1133445566"
                  
                />
                <Field
                  inputLabel="inputEmail"
                  name="email"
                  nameField="Email"
                  //valueInput={email}
                  style={{ paddingTop: "10px" }}
                  type="email"
                  id="inputEmail"
                  placeholder="mail@ejemplo.com"
                  
                />
                    <button   type="submit" className="btn btn-secondary mt-2">Enviar datos</button>
                </form>
            </center>

        </div>
    )
    }
export default Form;