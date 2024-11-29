"use server"
import axios, {AxiosError} from "axios";
import {JWT} from "@/api/types";
import {cookies} from "next/headers";

export const sendLogin = async (email: string, password: string) => {
    try {
        const data = await axios.post<JWT>("https://purpleschool.ru/pizza-api-demo/auth/login", {
            email,
            password
        })
        cookies().set("session", `Bearer ${data.data.access_token}`, { httpOnly: true, secure: true, sameSite: 'lax', path: "/", expires: new Date(Date.now() + 24 * 60 * 60 * 1000) })
    } catch (e){
        if (e instanceof AxiosError && e.status === 401) {
            return e.response?.data
        }
    }

}