import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
// application components
import {LoginForm, CourseList, EditCourse} from './components/index';
// application common styles
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

            <section>
                <LoginForm/>
            </section>
            <section>
                <CourseList/>
            </section>
            <section>
                <EditCourse/>
            </section>
        </div>
    );
  }
}

export default App;
