import { useState } from 'react'
import Button from '../Button';
import DropDown from '../DropDown';
import TextArea from '../TextArea';
import './Form.css'

const Form = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')

    const saving = (event) => {
        event.preventDefault()
        props.registeredUser({
            name, position, image, time
        })
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextArea 
                    required={true} 
                    label="Nome:" 
                    placeholder="Digite seu nome"
                    value={name}
                    changed={value => setName(value)}
                />
                <TextArea 
                    required={true} 
                    label="Cargo:" 
                    placeholder="Digite o seu cargo"
                    value={position}
                    changed={value => setPosition(value)}
                />
                <TextArea  
                    label="Imagem:" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    changed={value => setImage(value)}
                />
                <DropDown 
                    required={true} 
                    label="Equipe:" 
                    itens={times}
                    value={time}
                    changed={value => setTime(value)}

                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form