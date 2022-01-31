import React, { Component } from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';

import {auth, db} from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

import FormInput from './FormInput';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class FormSingUp extends Component {    
    hendleSubmit = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password).then(
            async () => {
                await updateProfile(auth.currentUser, { displayName: values.username });
                
                setDoc(doc(db, 'users', values.username), {
                    username: values.username,
                });
            }
        );
    }    
    render() {
        return <Formik initialValues={{ username:"", email:"", password:""}} onSubmit={this.hendleSubmit}

            validationSchema = {Yup.object().shape({
                username: Yup.string().required('Имя обязательно').max(20, 'Имя должно содержать не более 20 символов'),
                email: Yup.string().email('Еmail должен быть верного формата').required('Еmail обязателен'),
                password: Yup.string().matches(passwordRegex, 'Пароль должен содержать не менее 8 символов и включать как минимум одну букву и одну цифру').required('Пароль обязателен'),
            })}
        >
        { ({isValid}) => (
            <Form className='w-auto p-4 text-[18px]' >
                <Field name="username" component={FormInput} label="Введите имя"/>
                <Field name="email" component={FormInput} label="Введите еmail"/>
                <Field name="password" component={FormInput} label="Введите пароль" type="password"/>
                <button className=' m-2 border rounded border-gray-300 w-min px-2 hover:bg-amber-50' type="submit"  disabled={!isValid}>Регистрация</button>
            </Form>)}
        </Formik>
    }
}