import TextArea from '../TextArea';
import './Form.css'

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextArea label="Nome" placeholder="Digite seu nome"/>
                <TextArea label="Cargo" placeholder="Digite o seu cargo"/>
                <TextArea label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Form