export default function article(
    user = "tester",
    content = "hello, react-world.",
    url = "https://github.com/gentledot",
    title = "테스트 게시물",
    description = "리액트 앱 제작을 익히기 위해 야금야금 만드는 중",
    imageUrl = "https://wallup.net/wp-content/uploads/2017/03/27/21837-test_patterns.jpg",
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

export function getArticle(
    user = "Genji",
    content = "겐지가 함께한다.",
    url = "https://namu.wiki/w/%EA%B2%90%EC%A7%80(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
    title="겐지(오버워치)",
    description = "블리자드 엔터테인먼트 사의 FPS 게임 오버워치의 영웅.기계가 되어버린 몸을 받아들여 내면의 평화를 찾은 강력한 사이보그 닌자.",
    thumbnail_url = "https://d1u1mce87gyfbn.cloudfront.net/media/artwork/genji-concept.jpg" ,
    thumbnail_width = 80,
    thumbnail_height =80,
    provider_name = "namu wiki"
){
    return {
        user : user,
        content : content,
        cardInfo:{
            url : url,
            title:title,
            description : description,
            thumbnail_url : thumbnail_url,
            thumbnail_width : thumbnail_width,
            thumbnail_height :thumbnail_height,
            provider_name : provider_name
        }
    }
}