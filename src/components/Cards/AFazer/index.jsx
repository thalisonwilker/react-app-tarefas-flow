import React from 'react'
import {Col, Card, CardHeader, CardBody, CardFooter, Button} from 'reactstrap'
import CardTarefa from '../CardTarefa'

export default class A_Fazer extends React.Component{

    constructor(props){
        super(props)

        this.fazendo = this.fazendo.bind(this)
    }

    fazendo(i){
        let tarefas = JSON.parse(window.localStorage.getItem('tarefas'))
        tarefas[i].status = 2
        window.localStorage.setItem('tarefas', JSON.stringify(tarefas))
        this.props.callback()
    }

    render(){
        return <Col lg={4} xs={12} className="mb-4">
            <Card color="secondary">
                <CardHeader>
                    A Fazer
                </CardHeader>
                <CardBody>
                    {
                        this.props.tarefas.map( (tarefa, index) => tarefa.status ==1 ? 
                        <CardTarefa
                            key={index}
                            tarefa={tarefa.tarefa}
                            click={()=>{
                                this.fazendo(index)
                            }}
                            btnColor="warning"
                            text="Fazendo"
                         />
                          : null)
                    }
                </CardBody>
            </Card>
        </Col>
    }
}