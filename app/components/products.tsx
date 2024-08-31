import Card from "./Card";

export default function ProductsList(){
let productsData:{description:string,url:string,price:string}[]=[
    {
    url:"./products/green-orchid-plant-cropped.jpg",
    description:"2 months old green orchid plant; pot included",
    price:"$120.00"
    },{
        url:"./products/redCactus.jpg",
        description:"1 month old red cactus with pot",
        price:"$20.00"
    },{
        url:"./products/tomato-plant.jpg",
        description:"Red tomatoes 4 months grown",
        price:"$100.00"
    },{
        url:"./products/2-months-old-aloevera.jpg",
        description:"2 months old aloevera; pot included",
        price:"$100.00"
    },{
        url:"./products/succulent-plant.jpg",
        description:"2 months old green succelent plant",
        price:"$60.00"
    },{
        url:"./products/yellow-rose-plant.jpg",
        description:"3 weeks old yellow rose plant; pot included",
        price:"$70.00"
    },{
        url:"./products/moneyPlant.jpg",
        description:"3 months old money plant; pot included",
        price:"$150.00"
    },{
        url:"./products/2-months-old-aloevera.jpg",
        description:"4 months old aloevera; pot included",
        price:"$160.00"
    }
]


    return(
        <>
        <div className="main bg-gray-100 px-5 py-8">
            <div className="headings w-full px-8 py-7">
                <h2 className="text-gray-900 font-bold text-4xl">Featured flora</h2>
                <p className="mt-3 text-gray-700 font-medium">Some plants for you, handpicked by the team!</p>
            </div>
            <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-8">
           {
            productsData.map((ele,i)=>(
                
                <Card description={ele.description} url={ele.url} price={ele.price} key={i}/>
               
            ))
           }
            </div>
           
        </div>
        
        </>
    )
}