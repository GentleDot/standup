import React, {Component} from 'react';
import logo from './img/standup_logo.png';
import './App.css';
import Editor from './Editor';
import config from "./config";

console.log(config.apiKey);

class App extends Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 버튼을 눌렀을 때 Action. 우선은 console.log로 확인
    handleSubmit(e){
        console.log(this, e);
    }

    // 익명 사용자 여부
    isAnonymous(){
        return true;
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Stand Up 앱을 만들어 봅시다</h2>
                </header>
                <Editor {...this} />
            </div>
        );
    }
}

export default App;
