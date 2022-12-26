import React, { useEffect} from "react";
import {useDispatch} from 'react-redux'
import ProductComponent from "./ProductComponent";
import Data from '../products.json'
import {setProducts} from '../redux/actions/productActions'


const ProductListing=()=>{


    // const products= useSelector((state)=>state);
    const dispatch=useDispatch();

   const show=()=>{
    dispatch(setProducts(Data))
   }

   useEffect(()=>{
    show();
   },[])


    return(<div>
        <h1><ProductComponent/></h1>
    </div>)

}

export default ProductListing