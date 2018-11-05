import React, { Component } from 'react'
import FormInput from "./FormInput"


const OnboardingMessage = () => {
    return (
        <div style={{ marginTop: 32 }}>
            <h1>Welcome to <a href="https://www.janio.asia/">JANIO</a>!</h1>
            <p>As part of the onboarding process, please complete this short form (it will take approx. 5 minutes).</p>
        </div>
    )
}


class JanioForm extends Component {
    render() {
        return (
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2" style={{ paddingBottom: 64 }}>
            <OnboardingMessage />
            <form style={{marginTop: 64}}>
                <div>
                    <h3>Part 1</h3>
                    <p>Please complete the fields below so we can create your JANIO account:</p>
                </div>
                <div className="card janio-card">
                    <div className="card-body">
                        <FormInput
                            name="companyName"
                            type="text"
                            label="Company Name*" required />
                        <FormInput
                            name="companyName"
                            type="email"
                            label="Company Email*"
                            small="For login into your JANIO account." required />
                    </div>
                </div>
                <div className="card janio-card" >
                    <div className="card-body">
                        <FormInput
                            label="Please let us know where you are shipping to and from*"
                            type="text"
                            small="This is just to help us understand your needs better. It can be added to, changed, or discussed later on." />
                    </div>
                </div>
                <div className="card janio-card" >
                    <div className="card-body">
                        <div className="form-group">
                            <label>How will you be submitting your orders?*</label>
                            <small className="form-text text-muted">You may select more than one option</small>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    via API integration
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    via CSV file upload and/or form submission through your JANIO dashboard
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <p>Please provide the following details regarding the company contact person:</p>
                <h5>Operations</h5>
                <div className="card janio-card">
                    <div className="card-body">
                        <FormInput
                                name="operationName"
                                type="text"
                                label="Name*" required />
                        <FormInput
                                name="operationMobileNumber"
                                type="text"
                                label="Mobile Number*" required />
                        <FormInput
                                name="operationEmail"
                                type="email"
                                label="Email*" required />
                    </div>
                </div>

                <h5>Customer Service</h5>
                <div className="card janio-card">
                    <div className="card-body">
                        <FormInput
                                name="customerServiceName"
                                type="text"
                                label="Name*" required />
                        <FormInput
                                name="customerServiceMobileNumber"
                                type="text"
                                label="Mobile Number*" required />
                        <FormInput
                                name="customerServiceEmail"
                                type="email"
                                label="Email*" required />
                    </div>
                </div>

                <h5>Finance</h5>
                <div className="card janio-card">
                    <div className="card-body">
                        <FormInput
                                name="financeName"
                                type="text"
                                label="Name*" required />
                        <FormInput
                                name="financeMobileNumber"
                                type="text"
                                label="Mobile Number*" required />
                        <FormInput
                                name="financeEmail"
                                type="email"
                                label="Email*" required />
                    </div>
                </div>

                <div>
                    <h3>Part 2</h3>
                    <p>For verification purposes, kindly upload the following:</p>
                </div>
                <div className="card janio-card">
                    <div className="card-body">
                    
                    </div>
                </div>
                <p>Once verified, you will receive an email from us containing the URL and password
                    to login to your account. You can change your password once logged in.</p>

                <button className="btn btn-primary btn-lg btn-submit">></button>
            </form>
        </div>
        )
    }
}

export default JanioForm