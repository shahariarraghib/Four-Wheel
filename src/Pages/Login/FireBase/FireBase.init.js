import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;