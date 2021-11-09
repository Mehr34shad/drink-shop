import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Global from './container/States-functions'
import App from './container/App'


render(
    <Global>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Global>
    ,
    document.getElementById('root')
);