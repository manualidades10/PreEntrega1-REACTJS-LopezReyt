// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, doc, getDocs, getDoc, getFirestore, query, where } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6TiSs1d03cPP0h2hJTy8ZSGPVfiwIKiY",
  authDomain: "tienda-sirmate-coderhouse.firebaseapp.com",
  projectId: "tienda-sirmate-coderhouse",
  storageBucket: "tienda-sirmate-coderhouse.appspot.com",
  messagingSenderId: "389857305966",
  appId: "1:389857305966:web:f3f60fb50e32ecc89acd7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Data Base
const db = getFirestore(app);
// console.log(db);

//Obtener productos de base de datos
export async function getProducts() {
  const response = await getDocs(collection(db, 'products'));
  const listaProds = [];
  response.forEach((doc) => listaProds.push({ id: doc.id, ...doc.data() }));
  return listaProds;
}

//Obtener productos por categoria.
export async function getCategory(categoria){
    const q = query(collection(db,'products'), where('category', '==', categoria));
    console.log(categoria);
    const querySnapshot = await getDocs(q);
    const filterProds = [];
    querySnapshot.forEach(doc => filterProds.push({id: doc.id, ...doc.data()}));
    return filterProds;
}

//Obtener producto por ID.
//  export async function getProduct(id){
//      const q = query(collection(db,'products'), where('id', '==', id));
//      const querySnapshot = await getDocs(q);
//      const filterProd = [];
//      console.log("Query snapshot:", querySnapshot);
//      querySnapshot.forEach(doc => filterProd.push({id:doc.id, ...doc.data()}));
//      console.log(filterProd);
//      return filterProd;
//  }

//  export async function getProduct(id){
//      try{
//          const q = query(collection(db, 'products'), where('ID', '==', id));
//          const querySnapshot = await getDocs(q);
//          if (!querySnapshot.empty) {
//              const productData = querySnapshot.docs[0].data();
//              return{id: querySnapshot.docs[0].id, ...productData};
//          }else{
//              console.log('Producto no encontrado');
//              return null;
//          }
//      }catch(error){
//          console.error('error al obtener productp: ' + error);
//          return null;
//      }
//  }

//Obtener producto por ID.
export async function getProduct(id){
    try {
        const docRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(docRef);
        
        if (docSnapshot.exists()) {
            return { id: docSnapshot.id, ...docSnapshot.data() };
        } else {
            console.log('Producto no encontrado');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener producto:', error);
        return null;
    }
}
