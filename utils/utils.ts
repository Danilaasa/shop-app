import {category} from "@/api/types";

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

type CategoryTitles = Record<string, category>
