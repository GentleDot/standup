import FirebaseDao from "../FirebaseDao";
import config from "../config";
import Article from "../Article";

let dao = new FirebaseDao(config);
let testArticle = Article();
let keys = [];

test('dao 동작 확인 ', function () {
});

test('Object assign', function () {
    let article2 = Object.assign({}, testArticle);
    article2.user = "Genji";
    article2.content = "다음";
    article2.urls[0].url = "http://www.daum.net";

    // testArticle 값이 잘 전달되었는지 확인
    expect(testArticle.urls[0].thumbnailWidth).toEqual(article2.urls[0].thumbnailWidth);
});


it('insert article', function () {
    jest.setTimeout(100000);
    let key = dao.newKey();
    const data = JSON.stringify(testArticle);
    // const data = article;
    let inserted = dao.insert(data);

    // 입력이 되었는지 key 값을 가지고 검색하여 확인
    dao.getArticle(key).on('value', (snapShot) => {
        // 키 값이 같은지 테스트 케이스 작성
        expect(snapShot.key).toEqual(key);
    });

    return inserted;
});

it('upload article and edit', function () {
    let key = dao.newKey();
    var updated = dao.update(key, testArticle);
    dao.getArticle(key).on('value', (snapShot) => {
        expect(snapShot.key).toEqual(key);
        // dao.update(key, article2);
        // dao.remove(key);
    });
    return updated;
});

test('조회 확인 테스트', function () {
    let key = dao.newKey();
    let getArticle = dao.getArticle(key);
    console.log(getArticle);
    let updated = dao.update(key, testArticle);
    console.log(updated);
});

it('list article', function () {
    dao.list(25).once('value', function (snapshot) {
        snapshot.forEach((dataSnapshot) => {
            keys.push(dataSnapshot.key);
            let article = dataSnapshot.val();
            expect(article.user).toEqual("gentledot");
        });
    });
});