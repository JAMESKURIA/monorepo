/* eslint-disable react/no-unescaped-entities */

import { yupResolver } from '@hookform/resolvers/yup'
import { HookFormError } from '@mono/ui'

import {
    LoginFormValues,
    loginValidationSchema,
} from 'apps/client/rules/auth.rules'
import clsx from 'clsx'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'

type Props = {
    onSubmit: (values: LoginFormValues) => void
}

const SignIn = (props: Props) => {
    const { onSubmit } = props

    const { control, handleSubmit } = useForm<LoginFormValues>({
        mode: 'onBlur',
        resolver: yupResolver(loginValidationSchema),
    })

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                        Sign in
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account yet?
                        <Link
                            className="text-blue-600 decoration-2 hover:underline font-medium"
                            href="/?auth=%27signUp%27"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>

                <div className="mt-5">
                    <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        href="#"
                    >
                        <svg
                            className="w-4 h-auto"
                            width="46"
                            height="47"
                            viewBox="0 0 46 47"
                            fill="none"
                        >
                            <path
                                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                fill="#34A853"
                            />
                            <path
                                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                fill="#EB4335"
                            />
                        </svg>
                        Sign up with Google
                    </a>

                    <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                        Or
                    </div>

                    {/* <!-- Form --> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-y-4">
                            {/* <!-- Form Group --> */}

                            <Controller
                                name="idNo"
                                control={control}
                                render={({
                                    field: { name, value, ref, onChange },
                                    formState: { errors },
                                }) => (
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            National Id Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="email"
                                                ref={ref}
                                                value={value}
                                                onChange={onChange}
                                                className={clsx(
                                                    'py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400',
                                                    {
                                                        'border-red-500':
                                                            !!errors.idNo,
                                                    }
                                                )}
                                                aria-describedby="email-error"
                                            />
                                            <div
                                                className={clsx(
                                                    'absolute inset-y-0 right-0  items-center pointer-events-none pr-3',
                                                    { flex: !!errors.idNo },
                                                    { hidden: !errors.idNo }
                                                )}
                                            >
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <HookFormError
                                            errors={errors}
                                            name={name}
                                        />
                                    </div>
                                )}
                            />

                            {/* <!-- End Form Group --> */}

                            {/* <!-- Form Group --> */}
                            <Controller
                                name="password"
                                control={control}
                                render={({
                                    field: { name, value, ref, onChange },
                                    formState: { errors },
                                }) => (
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Password
                                            </label>
                                            <a
                                                className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                href="../examples/html/modal-recover-account.html"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <div className="relative">
                                            <input
                                                ref={ref}
                                                value={value}
                                                onChange={onChange}
                                                type="password"
                                                id="password"
                                                name="password"
                                                className={clsx(
                                                    'py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400',
                                                    {
                                                        'border-red-500':
                                                            !!errors.password,
                                                    }
                                                )}
                                                aria-describedby="password-error"
                                            />
                                            <div
                                                className={clsx(
                                                    ' absolute inset-y-0 right-0  items-center pointer-events-none pr-3',
                                                    { flex: !!errors.password },
                                                    { hidden: !errors.password }
                                                )}
                                            >
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <HookFormError
                                            errors={errors}
                                            name={name}
                                        />
                                    </div>
                                )}
                            />
                            {/* <!-- End Form Group --> */}

                            {/* <!-- Checkbox --> */}
                            <div className="flex items-center">
                                <div className="flex">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    />
                                </div>
                                <div className="ml-3">
                                    <label
                                        htmlFor="remember-me"
                                        className="text-sm dark:text-white"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            {/* <!-- End Checkbox --> */}

                            <button
                                type="submit"
                                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    {/* <!-- End Form --> */}
                </div>
            </div>
        </div>
    )
}

export default SignIn
