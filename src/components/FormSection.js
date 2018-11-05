import React from 'react'
import FormField from './FormField'

class FormSection extends React.Component {
    render() {
        return (
        <div className="card janio-card">
            <div className="card-body">
                {this.props.section.fields.map(field => {
                return <FormField
                    field={field} key={field.fieldName}
                    others={{...this.props}} />
                })}
            </div>
        </div>
        )
    }
}

export default FormSection