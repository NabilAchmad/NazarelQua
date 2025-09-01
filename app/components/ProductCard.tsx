// components/ProductCard.tsx
"use client";

import Image from "next/image";

interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    image: string;
}

export default function ProductCard({ name, description, price, image }: ProductCardProps) {
    return (
        <div className="border rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
            <Image src={image} alt={name} width={200} height={200} className="rounded-xl" />
            <h2 className="text-lg font-bold mt-2">{name}</h2>
            <p className="text-sm text-gray-600 mt-1 text-center">{description}</p>
            <p className="text-blue-600 font-semibold mt-2">{price}</p>
        </div>
    );
}
