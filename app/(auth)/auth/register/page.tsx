"use client"
import styles from "./register.module.css"
import Link from "next/link";
import {FormEvent, useState} from "react";
import {LoginForm} from "@/app/(auth)/auth/page";
import { useRouter } from "next/navigation";
import {sendRegiser} from "@/app/(auth)/auth/register/RegiserAction";

export default function AuthPage() {
    const [formErrors, setFormErrors] = useState(false)
    const [error, setError] = useState<null | Error>(null)
    const router = useRouter()

    const submit = async (e:FormEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & LoginForm
        const email = target.email.value
        const password = target.password.value
        const name = target.name.value
        const check = validateForm(email, password)
        if (!check) {
            setFormErrors(true)
        }
        if (check) {
            const error = await sendRegiser(email, password, name)
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
        <div className={styles.cont}>
            <Link className={styles.link} href="/">
                On Home Page
            </Link>
            <h1 className={styles.h1}>Create account</h1>
            { formErrors && <span className={styles.error}>Error </span>}
            { error && <span className={styles.error}>{error.message} </span>}
            <form className={styles.form} onSubmit={submit}>
                <label>Your Email</label>
                <input className={styles.input} name="email" type="email" placeholder="Email"/>
                <label>Your Name</label>
                <input className={styles.input} required name="name" type="text" placeholder="Your Name"/>
                <label>Your Password</label>
                <input className={styles.input} name="password" type="password" placeholder="Password"/>
                <button className={styles.button} type={"submit"}>
                    Sign up
                </button>
            </form>
            <Link className={styles.register} href="/auth">Already have an account</Link>
        </div>
    )
}