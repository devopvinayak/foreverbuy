import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency ='$';
    const delivery_fee = 10;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)

    // State Variable to update cart
    const [cart, setCart] = useState({})

    const navigate = useNavigate()

    const addToCart = async (itemId,size) =>{

        if (!size) {
           toast.error('Please Select product size')
            return 
        }

        let cartData = structuredClone(cart);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] =1;
        }

        setCart(cartData);
    }

    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cart){
            for(const item in cart[items]){
                try {
                    if (cart[items][item]>0) {
                      totalCount += cart[items][item] 
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) =>{
        let cartData = structuredClone(cart);

        cartData[itemId][size] = quantity;

        setCart(cartData)
    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cart){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cart[items]){
                try {
                    if (cart[items][item]>0) {
                     totalAmount += itemInfo.price*cart[items][item]   ;
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cart, addToCart, getCartCount, updateQuantity,getCartAmount,navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;