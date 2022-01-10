import React, { Component } from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';

import FormInput from './FormInput';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class FormLogin extends Component {
    render() {
        return <Formik 

        initialValues={{
            username:"",
            password:"",
        }} 
            onSubmit={(formValues) => alert (JSON.stringify(formValues))}

            validationSchema = {Yup.object().shape({
                username: Yup.string().required('Имя обязательно').max(20, 'Имя должно содержать не более 20 символов'),
                password: Yup.string().matches(passwordRegex, 'Пароль должен содержать не менее 8 символов и включать как минимум одну букву и одну цифру').required('Пароль обязателен')
            })}

        >
        { ({isValid}) => (
            <Form className='w-auto p-4 text-[18px] '>
                <Field name="username" component={FormInput} label="Введите имя"/>
                <Field name="password" component={FormInput} label="Введите пароль" type="password"/>
                <button className=' m-2 border rounded border-gray-300 w-min px-2 hover:bg-amber-50' type="submit"  disabled={!isValid}>Вход</button>
            </Form>)}
        </Formik>
    }
}