import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toolbar from './components/toolbar/Toolbar';
import ControlsContainer from './components/controlsContainer/controlsContainer';
import PlayingField from './components/playingField/PlayingField';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Toolbar />, document.getElementById('toolbar'));
ReactDOM.render(<ControlsContainer />, document.getElementById('controlsContainer'));
ReactDOM.render(<PlayingField />, document.getElementById('playingField'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
