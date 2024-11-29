"use server"
import axios, {AxiosError} from "axios";
import {JWT} from "@/api/types";
import {cookies} from "next/headers";

export const sendRegiser = async (email: string, password: string, name:string) => {
    try {
        const data = await axios.post<JWT>("https://purpleschool.ru/pizza-api-demo/auth/register", {
            email,
            name,
            password
        })
        console.log(data)
        cookies().set("session", `Bearer ${data.data.access_token}`, { httpOnly: true, secure: true, sameSite: 'lax', path: "/", expires: new Date(Date.now() + 24 * 60 * 60 * 1000) })
    } catch (e){
        if (e instanceof AxiosError && e.status === 401) {
            console.log(e)
            return e.response?.data
        }
    }

}