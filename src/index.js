import React from 'react';
import ReactDOM from 'react-dom';
import './app.global.css';
import './themes/editor/dark.css';
import { store } from './store';
import { Root } from './components/_containers';

const test = () => { console.log('one'); console.log('another'); }

ReactDOM.render(<Root store={store }/>, document.getElementById('root'));
