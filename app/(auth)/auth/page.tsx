"use client"
import styles from "./auth.module.css"
import Link from "next/link";
import {FormEvent, useState} from "react";
import axios, {AxiosError} from "axios";
import Cookies from "js-cookie"
import { JWT } from "@/api/types";
import {useRouter} from "next/navigation";

export type LoginForm = {
    email: {
        value: string
    },
    password: {
        value: string
    }
}


export default function AuthPage() {
    const [errorsEmail, setErrorsEmail] = useState(false)
    const [errorsPassword, setErrorsPassword] = useState(false)
    const [auth, setAuth] = useState(false)
    const router = useRouter()


    const submit = async (e:FormEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & LoginForm
        const email = target.email.value
        const password = target.password.value
        const check = validateForm(email, password)

        if (check) {
            await sendLogin(email, password)
        }
    }

    const validateForm = (email: string, password: string ) => {
        if (!email.length) {
            setErrorsEmail(true)
        } else {
            setErrorsEmail(false)
        }
        if (!password.length) {
            setErrorsPassword(true)
        } else {
            setErrorsPassword(false)
        }
        if (email.length && password.length) {
            return true
        } else {
            return false
        }
    }


    const sendLogin = async (email: string, password: string) => {
        try {
            setErrorsEmail(false)
            setErrorsPassword(false)
            setAuth(false)
            const { data } = await axios.post<JWT>("https://purpleschool.ru/pizza-api-demo/auth/login", {
                email,
                password
            })
            Cookies.set("JWT", data.access_token, { expires: 7 })
            router.push("/")
        } catch (e){
            if (e instanceof AxiosError && e.status === 401) {
                setAuth(true)
            }
        }

    }


    return (
        <div className={styles.cont} >
            <Link className={styles.link} href="/">
                On Home Page
            </Link>
            <h1 className={styles.h1}>Login here</h1>
            <form className={styles.form} onSubmit={submit} >
                <label>Your Email</label>
                {auth && <span className={styles.error} >Invalid login or password</span>}
                {errorsEmail && <span className={styles.error} >Enter your email </span>}
                <input className={styles.input} name="email" type="email" placeholder="Email" />
                <label>Your Password</label>
                {errorsPassword && <span className={styles.error} >Enter your password</span>}
                <input className={styles.input} name="password" type="password" placeholder="Password" />
                <button className={styles.button} type={"submit"} >
                    Sign in
                </button>
            </form>
            <Link className={styles.register} href="/auth/register" >create new account</Link>
        </div>
    )
}