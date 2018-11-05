import React, { Component } from 'react'
import axios from 'axios'

import Banner from "./components/Banner"
// import JanioForm from "./components/JanioForm"
import MyForm from './components/DynamicForm'
import * as Yup from 'yup'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: null,
      validationObjects: {},
      formName: null,
      formLoaded: false,
    }
  }

  componentDidMount() {
    let validationObjects = {}

    axios.get('https://janio-forms-api.herokuapp.com/api/form/render-form')
      .then(r => {
        let fields = r.data[0].fields

        fields.map(section => {
          section.fields.map(field => {
            var validator
            if (field.fieldType === 'email') {
              validator = Yup.string().email().required()
            } else if (field.fieldType === 'text' || field.fieldType === 'textarea') {
              validator = Yup.string().required()
            } else if (field.fieldType === 'number') {
              validator = Yup.number().required()
            } else if (field.fieldType === 'checkbox') {
              validator = Yup.array().min(1).required()
            } else if (field.fieldType === 'file') {
              validator = null
            }
            if (validator) {
              validationObjects[field.fieldName] = validator
            }
          })
        this.setState({ validationObjects, formLoaded: true, formName: r.data[0].formName, fields })
      })
      })
  }
  
  render() {
    return (
      <div>
        <Banner />
        {this.state.formLoaded ? <MyForm formName={this.state.formName} fields={this.state.fields}
          validationObjects={this.state.validationObjects} /> : <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;
