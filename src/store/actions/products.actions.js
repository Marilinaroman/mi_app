import {FIREBASE_REALTIME_DB_URL} from '../../constants/firebase'
import { productTypes } from '../types/products.types' 

const {ADD_PRODUCTS} = productTypes

export const addProducts = (products)=>({
    type: ADD_PRODUCTS,
    item: products
})