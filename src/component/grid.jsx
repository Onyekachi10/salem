import React from "react";

const Grid = () => {


    const merch = [
        { 
        type: "kit_1",
         image: "https://photo-gold.vercel.app/images/IMG-20241007-WA0007.jpg",
         title: "Vol.3 corey",
         price: "$45",
         content: "quality Merch",
         links: "/corey"
        },
     
        {
         type: "kit_2",
         image: "https://photo-gold.vercel.app/images/salem3.jpg",
         title: "Half burnt clown",
         price: "$35",
         content: "quality Merch",
         links: "/clown"
        },

        {
            type: "kit_3",
            image: "https://photo-gold.vercel.app/images/salem1.jpg",
            title: "Crime scene mask vol.2",
            price: "$35",
            content: "quality Merch",
            links: "/crime-scene-mask"
           },

     
        {
         type: "kit_4",
         image: "https://photo-gold.vercel.app/images/salem2.jpg",
         title: "Skinned Face Mask",
         price: "$25",
         content: "quality Merch",
         links: "/"
        },
     
        

        {
            type: "kit_5",
            image: "https://photo-gold.vercel.app/images/salem6.jpg",
            title: "Crime scene limited edition",
            price: "$55",
            content: "quality Merch",
            links: "/"
        }
     ]

    return (
        <div className=" font-customFont">
    <h1 className="text-center font-bold md:text-5xl text-3xl uppercase pb-3 ">Dark Art</h1>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-6 py-4">
    {merch.map(({type, image, title, content,price,links})=>(
        <div key={type}>
            <div className=" py-4 px-2 border-none focus:outline-none bg-gray-200 text-black
             hover:shadow-md cursor-pointer rounded-lg ">
            <a href={links}>
            <img src={image} className=" object-contain h-fit rounded-md"/>
            <p className="font-semibold capitalize md:text-xl pt-3">{title}</p>
              <p>{price}</p>
            <span className="font-medium capitalize text-lg">{content}</span>
            </a>
            </div>
         
        </div>     
    ))}


</div>

        </div>
    )
}

export default Grid;