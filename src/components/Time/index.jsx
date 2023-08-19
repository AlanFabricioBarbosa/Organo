import './Time.css'

const Time = (props) => {
    const stylesPrimaryColor = { borderColor: props.primaryColor }
    const stylesSecondaryColor = { backgroundColor: props.secondaryColor }

    return (
        <section className="time" style={stylesSecondaryColor}>
            <h3 style={stylesPrimaryColor}>{props.name}</h3>
        </section>
    )
}

export default Time