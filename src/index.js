import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './firebase';
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './firebase';

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig} >
    <Suspense fallback={'Conectando a la App'}>
      <App />
    </Suspense>
  </FirebaseAppProvider>
), document.getElementById('app'));
