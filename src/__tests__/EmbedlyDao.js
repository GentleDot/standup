import getEmbedly from "../EmbedlyDao";

test('Embedly 사용 테스트 ', () => {
    const testUrl = "http://www.naver.com";
    getEmbedly(testUrl).then((response) => {
        expect(response.data.url).toEqual(testUrl);
    }).catch((error) => {
        console.log(error);
    });
});