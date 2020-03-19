import React, { Component } from "react";
import api from "../../services/api"
import api2 from "../../services/api2"
import api3 from "../../services/api3"
import "./styles.css";

export default class Main extends Component {

    state = {
        apiUm: [],
        apiDois: [],
        apiTres: [],
    }


    componentDidMount() {
        this.dados();
    }

    dados = async() => {
        const response = await api.get('/')
        const response2 = await api2.get('/')
        const response3 = await api3.get('/')

        this.setState({ apiUm:      response.data})
        this.setState({ apiDois:    response2.data})
        this.setState({ apiTres:    response3.data})

        //console.log(response2)
    }

    render() {
    return (
        <html>
            <div className="Resultados">

                <div className="casos-suspeitos">
                    Casos Suspeitos: {this.state.apiUm.suspiciousCases}
                </div>      

                <div className="testado-n-infectado">
                    Testados Sem Infecção: {this.state.apiUm.testedNotInfected}
                </div>    

                <div className="infectados">
                    Infectados: {this.state.apiUm.infected}
                </div>    

                <div className="curados">
                    Curados: {this.state.apiUm.deceased}
                </div>                                     

                <div className="mortes">Mortes: {this.state.apiTres.deaths}</div>                                             
            </div>
        </html>
        
        
    )
    }
}