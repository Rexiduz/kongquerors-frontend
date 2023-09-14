import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  getDocs,
  query,
  where
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDwHjAgp7WdY75lsghkPOboULLwVSA4vEY',
  authDomain: 'kongquerors-app.firebaseapp.com',
  projectId: 'kongquerors-app',
  storageBucket: 'kongquerors-app.appspot.com',
  messagingSenderId: '690942216764',
  appId: '1:690942216764:web:ff967ae9d4213d173e1139'
}
const app = initializeApp(firebaseConfig)

export const insertAddress = async (address) => {
  try {
    const db = getFirestore(app)
    const timestamp = Timestamp.fromDate(new Date())

    const walletCol = collection(db, 'wallets')

    const q = query(walletCol, where('address', '==', address))
    const snapshot = await getDocs(q)

    if (snapshot.docs.length === 0) {
      await addDoc(walletCol, {
        address: address,
        createdAt: timestamp,
        updatedAt: timestamp
      })
    }

    return true
  } catch (error) {
    throw error
  }
}
