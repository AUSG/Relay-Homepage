# Relay Homepage Client Guide - 프로젝트 시작 전 필독!!!!!!!!!

- 해보시다가 도저히 안되겠으면 호출해주세요.. - 명진

## 대략적으로 사용된 도구

- typescript(그러나 js로 개발할 수 있음 - 하단 참고)
- nextjs(성혁 요청<SSR>)
- tailwindcss(성혁 요청<디자인 가이드>)

## 대략적인 개발 흐름 팁

- src/components에서 기능에 해당하는 컴포넌트를 제작
- 제작된 컴포넌트를 src/pages에서 import 후 붙이기

위 두 내용은 src/components/Example.tsx 파일과 src/pages/example.tsx 파일을 참고하시면 됩니다!

- 할 일 목록을 넣으려면 주석을 활용해 // TODO과 같은 형태로 안내 ex) TODO: 이거이거 해야 함

### test

테스트 현재는 echo로 test라는 text만 내보내지만 향후 추가 가능

### dev

27285 포트 사용
http://localhost:27285 로 접속 가능

```sh
yarn dev
```

#### component - src/components

- 컴포넌트 단위의 UI

#### page - src/pages

- 컨테이너 단위의 UI 집합

#### typescript

- javascript 문법으로 사용해도 warning만 나오기 때문에 파일 이름만 ts, tsx로 지정 후 js 문법만 사용하는 형태도 가능

#### Notice

.eslintrc.js, postcss.config.js, tailwind.config.js에 나오는 Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser 에러는 에디터 버그임 신경 꺼도됨

- ts 타입 체크 기능을 끄고 싶으실 경우(기존 js로만 React를 사용하는 경우)에는 파일 상단에 하단과 같이 주석을 입력하시면 됩니다. - ts 무시 기능

```typescript
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

const App = () => {
  return <div>App</div>;
};
```

#### Styling

tailwindcss에서 제공하는 디자인 가이드를 따름. => 사용을 위해서 [vscode 확장 프로그램 중 tailwindcss IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)를 설치하고 컴포넌트 className를 입력하려고 하면 추천받을 수 있음.

![tailwind-guide1](./public/images/tailwind-guide1.png)
![tailwind-guide2](./public/images/tailwind-guide2.png)

-> 참고로 주희님이 만든 css는 그대로 둠
-> Banner도 귀찮아서 css로 하였으나 이후 수정해주면 감사함다

### production(local start)

3000 포트 사용
빌드 후 http://localhost:3000 로 접속 가능

```sh
yarn build
yarn start
```

#### build 팁

lint 명령(yarn lint) 후 빌드하면 좋음

#### aws deploy - Lambda@edge + cloudfront

[이거](https://falsy.me/%EC%83%88%EB%A1%9C%EC%9A%B4-%EB%B2%84%EC%A0%84-serverless-framework%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-nextjs-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-aws-lambda%EB%A5%BC-%ED%86%B5/)를 참고하시면 됨
