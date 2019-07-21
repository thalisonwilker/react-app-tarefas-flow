import React from 'react'
import {Col, Card, CardHeader, CardBody} from 'reactstrap'
import CardTarefa from '../CardTarefa'

export default class Feito extends React.Component{

    constructor(props){
        super(props)

        this.remover = this.remover.bind(this)
    }

    remover(i){
        let subtarefas = []
        let tarefas = JSON.parse(window.localStorage.getItem('tarefas'))
        tarefas[i] = null
        for(let x = 0; x < tarefas.length; x++){
            if(tarefas[x]){
                subtarefas.push(tarefas[x])
            }
        }
        window.localStorage.setItem('tarefas', JSON.stringify(subtarefas))
        this.props.callback()
    }

    render(){
        return <Col lg={4} xs={12} className="mb-4">
            <Card color="success" >
                <CardHeader>
                    Feito
                </CardHeader>
                <CardBody>
                {
                    this.props.tarefas.map( (tarefa, index) => tarefa.status == 3 ? 
                    <CardTarefa
                        key={index}
                        tarefa={tarefa.tarefa}
                        click={()=>{
                            this.remover(index)
                        }}
                        btnColor="secondary"
                        text="remover"
                    />
                        : null)
                }
                </CardBody>
            </Card>
        </Col>
    }
}