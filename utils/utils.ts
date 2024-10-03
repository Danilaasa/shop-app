import {category} from "@/api/types";
import { ReactNode } from "react";

export const CategoriesPath = {
    electronics: "electronics",
    jewelery: "jewelery",
    "men's clothing": "men",
    "women's clothing": "women"
}

export const CategoriesTitles:CategoryTitles = {
    electronics: "electronics",
    jewelery: "jewelery",
    men: "men's clothing",
    women: "women's clothing"
}

export const repeatSkeleton = (count: number, comp:ReactNode) => {
    for(let i = 0; i < count; i++) {
        return (
            comp
        )
    }
}

type CategoryTitles = Record<string, category>
