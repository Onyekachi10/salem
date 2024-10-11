import React from "react";



const Grid = () => {


    const merch = [
        { 
        type: "kit_1",
         image: "http://127.0.0.1:5500/src/images/IMG-20241007-WA0008.jpg",
         title: "Vol.3 corey",
         content: "quality Merch"
        },
     
        {
         type: "kit_2",
         image: "http://127.0.0.1:5500/src/images/salem2.jpg",
         title: "Crime scene limited edition",
         content: "quality Merch"
        },
     
        {
         type: "kit_3",
         image: "http://127.0.0.1:5500/src/images/salem.jpg",
         title: "Crime scene mask vol.2",
         content: "quality Merch"
        },
     
        {
         type: "kit_4",
         image: "http://127.0.0.1:5500/src/images/salem4.jpg",
         title: "Igala Masqurade",
         content: "quality Merch"
        },
     
        {
         type: "kit_5",
         image: "http://127.0.0.1:5500/src/images/salem1.jpg",
         title: "Edo shrine mask",
         content: "quality Merch"
        },
     
        {
         type: "kit_6",
         image: "http://127.0.0.1:5500/src/images/IMG-20241007-WA0010.jpg",
         title: "Osun Deity mask",
         content: "quality Merch"
        },
     
        {
         type: "kit_7",
         image: "http://127.0.0.1:5500/src/images/IMG-20241007-WA0007.jpg",
         title: "Holloween Joker Mask",
         content: "quality Merch"
        },
     
        {
         type: "kit_8",
         image: "http://127.0.0.1:5500/src/images/IMG-20241007-WA0011.jpg",
         title: "Half burnt clown",
         content: "quality Merch"
        }
     ]

    return (
        <div className="pt-16 font-customFont">
    <h1 className="text-center font-bold md:text-5xl text-3xl uppercase pb-3 ">Dark Art</h1>
    <div className="grid md:grid-cols-4 grid-cols-2 gap-8 px-6 py-4">
    {merch.map(({type, image, title, content})=>(
        <div key={type}>
            <div className=" py-4 px-2 border focus:outline-none hover:shadow-md cursor-pointer rounded-lg ">
            <img src={image} className=" object-contain h-fit rounded-md"/>
            <p className="font-semibold capitalize md:text-xl pt-3">{title}</p>
            <span>{content}</span>
            </div>
         
        </div>     
    ))}


</div>

        </div>
    )
}

export default Grid;