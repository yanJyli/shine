import React, { Component } from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';

import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

import FormInput from './FormInput';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class FormLogin extends Component {

    hendleSubmit = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
    }

    render() {
        return <Formik initialValues={{ email:"", password:""}} onSubmit={this.hendleSubmit}

            validationSchema = {Yup.object().shape({
                email: Yup.string().email('Еmail должен быть верного формата').required('Еmail обязателен'),
                password: Yup.string().matches(passwordRegex, 'Пароль должен содержать не менее 8 символов и включать как минимум одну букву и одну цифру').required('Пароль обязателен')
            })}

        >
        { ({isValid}) => (
            <Form className='w-auto p-4 text-[18px]' >
                <Field name="email" component={FormInput} label="Введите еmail"/>
                <Field name="password" component={FormInput} label="Введите пароль" type="password"/>
                <button className=' m-2 border rounded border-gray-300 w-min px-2 hover:bg-amber-50' type="submit"  disabled={!isValid}>Вход</button>
            </Form>)}
        </Formik>
    }
}