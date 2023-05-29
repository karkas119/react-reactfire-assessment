import { getFirestore} from 'firebase/firestore';
import {FirestoreProvider, useFirebaseApp} from 'reactfire';

import {MainComponent} from './components/MainComponent/MainComponent';

function App() {
    const firestoreInstance = getFirestore(useFirebaseApp());
    return (
        <FirestoreProvider sdk={firestoreInstance}>
            <div className="App">
                <MainComponent/>
            </div>
        </FirestoreProvider>
    );
}

export default App;
