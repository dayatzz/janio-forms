import React from 'react'
import {FieldArray} from 'formik'

class FormField extends React.Component {
    render() {
        const {
            fieldName, fieldType, helpText, label, fieldOptions
        } = this.props.field
        const { disabled, handleChange, errors, touched, handleFileChange } = this.props.others

        var field = null
        if (fieldType === 'textarea') {
            field = (
            <div>
                <textarea name={fieldName} id={fieldName}
                    autoComplete="off" {...this.props} onChange={handleChange}>
                </textarea>
                {errors[fieldName] && <span className="text-danger text-error">This field is required</span>}
            </div>
            )
        } else if (fieldType === 'checkbox' || fieldType === 'radio') {
            field = (
            <div>
                <FieldArray
                    name={fieldName}
                    render={arrayHelper => (
                        <div>
                        {fieldOptions.map(o => (
                            <div key={o}>
                                <input id={o} type={fieldType} name={fieldName} value={o} {...this.props}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            arrayHelper.push(o)
                                        } else {
                                            const index =  this.props.values[fieldName].indexOf(o)
                                            arrayHelper.remove(index)
                                        }
                                    }} />
                                <label style={{marginLeft: 8}} htmlFor={o}>{o}</label>
                            </div>
                        ))}
                        </div>
                    )}>
                </FieldArray>
                {errors[fieldName] && <span className="text-danger text-error">field must have at least 1 items</span>}
            </div>
            )
        } else if (fieldType === 'select') {
            return <select className="form-control" name={fieldName} {...this.props} onChange={handleChange}>
                {fieldOptions.map(o => {
                    return <option value={o} key={o}>{o}</option>
                })}
            </select>
        } else if (fieldType === 'file') {
            field = (
                <div>
                    <input
                    name={fieldName} type={fieldType}
                    onChange={e => {
                        handleFileChange(e)
                    }}
                    className={"form-control" + ((errors[fieldName] && " is-invalid") || '')} id={fieldName}
                    autoComplete="off" disabled={disabled} {...this.props} />
                    {touched[fieldName] && errors[fieldName] && <span className="text-danger text-error">This field is required</span>}
                </div>
            )
        } else {
            field = (
            <div>
                <input
                name={fieldName} type={fieldType}
                onChange={handleChange}
                className={"form-control" + ((errors[fieldName] && " is-invalid") || '')} id={fieldName}
                autoComplete="off" disabled={disabled} {...this.props} />
                {touched[fieldName] && errors[fieldName] && <span className="text-danger text-error">This field is required</span>}
            </div>
            )
        }

        return (
        <div className="form-group">
            <label htmlFor={fieldName}>{label}</label>
            {field}
            {
                typeof(helpText) !== 'undefined' ?
                <small id={fieldName} className="form-text text-muted">{helpText}</small>:''
            }
        </div>
        )
    }
}

FormField.defaultProps = {
    disabled: false,
}

export default FormField