import firebase from 'firebase';

export default class FirebaseDao {

    constructor(config) {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    insert(postData) {
        return firebase.database().ref().child('posts').push(postData);
    }

    update(key, postData) {
        var updates = {};
        updates['/posts/' + key] = postData;
        updates['/user-posts/gentledot/' + key] = postData;
        return firebase.database().ref().update(JSON.parse(JSON.stringify(updates)));
    }

    remove(key) {
        firebase.database().ref('/posts/').child(key).remove();
        return firebase.database().ref('/user-posts/gentledot/').child(key).remove();
    }

    off() {
        return firebase.database().ref().off();
    }

    newKey() {
        return firebase.database().ref().child('posts').push().key;
    }

    list(pagesize) {
        return firebase.database().ref('/posts/')
            .orderByKey().limitToLast(pagesize);
    }

    getArticle(key) {
        return firebase.database().ref('/posts/' + key);
    }

    /*constructor(config) {
        // firebase remote 서버 정보 설정
        firebase.initializeApp(config);
        this.database = firebase.database();
        console.log(`초기 데이터베이스 설정 확인 ${this.database.app.options}`);
    }

    update(key, postData) {
        let updates = {};
        updates['/posts/' + key] = postData;
        // updates['/user-posts/gentledot/' + key] = postData;
        console.log(updates);
        return this.database.ref().update(updates);
    }

    insert(postData) {
        try{
            console.log(`firebase 실시간 데이터베이스 접속 확인 : ${this.database}`);
            console.log(`firebase 이건 확인된거야? : ${this.database.ref().child('posts')}`);
            return this.database.ref().child("post").push().set(postData, function (error) {
                if (error){
                    console.log(`push 실패 : ${error}`);
                } else {
                    console.log(`${postData} push 성공`);
                }
            });
        } catch (e) {
            console.log(`무슨 오류가 발생하는데!!!!!! ${e.toString()}`)
        }

    }

    remove(key){
        this.database.ref('/posts/').child(key).remove();
        // return database.ref('/user-posts/gentledot/').child(key).remove();
        return this.database.ref('/posts/').child(key).remove();
    }

    article(key) {
        return this.database.ref('/posts/' + key);
    }

    newKey() {
        return this.database.ref().child('/posts/').push().key;
    }*/
}