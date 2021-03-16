import React, { Component } from 'react'
import {Button,Form,FormGroup,Label,Input,Col,FormFeedback} from 'reactstrap'


export default class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            message:"",
            touched:{
                firstname:false,
                lastname:false,
                email:false,
                message:false
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleBlur=this.handleBlur.bind(this)
    }

    handleInputChange(event){
        const target=event.target
        const value=target.type === "checkbox" ? target.checked : target.value
        const name=target.name
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        if(this.state.firstname==="" || this.state.lastname==="" ||this.state.email==="" || this.state.message==="")
        return
        console.log("Current State is :" + JSON.stringify(this.state))
        alert("Form Submitted Successfully With details:" +JSON.stringify(this.state))
        this.setState({
            firstname:"",
            lastname:"",
            email:"",
            message:"",
            touched:{
                firstname:false,
                lastname:false,
                email:false,
                message:false
            }
        })
        event.preventDefault()
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })
    }
    validate(firstname,lastname,email){
        const errors={
            firstname:"",
            lastname:'',
            email:''
        }
        if(this.state.touched.firstname && firstname.length<3)
        errors.firstname="First Name should b egreater than 3 characters"
        else if ( this.state.touched.firstname && firstname.length >10 )
        errors.firstname="First Name should be less than 10 characters"

        if(this.state.touched.lastname && lastname.length<3)
        errors.lastname="Last Name should be greater than 3 characters"
        else if ( this.state.touched.lastname && lastname.length >10 )
        errors.lastname="Last Name should be less than 10 characters"

        if (this.state.touched.email && email.split('').filter(x=> x==='@').length!==1)
        errors.email="Email Shuold Contain a @ character"

        return errors
    }
    
    render() {
        const errors=this.validate(this.state.firstname,this.state.lastname,this.state.email)
        return (
            <div className="container">
                <div className="row">
                    <h3>Say Hello</h3>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <Form>
                        <FormGroup row className="mb-2">
                            <Label htmlFor="firsname" md={2}>First Name</Label>
                            
                            <Col md={10}>
                                <Input type="text" id="firstname" name='firstname'
                                placeholder="Enter Your first Name" value={this.state.firstname}
                                onChange={this.handleInputChange} 
                                valid = {errors.firstname === ''}
                                invalid =  {errors.firstname !== ''}                              required   
                                onBlur={this.handleBlur('firstname')} />
                            <FormFeedback>{errors.firstname}</FormFeedback>
                            
                            </Col>
                        </FormGroup>

                        <FormGroup row className="mb-2">
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name='lastname'
                                placeholder="Enter Your Last Name" value={this.state.lastname}
                                 onChange={this.handleInputChange}
                                 valid = {errors.lastname === ''}
                                 invalid =  {errors.lastname !== ''}                             required      
                                 onBlur={this.handleBlur('lastname')} />
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row className="mb-2">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name='email'
                                placeholder="Enter Your Email" value={this.state.email}
                                 onChange={this.handleInputChange}
                                 valid = {errors.email === ''}
                                 invalid =  {errors.email !== ''}                             required      
                                 onBlur={this.handleBlur('email')} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row> 
                            <Label htmlFor="message" md={2}>Your Message</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name='message' rows="12"
                                placeholder="Enter Your Feedback" value={this.state.message}
                                required
                                onChange={this.handleInputChange}  />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:3,offset:2}}>
                                <Button type="submit" onClick={this.handleSubmit} 
                                className="mt-2 mb-2"
                                color="primary">
                                    Send Message
                                </Button>
                            </Col>
                        </FormGroup>
                        </Form>
                    </div>

                </div>
                

            </div>
        )
    }
}
