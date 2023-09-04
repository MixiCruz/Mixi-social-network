import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "./firebaseConfig";

// Add a new document in collection "cities"

export const createPost = (texto) => {
  return addDoc(collection(db, 'post'), {
    correo: auth.currentUser.email,
    texto: texto
  });
}

export const getPost = async () => {
  const savePost = [];
  const querySnapshot = await getDocs(collection(db, 'post'));
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    savePost.push({ ...doc.data(), id: doc.id});
    console.log(doc.id, " => ", doc.data());
});
  return savePost;
};

export const deletePost = (id) => {
  return deleteDoc(doc(db, 'post', id));
};