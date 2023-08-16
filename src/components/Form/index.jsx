import Button from '../Button';
import DropDown from '../DropDown';
import TextArea from '../TextArea';
import './Form.css'

const Form = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const saving = (event) => {
        event.preventDefault()
        console.log("Formulario foi submetido")
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextArea required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextArea required={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <TextArea label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropDown required={true} label="Time" itens={times}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form