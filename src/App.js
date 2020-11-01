import React from 'react';
import logo from './img/standup_logo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Stand Up 앱을 만들어 봅시다</h2>
            </header>
            <p className="App-intro">
                여기서부터 프로젝트 시작!
            </p>
        </div>
    );
}

export default App;
