"use client"
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import House from "../../public/house.svg"
import styles from "./SidebarMenu.module.css"
import {FC} from "react";
import { category } from "@/api/types";
import Link from "next/link";
import {CategoriesPath} from "@/utils/utils";
import classNames from "classnames";
import {usePathname} from "next/navigation";
import Category from "../../public/category.svg"


interface ISidebarMenu {
    categoryNames: category[]
}


export const SidebarMenu:FC<ISidebarMenu> = ({ categoryNames }) => {
    const pathanme = usePathname()

    return (
        <Sidebar>
            <Menu>
                <MenuItem component={
                        <Link  href="/" className={classNames(styles.link_text, {
                           [styles.active]: pathanme === "/"
                        })} >
                            Home
                        </Link>
                    }
                >
                    <div className={classNames(styles.link, {
                        [styles.active_svg]: pathanme === "/"
                    })} >
                        <House />
                        <span className={classNames(styles.link_text, {
                            [styles.active]: pathanme === "/"
                        })} >Home</span>
                    </div>

                </MenuItem>
                <SubMenu label={<div className={classNames(styles.link, {
                    [styles.category_active_svg]: pathanme.startsWith("/category")
                })} >
                    <Category />
                    <span className={styles.link_text} >Categories</span>
                </div>} >
                    {categoryNames.map((category: category) => {
                        return (
                            <MenuItem className={classNames(styles.category_link)} component={<Link href={`/category/${CategoriesPath[category]}`} />} key={category} > {category} </MenuItem>
                        )
                    })}
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}