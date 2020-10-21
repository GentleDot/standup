# StandUP!

```
애자일 프랙티스 standup 할 때 아이스브레이킹에 사용되는 IT 기술에 관련된 주제를 나눌 수 있는 아티클들을 공유하는 소셜미디어 프로젝트
```

## 사용자 스토리
1. 김개발은 아침 스탠드업 시간에 같이 이야기를 나눌 수 있는 주제를 우I해 스탠드업이라는 웹 앱을 찾아 간다. 이렇게 함으로써 사람들과 IT에 대한 주제로 커뮤니케이션을 할 수 있다.
2. 김개발이 어제 사이트를 방문해서 유심히 읽은 글을 스탠드업 앱에 올릴 수 있다. 이렇게 하면 다른 사람 들이 볼 수 있다.
    - 스탠드업 앱의 에디터 창은 하나만 있고 거기서 글을 작성하고 올리면 글이 외부 클라우드 공간에 저 장이된다.
3. 김개발이 작성한 글이 목록으로 보여진다. 이렇게 함으로써 다른 사람들이 목록을 확인할 수 있다.
    - 목록글은 해당 IT주제의 대표 이미지와 제목, 간단 요약 등이 들어 있는 카드의 리스트 형태로 나열이 되어야 한다.
4. 김개발은 google ID를 가지고 로그인을 할 수 있다. 이렇게 함으로써 내가 쓴 글만 따로 모아서 볼 수 있다.
5. 김개발은 그룹별로 스탠드업을 만들 수 있고 각 그룹별로 글을 올릴 수 있다

## 설명

"글과 링크를 입력하면 카드를 만들어서 Firebase에 저장합니다." 라는 최소 기능 제품(Minimum Viable Product, MVC) 또는 해피 패스(Happy Path)를 가지고 소셜미디어를 만들 수 있는 프로젝트.

Embedly, Firebase, Github
페이지를 가자고 당분간 무료로 운영할 수 있는 북마크 소셜 미디어를 만들어 봅시다.

### 7 days of Practice
Day 0
이외에는 각 브랜치에 진행사항에 대한 설명이 있습니다.
* Day 0. Git설정 & README 작성

* Day 1. user story 1 - create-react-app
https://github.com/ehrudxo/standup/tree/day1
* Day 2. user story 2 — logo, favicon, editor
https://github.com/ehrudxo/standup/tree/day2
* Day 3. user story 2 — firebase, jest setting
https://github.com/ehrudxo/standup/tree/day3
* Day 4. user story 2 — firebase dao
https://github.com/ehrudxo/standup/tree/day4
* Day 5. user story 3 - card, list, embed.ly, axios
https://github.com/ehrudxo/standup/tree/day5
* Day 6. user story 4 — authentication, redux & router
https://github.com/ehrudxo/standup/tree/day6
* Day 7. user story 4 - Group
https://github.com/ehrudxo/standup/tree/day7

### 설치
```
$git checkout day1
```
1~6 번갈아 가면서 개발

### 실행
```
$npm install
$npm start
```

## API
API는 계획없는 자체 프로젝트입니다. 추후 발생할 여지는 있음.

## production
제품을 빌드하려면
```
npm run build
```

제품을 디플로이 하려면
```
npm run deploy
```
를 통해 작업할 수 있습니다.

###라이센스
MIT