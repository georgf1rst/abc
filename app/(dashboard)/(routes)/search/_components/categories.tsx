"use client";

import { Category } from "@prisma/client";
import {
    FcMultipleDevices,
    FcSportsMode,
} from "react-icons/fc";
import { IconType } from "react-icons"

import {
    FaCss3,
    FaHtml5,
} from "react-icons/fa"

import {
    SiMongodb,
    SiMysql,
    SiPostgresql,
} from "react-icons/si"
import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Computer Science": FcMultipleDevices,
    "CSS": FaCss3,
    "Mongo DB": SiMongodb,
    "HTML": FaHtml5,
    "MySQL": SiMysql,
    "PostgreSQL": SiPostgresql,
};

export const Categories = ({
    items,
}: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item)=> (
                <CategoryItem
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
    )
}