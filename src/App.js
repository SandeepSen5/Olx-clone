import { Firebase } from './firebase/config';
import { getFirestore, collection, deleteDoc,updateDoc, doc } from 'firebase/firestore';
import './App.css';

function App() {
  const handleClick = async () => {
    const firestore = getFirestore(Firebase);
    const collectionRef = collection(firestore, 'product');

    try {
      const updatedData = { price: 15000 };
      await updateDoc(doc(collectionRef, 'NG4Z9dBWAoswMCRzZykm'), updatedData);
      console.log('Document updated successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
