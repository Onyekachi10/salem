import React from "react";

const Green = () => {

    const merch = [
        {
            type: "kit_2",
            image: "https://photo-gold.vercel.app/images/IMG-20241007-WA0008.jpg",
            title: "Vol.3 corey",
            content: "quality Merch"
           },
        
           {
            type: "kit_3",
            image: "https://photo-gold.vercel.app/images/IMG-20241007-WA0010.jpg",
            title: "Vol.3 corey",
            content: "quality Merch"
           },
        
           {
            type: "kit_4",
            image: "https://photo-gold.vercel.app/images/IMG-20241007-WA0011.jpg",
            title: "Vol.3 corey",
            content: "quality Merch"
           },
    ]

    return (
        <div className="pt-16 grid justify-center items-center font-customFont">
        <h1 className="text-center font-bold md:text-5xl text-3xl uppercase pb-3 ">Dark Art</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-6 py-4">
        {merch.map(({type, image, title, content,links})=>(
            <div key={type}>
                <div className=" py-4 px-2 border-none focus:outline-none bg-gray-200 text-black
                 hover:shadow-md cursor-pointer rounded-lg ">
                <a href={links}>
                <img src={image} className=" object-contain h-fit rounded-md"/>
                <p className="font-semibold capitalize md:text-xl pt-3">{title}</p>
                <span className="font-medium capitalize text-lg">{content}</span>
                </a>
                </div>
             
            </div>     
        ))}
    
    
    </div>
    
            </div>
    )
}

export default Green;