import './TextArea.css'

const TextArea = (props) => {
    return (
        <div className="text-area">
            <label>{props.label}</label>
            <input required={props.required} type='text' placeholder={props.placeholder}/>
        </div>
    )
}

export default TextArea