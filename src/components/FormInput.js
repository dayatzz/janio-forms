import React from "react"

class FormInput extends React.Component {
    render() {
        const {
            label,
            name,
            type,
            stateValue,
            disabled,
            small,
          } = this.props;
        return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            {
                type === 'textarea' ?
                <textarea name={name} type={type} id={name} autoComplete="off" {...this.props}>
                </textarea>
                :
                <input name={name} type={type} className="form-control" id={name} autoComplete="off" disabled={disabled} {...this.props} />
            }
            {
                typeof(small) !== 'undefined' ?
                <small id={name} className="form-text text-muted">{small}</small>:''
            }
        </div>
        )
    }
}

export default FormInput