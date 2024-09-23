"use client"
import Cookies from "js-cookie";
import {redirect} from "next/navigation";

export default function Basket() {
    return (
        Cookies.get("JWT")?.length
            ?
            <div>
                <h1>Basket</h1>
            </div>
            : redirect("/auth")
    )
}