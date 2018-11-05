import React from 'react'


const FormFieldText = ({
    fieldName, fieldType, handleChange, errors, touched
}) => {
    return (
        <div>
            <input
            name={fieldName} type={fieldType}
            onChange={handleChange}
            className={"form-control" + ((errors[fieldName] && " is-invalid") || '')} id={fieldName}
            autoComplete="off" />
            {touched[fieldName] && errors[fieldName] && <span className="text-danger text-error">This field is required</span>}
        </div>
    )
}

export default FormFieldText