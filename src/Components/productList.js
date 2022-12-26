import React from "react";
import Data from '../products.json'

const ProductList =()=>{


    const Datas = Data.map((info)=>{

            return(

                <div className="box" key={info.id}>

                    <h2>{info.productName}</h2>

                    <img className="image" src={info.image} alt=""/><br/>

                    <span>{info.brandName}</span>

                    

                    <button>Add To Cart</button>

                </div>

            )

        }

    )
    return(
        <div>
        {Datas}
        </div>
    )
}




export default ProductList;