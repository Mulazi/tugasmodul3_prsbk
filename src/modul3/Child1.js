import React, { Component } from "react";
class Child1 extends Component {
    state = {
        nim: "21120117120013"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => { 
            if (state.nim === "21120117120013") {
                return {nim : "21120117130075"}
            } 
        })
    }
    ubahNama1 = () => {
        this.setState((state) => { 
            if (state.nim === "21120117130075") {
                return {nim : "21120117120013"}
            } 
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return window.confirm('Haruskah Component ini di-Update?');
    // }
    componentWillUnmount() {
        alert('jangan pergiiii dong')
    }
    render() {
        return (
            <div>
                <h4>Child-2</h4>
                <button onClick={this.ubahNama}>Afrizal</button>
                <button onClick={this.ubahNama1}>Mulazi</button>
                <br />
                <h4>NIM : {this.state.nim}</h4>
            </div>
        );
    }
}
export default Child1;