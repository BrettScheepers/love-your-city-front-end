import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "../../../apis/authentication";
import { LoadingSpinner } from "../../../shared/LoadingSpinner";

const SignUp = () => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        const res = await useSignUp(values)()

        if (res.error) return enqueueSnackbar(res.error, {
            variant: 'error',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            },
        })

        sessionStorage.setItem('accessToken', res.accessToken)
        sessionStorage.setItem('user', JSON.stringify(res.user))
        navigate('/campaigns')
    }

    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img src="./lyc_light_blue.png" alt="Love Your City Logo" className="mx-auto h-16 w-auto" />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold">Sign Up to Love Your City</h2>
                <p className="mt-2 text-center text-sm leading-5 max-w">
                    <Link to="/log-in" className="font-medium transition ease-in-out duration-150 link">or log in to your existing account</Link>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <Formik
                    initialValues={{ email: '', username: '', password: '' }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('Required'),
                        username: Yup.string().min(3).max(50).required('Username must contain minimum of 3 characters and maximum of 50'),
                        password: Yup.string().min(3).required('Password must contain minimum of 3 characters'),
                    })}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                                    Email Address
                                    {touched.email && errors.email ? (
                                        <span
                                            className="text-danger text-sm opacity-80"
                                        > *</span>
                                    ) : null}
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <Field
                                        as="input" 
                                        type="email" 
                                        name="email"
                                        id="email"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-primary focus:border-primary transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </div>
                                {touched.email && errors.email ? (
                                    <div
                                        className="text-danger text-sm opacity-80"
                                    >{errors.email}</div>
                                ) : null}
                            </div>
                            <div className="mt-6">
                                <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                                    Username
                                    {touched.username && errors.username ? (
                                        <span
                                            className="text-danger text-sm opacity-80"
                                        > *</span>
                                    ) : null}
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <Field
                                        as="input" 
                                        type="text" 
                                        name="username"
                                        id="username"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-primary focus:border-primary transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                                        autoComplete="username"
                                    />
                                </div>
                                {touched.username && errors.username ? (
                                    <div
                                        className="text-danger text-sm opacity-80"
                                    >{errors.username}</div>
                                ) : null}
                            </div>
                            <div className="mt-6">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                    Password
                                    {touched.password && errors.password ? (
                                    <span
                                        className="text-danger text-sm opacity-80"
                                    > *</span>
                                ) : null}
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <Field 
                                        as="input"
                                        type="password" 
                                        name="password"
                                        id="password"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-primary focus:border-primary transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                                        autoComplete="current-password"
                                    />
                                </div>
                                {touched.password && errors.password ? (
                                    <div
                                        className="text-danger text-sm opacity-80"
                                    >{errors.password}</div>
                                ) : null}
                            </div>
                            <div className="mt-6">
                                {
                                    isSubmitting ? (
                                        <span className="block w-full flex justify-center">
                                            <LoadingSpinner />
                                        </span>
                                    ) : (
                                        <span className="block w-full rounded-md shadow-sm">
                                            <Field
                                                as="input"
                                                type="submit" 
                                                name="commit"
                                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md transition duration-150 ease-in-out btn-primary" 
                                            />
                                        </span>
                                    )
                                }
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="mt-6 text-center text-sm leading-5">
                    <Link 
                        to="/learn-more"
                        className="font-medium focus:outline-none focus:underline transition ease-in-out duration-150 link"
                    >
                        Want to know more?
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SignUp