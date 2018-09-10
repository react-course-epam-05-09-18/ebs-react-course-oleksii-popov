import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './courseList.css';

class Courses extends React.Component {

    constructor(props) {
        super();
        this.state = {
            courses: [
                {
                    'title': 'Course 1',
                    'desc': 'Intro'
                },
                {
                    'title': '2nd Course',
                    'desc': 'basic knowledge'
                },
                {
                    'title': 'The Last course',
                    'desc': 'Jedi knowledge'
                }
            ]
        };
    }

    render() {
        return (
            <div className="Courses">
                <h1>Courses</h1>
                <ListGroup>
                    {this.state.courses.map(i => {
                        return <ListGroupItem href={i.title} header={i.title} key={i.title+'-key'} >
                            <b>{i.desc}</b>
                        </ListGroupItem>;
                    })}
                </ListGroup>
            </div>
        );
    }
}

export default Courses;