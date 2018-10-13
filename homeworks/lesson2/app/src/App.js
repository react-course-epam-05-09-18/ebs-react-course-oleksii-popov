import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {default as AppRoutes} from './routes/route.jsx';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Jumbotron>
                    <h2>Application for React course.</h2>
                    <p>
                        Oleksii Popov
                    </p>
                </Jumbotron>

                <AppRoutes />
            </div>
        );
    }
}

export default App;
