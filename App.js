
import React from "react";
import ReactDOM from 'react-dom';

const heading = React.createElement("div", { id: 'heading', xyz: 'avc' }, [React.createElement('div', { id: 'child' }, "I am child"), React.createElement('div', { id: 'child2' }, "I am child2")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
