import React from 'react'; //importing react from react
import ReactDOM from 'react-dom'; //seperate library, react-dom
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();  //2 arguments,2ed get the thing with the id of root, 1st what we want to render
