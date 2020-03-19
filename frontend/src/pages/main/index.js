import React, { Component } from "react";
import api from "../../services/api"
import api3 from "../../services/api3"
import "./styles.css";

export default class Main extends Component {

    state = {
        apiUm: [],
        apiTres: [],
    }


    componentDidMount() {
        this.dados();
    }

    dados = async() => {
        const response = await api.get('/')

        const response3 = await api3.get('/')

        this.setState({ apiUm: response.data})
        this.setState({ apiTres: response3.data})

        console.log(response)
    }

    render() {
    return (
        <html>
            <div className="casos-suspeitos">Casos Suspeitos: {this.state.apiUm.suspiciousCases}</div>
            <div className="testado-n-infectado">Testados Sem Infecção: {this.state.apiUm.testedNotInfected}</div>
            <div className="infectados">Infectados: {this.state.apiUm.infected}</div>
            <div className="curados">Curados: {this.state.apiUm.deceased}</div>
            <div className="mortes">Mortes: {this.state.apiTres.deaths}</div>

        </html>
        
        
    )
    }
}