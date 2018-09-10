import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './App.css';
import LoginForm from './components/login/login.js';
import CourseList from './components/course/courseList/courseList.js';
import EditCourse from './components/course/editCourse/editCourse.js';

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
