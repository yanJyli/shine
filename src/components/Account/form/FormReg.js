import React, { Component } from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';

import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class FormReg extends Component {
    render() {
        return <Formik 

        initialValues={{
            username:"",
            email:"",
            password:"",
            repeatPassword:"",
            termsAndConditions: false
        }} 
            onSubmit={(formValues) => alert (JSON.stringify(formValues))}

            validationSchema = {Yup.object().shape({
                username: Yup.string().required('Имя обязательно').max(20, 'Имя должно содержать не более 20 символов'),
                email: Yup.string().email('Еmail должен быть верного формата').required('Еmail обязателен'),
                password: Yup.string().matches(passwordRegex, 'Пароль должен содержать не менее 8 символов и включать как минимум одну букву и одну цифру').required('Пароль обязателен'),
                repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли должны совпадать').required('Пароли должны совпадать'),
                termsAndConditions: Yup.boolean().isTrue('Вы должны принять наши условия')
            })}

        >
        { ({isValid}) => (
            <Form className='w-auto p-4 text-[18px] '>
                <Field name="username" component={FormInput} label="Введите имя"/>
                <Field name="email" component={FormInput} label="Введите еmail"/>
                <Field name="password" component={FormInput} label="Введите пароль" type="password"/>
                <Field name="repeatPassword" component={FormInput} label="Повторите пароль" type="password"/>
                <Field component={FormCheckbox} label="Вы принимаете наши условия и политику использования данных" name="termsAndConditions" className='hover:bg-amber-50'/>
                <button className=' m-2 border rounded border-gray-300 w-min px-2 hover:bg-amber-50' type="submit"  disabled={!isValid}>Регистрация</button>
            </Form>)}
        </Formik>
    }
}