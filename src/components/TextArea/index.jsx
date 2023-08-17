import './TextArea.css'

const TextArea = (props) => {


    const typing = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className="text-area">
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.required} type='text' placeholder={props.placeholder}/>
        </div>
    )
}

export default TextArea

