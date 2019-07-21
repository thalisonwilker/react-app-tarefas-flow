import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import Adicionar from './Add'
import AFazer from './AFazer'
import Fazendo from './Fazendo'
import Feito from './Feito'

export default class Index extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            tarefas : []
        }
    }

    componentDidMount(){
        let tarefas = JSON.parse(window.localStorage.getItem('tarefas'))
        if(!tarefas){
            tarefas = []
        }
        tarefas = tarefas.sort()
        this.setState({ tarefas})
    }

    atualizar(){
        let tarefas = JSON.parse(window.localStorage.getItem('tarefas'))
        tarefas = tarefas.sort()
        this.setState({ tarefas})
    }

    render(){
        return <section>
                <Container>
                    <Row className="py-4">
                        <Col col={12}>
                            <div className="text-center text-dark text-capitalize">
                            <h1 className="">
                                Tarefas flow
                            </h1>
                            <h2>
                                mantenha suas tarefas em ordem
                            </h2>
                            
                            </div>
                        </Col>
                    </Row>
                <Row className="pt-2">
                    <Adicionar callback={this.atualizar.bind(this)} />
                </Row>
                <Row className="text-white py-4">
                    <AFazer
                        tarefas={this.state.tarefas}
                        callback={this.atualizar.bind(this)}
                        />
                    <Fazendo
                        tarefas={this.state.tarefas}
                        callback={this.atualizar.bind(this)}
                        />
                    <Feito
                        tarefas={this.state.tarefas}
                        callback={this.atualizar.bind(this)}
                        />
                </Row>

            </Container>
        </section>
    }
}