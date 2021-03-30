import React, { Component } from "react";
import IrpfDataService from "../services/irpf.service";


export default class AddIrpf extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.onChangeTotalSalary = this.onChangeTotalSalary.bind(this);
    this.onChangeDependentsNumber = this.onChangeDependentsNumber.bind(this);
    this.saveIrpf = this.saveIrpf.bind(this);

    this.state = {
      totalSalary: "",
      dependentsNumber: "", 
      retorno: [],
      submitted: false
    };
  }

  onChangeTotalSalary(e) {
    this.setState({
      totalSalary: e.target.value
    });
  }

  onChangeDependentsNumber(e) {
    this.setState({
      dependentsNumber: e.target.value
    });
  }

  saveIrpf() {
    var data = {
      totalSalary: this.state.totalSalary,
      dependentsNumber: this.state.dependentsNumber,
      retorno: this.state.retorno
      
    };

    IrpfDataService.create(data)
      .then(response => {
        this.setState({
          totalSalary: response.data.totalSalary,
          dependentsNumber: response.data.dependentsNumber,
          retorno: response.data,
          submitted: true
          
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  

  render() {
    const { retorno} =this.state;
    return (
      <div className="submit-form">
          <div>
            <div className="form-group">
              <label htmlFor="totalSalary">Total Salário</label>
              <input 
                type="text" 
                className="form-control"
                id="totalSalary"
                required
                value={this.state.totalSalary}
                onChange={this.onChangeTotalSalary}
                name="totalSalary"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dependentsNumber">Número Dependente</label>
              <input
                type="text"
                className="form-control"
                id="descridependentsNumberption"
                required
                value={this.state.dependentsNumber}
                onChange={this.onChangeDependentsNumber}
                name="dependentsNumber"
              />
            </div>

            <button onClick={this.saveIrpf} className="btn btn-success">
              Submit
            </button>
           
            <div >
                  <label >
                  <strong>Resultado:</strong>
                </label>{" "}
                {retorno}
            </div>
           </div>
        
      </div>
    );
  }

}
