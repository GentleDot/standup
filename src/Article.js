export default function article(
    user = "tester",
    content = "hello, react-world.",
    url = "https://github.com/gentledot",
    title = "테스트 게시물",
    description = "리액트 앱 제작을 익히기 위해 야금야금 만드는 중",
    imageUrl = "test",
    imgWidth = 640,
    imgHeight = 480,
    thumbnailUrl = "https://avatars1.githubusercontent.com/u/15000594?s=400&u=ab8d53076cfa201bb8d1cc25f4bb93f6c12fc4d1&v=4",
    thumbnailWidth = 80,
    thumbnailHeight = 80
) {
    return {
        user: user,
        content: content,
        urls: [{
            url: url,
            title: title,
            description: description,
            imageUrl: imageUrl,
            imgWidth: imgWidth,
            imgHeight: imgHeight,
            thumbnailUrl: thumbnailUrl,
            thumbnailWidth: thumbnailWidth,
            thumbnailHeight: thumbnailHeight
        }]
    };
}