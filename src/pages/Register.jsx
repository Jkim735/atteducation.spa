import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import FormDefault from '../components/FormDefault'
import Test from './Test';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <FormDefault
        title="REGISTRO"
        fields={[
          {
            label: "Cedula de Identidad",
            name: "Ci",
            placeholder: "Ingrese su Cedula de Identidad",
            type: "number",
            typeInput: "input",
          },
          {
            label: "Nombre",
            name: "Name",
            placeholder: "Ingrese su Nombre",
            type: "text",
            typeInput: "input",
          },
          {
            label: "Apellidos",
            name: "LastName",
            placeholder: "Ingrese su Apellido",
            type: "text",
            typeInput: "input",
          },
          {
            label: "Nombre de Usuario",
            name: "Username",
            placeholder: "Ingrese el Nombre de Usuario",
            type: "text",
            typeInput: "input",
          },
          {
            label: "Contraseña",
            name: "Password",
            placeholder: "Ingrese su Contraseña",
            type: "password",
            typeInput: "input",
          },
          {
            label: "Email",
            name: "Email",
            placeholder: "Ingrese su Email",
            type: "email",
            typeInput: "input",
          },
          {
            // label: 'Rol',
            // type: 'select',
            // typeInput: 'select',
            // options: [
            //   {
            //     label: 'Educador',
            //     value: 'Cliente',
            //   },
            //   {
            //     label: 'Estudiante',
            //     value: 'Agencia',
            //   },
            // ],
            label: 'Seleccione el Rol',
            name: 'Rol',
            type: 'select',
            typeInput: 'select',
            urlApi: '/rol',
            reference: 'Type',
            condition: 'selectGet',
            labelOption: 'name',
            value: 'Rol',
          },
        ]}
        initialValues={{
          Ci: "",
          Name: "",
          LastName: "",
          Username: "",
          Password: "",
          Email:"",
          Rol:[],
        }}
        validationSchema={Yup.object().shape({
          Ci: Yup.number().required("Este campo es obligatorio"),
          Name: Yup.string().required("Este campo es obligatorio"),
          LastName: Yup.string().required("Este campo es obligatorio"),
          Username: Yup.string().required("Este campo es obligatorio"),
          Password: Yup.string().required("Este campo es obligatorio"),
          Email: Yup.string().required("Este campo es obligatorio"),
        })}
        onSubmit={(values, resetForm) => {
            <NavLink to="/Test"></NavLink>
        
            console.log(values);
            // await requestAuth('post', '/rol', {
            //   ...values,
            //   MenuList: values.MenuList.map((item) => ({
            //     Name: item,
            //   })),
            // })
            //   .then(() => {
            //     toast.success('Envio exitoso')
            //     setreload(true)
            //     setCreateForm(false)
            //     getuser()
            //     resetForm()
            //   })
            //   .catch((response) => {
            //     toast.error(response.response.data)
            //   })
          }}
          btnName="Registrar"
      />
    </>
  );
};

export default Register;
