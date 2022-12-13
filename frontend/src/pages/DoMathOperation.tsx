import React, { useState, useRef } from "react";
import Select from "react-select"
import axios from "axios";
import { touchRippleClasses } from "@mui/material";


export default class DoMathOperation extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state= {
            operations:[],
            name: null
        };
        this.state ={operand1:0, operand2:0, operation :"", result: 0};
        this.handleChangeOperation = this.handleChangeOperation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeOperand1 =  this.handleChangeOperand1.bind(this);
        this.handleChangeOperand2 = this.handleChangeOperand2.bind(this);
    }
    handleChangeOperation(e:any){
        this.setState({
            operation: e.target.value
        });
    }
    handleChangeOperand1(e:any){
        this.setState({
            operand1: e.target.value
        });
    }
    handleChangeOperand2(e:any){
        this.setState({
            operand2: e.target.value
        });
    }
    onSubmit(e:any){
        e.preventDefault();
        const operation = {
            operand1: this.state.operand1,
            operand2: this.state.operand2,
            operation: this.state.operation
        };
        axios.post("http://localhost:8080/api/v1/do_math", operation).then(res=>{
            if(res.status ===200){
                alert("Operation done successfully");
                this.setState({
                    result: res.data
                });
            }
        });
        this.setState({
            operand1: "",
            operand2: "",
            operation: ""
        })
        const [options, setOptions] = useState([""]);

        
    }
    render(){
        return(
            <div className="container">
                <div className="form-container">
                    <h1 className="title">Carry out operation</h1>
                    <form>
                    <div className="form-field">
                            <label className="labels">Operand 1: </label>
                            <input id="operand1" className="input-field number" type={"text"} placeholder={"Enter first operand"} value={this.state.operand1} onChange = {this.handleChangeOperand1} required/>
                        </div>
                        <div className="form-field">
                            <label className="labels">Operand 2:</label>
                            <input id="operand2"  className="input-field number" type={"text"} placeholder={"Enter second operand"} value={this.state.operand2} onChange = {this.handleChangeOperand2} required />
                        </div>
                    <div className="form-field">
                            <label className="labels">Operation: </label>
                            <Select 
                                options={["*", "+", "-", "/", "**", "log", "ln"]}
                                onChange={this.handleChangeOperation}
                            />
                        </div>

                        <input type={"submit"} className="submit-btn" onClick={this.onSubmit} data-cy="submit"/>
                        
                    </form>
                    <div className="container">
                        {this.state.result !== 0 && <h1>Result: {this.state.result}</h1>}
                    </div>
                </div>
            </div>
        )
    }
}