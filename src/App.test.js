import React from 'react';
import ReactDOM from 'react-dom'; //use this to render
//import { render, screen } from '@testing-library/react';
import StarsDisplay  from './App';

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<StarsDisplay />,div);
    ReactDOM.unmountComponentAtNode(div);
})
//passed
