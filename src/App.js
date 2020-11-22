import React, {Component} from 'react';
import logo from './img/standup_logo.png';
import './App.css';
import Editor from './Editor';
import config from "./config";
import FirebaseDao from "./FirebaseDao";

class App extends Component {
    constructor() {
        super();
        this.dao = new FirebaseDao(config);
        this.submit = this.submit.bind(this);
        this.getArticles = this.getArticles.bind(this);
        this.state = {
            articles: []
        }
    }

    submit(article) {
        if (article) {
            let key = this.dao.newKey();
            let updated = this.dao.update(key, article);
            return updated;
        }
    }

    getArticles() {
        let articleItems = [];
        for (let i = 0; i < this.state.articles.length; i++) {
            articleItems.push(<li key={this.state.articles[i].key}>{this.state.articles[i].content}</li>);
        }
        console.log(articleItems);
        return articleItems;
    }

    // 익명 사용자 여부
    isAnonymous() {
        return true;
    }

    componentDidMount() {
        this.dao.list(25).on('value', (snapshots) => {
            let items = [];
            snapshots.forEach((dataSnapshot) => {
                let item = dataSnapshot.val();
                item['key'] = dataSnapshot.key;
                console.log(`item 확인 : ${dataSnapshot.val()}`);
                items.push(item);
            });

            if (items && items.length > 0) {
               this.setState({
                  articles: items.reverse()
               });
            }
        });
    }

    componentWillUnmount() {
        this.dao.off();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Stand Up 앱을 만들어 봅시다</h2>
                </header>
                <Editor submit={this.submit} isAnonymous={this.isAnonymous}/>
                <div>
                    <ul>{this.getArticles()}</ul>
                </div>
            </div>
        );
    }
}

export default App;
