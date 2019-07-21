import React from 'react'
import {Col, Card, CardHeader, CardBody} from 'reactstrap'
import CardTarefa from '../CardTarefa'

export default class Fazendo extends React.Component{
    constructor(props){
        super(props)

        this.feito = this.feito.bind(this)
    }

    feito(i){
        let tarefas = JSON.parse(window.localStorage.getItem('tarefas'))
        tarefas[i].status = 3
        window.localStorage.setItem('tarefas', JSON.stringify(tarefas))
        this.props.callback()
    }

    render(){
        return <Col lg={4} xs={12} className="mb-4">
            <Card color="warning">
                <CardHeader>
                    Fazendo
                </CardHeader>
                <CardBody>
                {
                    this.props.tarefas.map( (tarefa, index) => tarefa.status == 2 ? 
                    <CardTarefa
                        key={index}
                        tarefa={tarefa.tarefa}
                        click={()=>{
                            this.feito(index)
                        }}
                        btnColor="success"
                        text="feito"
                    />
                        : null)
                }
                    </CardBody>
            </Card>
        </Col>
    }
}