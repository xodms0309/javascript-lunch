<h1 align="middle">🍴</h1>
<h2 align="middle">level1 - 점심 뭐 먹지</h2>
<p align="middle">자바스크립트로 음식점 목록 어플리케이션</p>

### 결과물: [점심 뭐 먹지](https://xodms0309.github.io/javascript-lunch/)


### 🚀 학습 목표
> 1. 어플리케이션을 컴포넌트 단위로 모듈화하여 개발
> 2. 웹 UI 환경에서의 테스트 기초
> 3. 컴포넌트 단위 테스트 (1단계)
> 4. 사용자 관점에서 중요하다고 생각하는 기능을 스스로 정의하고 E2E 테스트로 검증해보기 (2단계)
> 5. TypeScript의 기본 문법을 익히며 필요성을 경험

### 📝 1단계 기능 목록
- 음식점 목록을 확인할 수 있다.
  - 카테고리별로 필터링해서 확인할 수 있다.
  - 이름순/거리순으로 정렬해서 확인할 수 있다.
- 음식점 목록에 새로운 음식점을 추가할 수 있다.
- 입력값이 잘못되었을 때 사용자에게 알려주는 방식은 자유롭게 구현한다.
- 새로고침해도 추가한 음식점 정보들이 유지되어야 한다.


### 📝 2단계 기능 목록
- 음식점 상세 정보를 모달을 사용해 확인할 수 있다.
- 음식점을 삭제할 수 있다.
- 자주 가는 음식점을 추가하고 목록으로 확인할 수 있다.
  

### 💻 페어프로그래밍
|<img src="https://avatars.githubusercontent.com/u/55427367?v=4" width=150px> |<img src="https://avatars.githubusercontent.com/u/33623078?v=4" width=150px>|
|:---:|:---:|
|[타미](http://github.com/xodms0309)|[쿠마](http://github.com/yogjin)|

### 🌲 파일 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜close.png
 ┃ ┣ 📜empty.png
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜mobile_empty.jpeg
 ┃ ┣ 📜search_button.png
 ┃ ┣ 📜star_empty.png
 ┃ ┣ 📜star_filled.png
 ┃ ┗ 📜top_button.png
 ┣ 📂components
 ┃ ┣ 📂ErrorModal
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂GotoTopButton
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂MovieItem
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂MovieList
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂MovieModal
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂SeeMoreButton
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂Skeleton
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜dom.ts
 ┃ ┣ 📜infinityScroll.ts
 ┃ ┗ 📜request.ts
 ┣ 📜App.ts
 ┣ 📜Store.ts
 ┣ 📜fetch.ts
 ┣ 📜index.js
 ┣ 📜type.d.ts
 ┗ 📜types.ts
```


