import { Component } from "react";
import React from "react";
import Child1 from "./Child";
import Child2 from "./Child1";
class Parent extends Component {
    state = {
        komponen1: false,
        komponen2: false
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Updates! prevState child1: ${prevState.komponen1} -- prevState child2: ${prevState.komponen2}`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Anda yakin?');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Child1 /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'Sembuyikan' : 'Tampilkan'} child 1!</button>
                <br/>
                {this.state.komponen2 ? <Child2 /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'Sembunyikan' : 'Tampilkan'} child 2!</button>
            </div>
        );
    }
}
export default Parent;