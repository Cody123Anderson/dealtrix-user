import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';

const mountNode = document.createElement('div');

document.body.appendChild(mountNode);
ReactDOM.render(<Home/>, mountNode);
