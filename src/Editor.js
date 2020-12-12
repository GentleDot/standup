import React, {Component} from "react";
import "./Editor.css"
import Profile from "./Profile";
import getEmbedly from "./EmbedlyDao";
import Card from "./Card";

class Editor extends Component {
    /* 사용되는 메서드들을 모두 this로 사용할 수 있도록 binding 해 준다. */
    constructor(props) {
        super(props);
        this.onPaste = this.onPaste.bind(this);
        this.editorChange = this.editorChange.bind(this);
        this.getCard = this.getCard.bind(this);
        this.hasValue = this.hasValue.bind(this);
        this.detectURL = this.detectURL.bind(this);
        this.getArticle = this.getArticle.bind(this);
        this.getForcedState = this.getForcedState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            embedlyUrl: undefined,
            content: undefined,
            cardInfo: undefined
        }
    }

    getForcedState(embedlyUrl, content) {
        return new Promise(resolve => {
            if (embedlyUrl) {
                getEmbedly(embedlyUrl).then((response) => {
                    let cardInfo = Object.assign({}, response.data);
                    resolve({
                        embedlyUrl: embedlyUrl,
                        content: content,
                        cardInfo: cardInfo
                    });
                }).catch((err) => {
                    resolve({
                        embedlyUrl: undefined,
                        content: undefined,
                        cardInfo: undefined
                    });
                });
            } else {
                resolve({
                    content: content
                });
            }
        });
    }

    // 복붙에 사용되는 이벤트를 다뤄준다.
    // getForcedState 이용하도록 변경
    onPaste(event) {
        // text가 String 형태인지 확인해야 하지만
        // getAsString 이기 때문에 에러보다는 비정상 작동이 이뤄질 수 있다.
        event.clipboardData.items[0].getAsString(text => {
            let checkText = this.detectURL(text);
            if (checkText) {
                this.getForcedState(checkText).then((obj) => {
                    this.setState(obj);
                });
            }
        });
    }

    // 에디터 내용 변경 시 이벤트
    // getForcedState 이용하도록 변경
    editorChange(event) {
        event.preventDefault();
        let checkText = this.detectURL(event.currentTarget.textContent);
        console.log(`입력된 text 확인 : ${checkText}`);
        // 엔터와 스페이스바를 입력했을 때 편집기의 값을 확인
        if (!this.state.embedlyUrl &&
            (event.keyCode === 32 || event.keyCode === 13) &&
            checkText) {
            this.getForcedState(checkText, event.currentTarget.textContent)
                .then((obj) => {
                    this.setState(obj);
                });
        } else {
            // getForcedState 가 두번 동작하는 문제로 0.5초 간격을 두어 state를 설정하도록 수정
            this.getForcedState(undefined, event.currentTarget.textContent)
                .then(null, (obj) => {
                    setTimeout(() => {
                        // console.log(obj);
                        this.setState(obj);
                    }, 500);
                });
        }
    }

    // 글 가져오기
    // User를 가져오는 부분은 바뀌지 않았으므로 고정
    getArticle() {
        let article = {};
        article.user = "gentledot";
        article.content = this.state.content;
        if (this.state.embedlyUrl) {
            article.cardInfo = this.state.cardInfo;
        }

        return article;
    }

    detectURL(text) {
        let matcherURL = text.match(/(https?:\/\/[^\s]+\.[a-z]{2,})/g);
        let matcherURLWithoutHTTP = text.match(/(www.[^\s]+\.[a-z]{2,})/g);
        let urls = matcherURL || matcherURLWithoutHTTP;

        if (urls && urls.length > 0) {
            return urls[0];
        } else {
            return undefined;
        }
    }

    getCard(embedlyUrl) {
        if (embedlyUrl) {
            return (
                <div>{embedlyUrl}</div>
            );
        } else {
            return (<div/>);
        }
    }

    hasValue(value) {
        if (value && typeof value === "string") {
            return (!value) ? false : (value.trim() !== "");
        } else {
            return false;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit(this.getArticle());

        // submit 후 상태값 초기화
        this.setState({
            embedlyUrl: undefined,
            content: undefined,
            cardInfo: undefined
        });
    }

    render() {
        return (
            <div className="wrapEditor">
                <Profile isAnonymous={this.props.isAnonymous}/>
                <div className="textEditor">
                    <div className="innerEdit"
                         contentEditable="true"
                         placeholder="글쓰기......"
                         onPaste={this.onPaste}
                         onKeyUp={this.editorChange}
                         dangerouslySetInnerHTML={{__html: this.state.content}}>
                    </div>
                    <Card cardInfo={this.state.cardInfo}/>
                </div>
                <div className="actionBar">
                    <button className="upload" disabled={!this.hasValue(this.state.content)}
                            onClick={this.handleSubmit}>
                        <span>스탠드업!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Editor;
