import React from 'react'
import FormSection from './FormSection'
import { Form, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';

var formData = new FormData()

const OnboardingMessage = () => {
    return (
        <div style={{ marginTop: 32 }}>
            <h1>Welcome to <a href="https://www.janio.asia/">JANIO</a>!</h1>
            <p>As part of the onboarding process, please complete this short form (it will take approx. 5 minutes).</p>
        </div>
    )
}


class DynamicForm extends React.Component {
    handleFileChange(e) {
        const file = e.currentTarget.files[0]
        formData.append('file', file)
        console.log(formData.get('file'))
    }
    
    render() {
        const { fields } = this.props
        return (
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2" style={{ paddingBottom: 64 }}>
            <OnboardingMessage />
            <Form action="">
                <input type='hidden' name="formName" value={this.props.formName} />
                {fields.map(section => {
                    return <FormSection
                        handleFileChange={this.handleFileChange.bind(this)}
                        section={section} key={section.sectionName}
                        {...this.props} />
                })}
                <button type="submit" className="btn btn-default btn-lg">Submit</button>
            </Form>
        </div>
        )
    }
}

const transformValues = (values) => {
    var data = {}
    data.formName = values.formName
    
    var answers = []
    for (var k in values) {
        if (k !== 'fields' && k !== 'formName' && k !== 'validationObjects') {
            answers.push({
                fieldName: k,
                fieldAnswer: values[k]
            })
        }
    }
    data.answers = answers
    return JSON.stringify(data)
}

const MyForm = withFormik({
    handleSubmit(values) {
        axios.post(
            'https://janio-forms-api.herokuapp.com/api/form/upload-file',
            formData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(r => {
            console.log(r)
            const data = transformValues(values)
            console.log('DATA', data)
            return axios.post(
                'https://janio-forms-api.herokuapp.com/api/form/submit-form', data,
                {headers: {'Content-Type': 'application/json'}})
        })
        .then(r => {
            console.log(r)
        })
        .catch(r => {
            console.log(r)
        })
        console.log(values)
    },
    validationSchema: (props) => (Yup.object().shape(props.validationObjects))
})(DynamicForm)

export default MyForm