"use client"
import styles from "./register.module.css"
import Link from "next/link";
import {FormEvent, useState} from "react";
import {LoginForm} from "@/app/(auth)/auth/page";


export default function AuthPage() {
    const [errorsEmail, setErrorsEmail] = useState(false)
    const [errorsPassword, setErrorsPassword] = useState(false)

    const submit = (e:FormEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & LoginForm
        const email = target.email.value
        const password = target.password.value
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
    }

    return (
        <div className={styles.cont} >
            <Link className={styles.link} href="/">
                On Home Page
            </Link>
            <h1 className={styles.h1}>Create account</h1>
            <form className={styles.form} onSubmit={submit} >
                <label>Your Email</label>
                {errorsEmail && <span className={styles.error} >Enter your email </span>}
                <input className={styles.input} name="email" type="email" placeholder="Email" />
                <label>Your Password</label>
                {errorsPassword && <span className={styles.error} >Enter your password </span>}
                <input className={styles.input} name="password" type="password" placeholder="Password" />
                <button className={styles.button} type={"submit"} >
                    Sign up
                </button>
            </form>
            <Link className={styles.register} href="/auth" >Already have an account</Link>
        </div>
    )
}