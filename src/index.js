import React from 'react';
import ReactDOM from 'react-dom';
import SevenOne from './7-1-General_Concepts_and_Criteria.js';


require('./css/style.css');


class App extends React.Component {
    constructor(props)  {
        super(props);

    }

    render()  {
        return(
            <div>
                Hello World
                <SevenOne />
            </div>
        );
    }
}


const app = document.getElementById('app');

ReactDOM.render(<App />, app );
