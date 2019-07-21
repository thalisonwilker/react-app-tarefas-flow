import React from 'react'
import {Col, Input, Button} from 'reactstrap'

export default class Add extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
    }

    add(){
        let tarefas = []

        tarefas = JSON.parse(window.localStorage.getItem('tarefas'))

        if(!tarefas){
            tarefas = []
        }

        tarefas.push({
            'tarefa': this.state.input,
            'status': 1
        })

        window.localStorage.setItem('tarefas', JSON.stringify(tarefas))
        this.props.callback()
        this.setState({
            input: ''
        })
    }

    render(){
        return <Col col={12}>
            <Input
                onKeyPress={ evt => {
                    if(evt.key === 'Enter'){
                        this.add()
                    }
                }}
                value={this.state.input}
                onChange={ evt =>{
                    this.setState({
                        input: evt.target.value
                    })
                } }
                type="text" 
                placeholder="Nova tarefa"
                className="w-75 d-inline"
                ></Input>
            <Button
            disabled={this.state.input.length < 5}
            onClick={this.add.bind(this)} className="ml-2">
                Adicionar
            </Button>
        </Col>
    }
}