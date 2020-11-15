import React, {Component} from "react";
import "./Editor.css"
import Profile from "./Profile";

class Editor extends Component {
    /* 사용되는 메서드들을 모두 this로 사용할 수 있도록 binding 해 준다. */
    constructor(props) {
        super(props);
        this.onPaste = this.onPaste.bind(this);
        this.editorChange = this.editorChange.bind(this);
        this.getCard = this.getCard.bind(this);
        this.hasValue = this.hasValue.bind(this);
        this.state = {
            embedlyUrl: undefined,
            content: undefined
        }
    }

    // 복붙에 사용되는 이벤트를 다뤄준다.
    onPaste(event) {
        // text가 String 형태인지 확인해야 하지만
        // getAsString 이기 때문에 에러보다는 비정상 작동이 이뤄질 수 있다.
        event.clipboardData.items[0].getAsString(text => {
            if (this.detectURL(text)) {
                this.setState({embedlyUrl: text, content: this.state.content});
            }
        })
    }

    // 에디터 내용 변경 시 이벤트
    editorChange(event) {
        let checkText = this.detectURL(event.currentTarget.textContent);

        // 엔터와 스페이스바를 입력했을 때 편집기의 값을 확인
        if (!this.state.embedlyUrl &&
            (event.keyCode === 32 || event.keyCode === 13) &&
            checkText) {
            this.setState({embedlyUrl: checkText, content: event.currentTarget.textContent});
        } else {
            this.setState({content: event.currentTarget.textContent});
        }
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
        this.props.submit();
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
                         onKeyUp={this.editorChange}>
                    </div>
                </div>
                <div className="actionBar">
                    <button className="upload" onClick={this.props.handleSubmit}>
                        <span>스탠드업!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Editor;
