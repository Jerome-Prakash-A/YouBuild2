// import {addDoc, collection, doc, Firestore, getDocs, onSnapshot, QuerySnapshot, setDoc} from 'firebase/firestore';
// import { db } from './config';

// const UserData = () => {
//     // all data of users
//     getDocs(collection(db, 'users')).then(docSnap => {
//         let users = [];
//         docSnap.forEach((doc) => {
//             users.push({ ...doc.data(), id: doc.id})
//         });
//         console.log("Documnet Data:", users);
//     })
// }

// export default UserData