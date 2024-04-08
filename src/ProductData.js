// import {addDoc, collection, doc, Firestore, getDocs, onSnapshot, QuerySnapshot, setDoc} from 'firebase/firestore';
// import { useState } from 'react';
// import { db } from '../config';



// function ProuctData () {

//     const [productsData, setproductsData]= useState([]);

//     // all data of products
//     getDocs(collection(db, 'products')).then(docSnap => {
//         let products = [];
//         docSnap.forEach((doc) => {
//             products.push({ ...doc.data(), id: doc.id})
//         });
//         setproductsData(products);
//     })

//     return(productsData);
// }


// export default ProuctData