/* eslint-disable react/jsx-pascal-case */
import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem, Col, Label, Button, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,Errors,Form} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const validNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); 

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Form submitted\n"+ JSON.stringify(values));
        this.props.postFeedback(values.firstname,values.lastname, values.telnum, values.email,
            values.agree, values.contactType, values.message);
        this.props.resetFeedbackForm();
    }

    render() {

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1 mt-2">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="skype.com"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 mb-2">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">

                    <Form model='feedback' onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,maxLength : maxLength(15), minLength : minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model = ".firstname"
                                        show="touched"
                                        messages={{
                                            required:'Required Field ',
                                            maxLength : 'Must be less than 15 charcters',
                                            minLength : 'Must be greater than 2 charcters'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,maxLength : maxLength(15), minLength : minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model = ".lastname"
                                        show="touched"
                                        messages={{
                                            required:'Required Field ',
                                            maxLength : 'Must be less than 15 charcters',
                                            minLength : 'Must be greater than 2 charcters'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required,maxLength : maxLength(15), minLength : minLength(3),validNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model = ".telnum"
                                        show="touched"
                                        messages={{
                                            required:'Required Field ',
                                            maxLength : 'Must be less than 15 charcters',
                                            minLength : 'Must be greater than 2 charcters',
                                            validNumber : 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model = ".email"
                                        show="touched"
                                        messages={{
                                            required:'Required Field ',
                                            validEmail : 'Must be a valid email'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check for="agree">
                                            <Control.checkbox model=".agree" name="agree" id="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control component="select" model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Select</option>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control component="textarea" model=".message" id="message" name="message"
                                        rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;