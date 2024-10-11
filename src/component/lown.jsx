import React from 'react';
const Lown = () => {

    const merch = [
        {
            type: "kit_1",
            image: "https://photo-gold.vercel.app/images/salem8.jpg",
            title: "Crime scene limited edition",
            content: "quality Merch"
           },
        
           {
            type: "kit_2",
            image: "https://photo-gold.vercel.app/images/salem3.jpg",
            title: "Crime scene limited edition",
            content: "quality Merch"
           },
        
           {
            type: "kit_3",
            image: "https://photo-gold.vercel.app/images/salem7.jpg",
            title: "Crime scene limited edition",
            content: "quality Merch"
           }
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

export default Lown;