"use client"
import styles from "./auth.module.css"
import Link from "next/link";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import { sendLogin } from "./LoginAction"

export type LoginForm = {
    email: {
        value: string
    },
    password: {
        value: string
    },
    name: {
        value: string
    }
}


export default function AuthPage() {
    const [errorPassword, setErrorPassword] = useState(false)
    const [error, setError] = useState<Error | null >(null)
    const router = useRouter()






    const submit = async (e:FormEvent ) => {

        e.preventDefault()
        const target = e.target as typeof e.target & LoginForm
        const email = target.email.value
        const password = target.password.value
        const check = validateForm(email, password)

        if (!check) {
            setErrorPassword(true)
        }

        if (check) {
            const error = await sendLogin(email, password)
            setError(error)
            if (!error) {
                router.push("/")
            }
        }
    }

    const validateForm = (email: string, password: string ) => {
        if (!password.length || password.length < 3) {
            return false
        }
        if (email.length && password.length) {
            return true
        } else {
            return false
        }
    }







    return (
        <div className={styles.cont} >
            <Link className={styles.link} href="/">
                On Home Page
            </Link>
            <h1 className={styles.h1}>Login here</h1>
            {error && <span className={styles.error} >{error.message}</span>}
            <form className={styles.form} onSubmit={submit} >
                <label>Your Email</label>
                <input className={styles.input} name="email" type="email" placeholder="Email" />
                <label>Your Password</label>
                {errorPassword && <span className={styles.error} >Enter your password</span>}
                <input className={styles.input} name="password" type="password" placeholder="Password" />
                <button className={styles.button} type={"submit"} >
                    Sign in
                </button>
            </form>
            <Link className={styles.register} href="/auth/register" >create new account</Link>
        </div>
    )
}