import { useEffect, useState } from "react";
import axios from 'axios';

export default function useBookings() {

    const [allBookings, setAllBookings] = useState(null);
    function getAllBookings() {
        axios.get(`http://localhost:5000/bookings/all`)
            .then(({ data }) => setAllBookings(data));
    }
    useEffect(getAllBookings, []);



    const [cart, setCart] = useState([]);
    console.log(cart);

    // load cart from local storage
    useEffect(() => getCartItemsOnLoad(), []);
    async function getCartItemsOnLoad() {
        const dbJSON = localStorage.getItem('cart-bookings');
        if (!dbJSON) { setCart([]) }
        else {
            const savedDB = JSON.parse(dbJSON);
            const productIDs = Object.keys(savedDB).map(id => parseInt(id));
            const result = await axios.post('http://localhost:5000/placesByID', productIDs);
            const { data } = result;
            // add products depending on the number of savedDB
            const cartItems = [];
            for (const place of data) {
                // if any product has been added to cart more than once then push that product into cartItems array more than once
                for (let i = 0; i < savedDB[place.placeID]; i++) {
                    cartItems.push(place);
                }
            }
            setCart(cartItems);
            console.log(cartItems)
        }
    }

    // add to cart
    const addToCart = (place) => {
        const newCart = [...cart, place];
        updateCart(newCart);
    }

    // remove all bookings of a place
    const removeItems = (place) => {
        const newCart = cart.filter(p => p.placeID !== place.placeID);
        updateCart(newCart);
    }
    // remove one booking
    const removeItem = (place) => {
        const newCart = [...cart];
        newCart.filter(p => p.placeID === place.placeID).length > 1 &&
            newCart.splice(newCart.indexOf(place), 1);
        updateCart(newCart);
    }


    function updateCart(newCart) {
        setCart(newCart); updateLocalDB(newCart);
    }
    // save to local storage
    function updateLocalDB(newCart) {
        const productIDs = newCart.map(product => product.placeID);
        let DB = {};
        productIDs.forEach(id => {
            DB[id] = productIDs.filter(i => i === id).length; // filter how many times one product has been added
        });
        localStorage.setItem('cart-bookings', (JSON.stringify(DB)));
    }


    return {
        allBookings, setAllBookings,
        cart, setCart, addToCart, removeItems, removeItem
    }
}