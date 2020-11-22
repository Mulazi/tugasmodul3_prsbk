import React, { Component } from "react";
class Child2 extends Component {
    state = {
        angka: 0
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangiAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert('yah hilang')
    }
    render() {
        return (
            <div>
                <h4>Child-1</h4>
                <button onClick={this.tambahAngka}>Tambah Lur</button>
                <button onClick={this.kurangiAngka}>Kurangi cuk</button>
                <br/>
                <p>{this.state.angka}</p>
            </div>
        );
    }
}
export default Child2;