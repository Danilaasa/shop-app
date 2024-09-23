import React, {FC} from "react"
import Logo from '../../public/logo-base.svg'
import classNames from "classnames";
import stylesSidebar from "./sidebar.module.css"
import { SidebarMenu } from "@/components/SidebarMenu/SidebarMenu";
import {getCategories} from "@/api/api";

export const Sidebar:FC = async () => {
    const categories = await getCategories()

    return (
        <aside className={classNames(stylesSidebar.aside)} >
            <Logo />
            <SidebarMenu categoryNames={categories} />

        </aside>
    )
}