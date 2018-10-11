import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';
import {LoginForm, CourseList, EditCourse, Page404} from './components/index';
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

                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/courses">Courses</Link>
                            </li>
                            <li>
                                <Link to="/new">New course</Link>
                            </li>
                        </ul>

                        <hr/>
                        <Switch>
                            <Route exact path="/" component={LoginForm}/>
                            <Route path="/new" component={EditCourse}/>
                            <Route path="/courses/1" component={EditCourse}/>
                            <Route path="/courses/2" component={EditCourse}/>
                            <Route path="/courses/3" component={EditCourse}/>
                            <Route path="/courses" component={CourseList}/>
                            <Route component={Page404}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
