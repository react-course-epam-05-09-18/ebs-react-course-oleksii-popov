import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import './editCourse.css';

class EditCourse extends Component {

    constructor(props) {
        super();
        this.course = {
            'title': 'Course 1',
            'desc': 'Intro'
        };
    }

    render() {
        return (
            <div className="EditCourse">
                <h1>Add/Edit Course</h1>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{this.course.title}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>{this.course.desc}</Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default EditCourse;