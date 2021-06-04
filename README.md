# Relay-Homepage

## 자신의 정보를 추가하는 법

### [People 페이지](https://ausg.me/people)

- `/client/public/images/people` 디렉토리에 사진을 추가합니다. format : `$nickname.jpg` (ex. roeniss2.jpg)
- `/client/src/components/people/memberInfo.tsx` 파일에 자신의 정보를 추가합니다. 해당 파일 주석과 이미 작성된 데이터를 참고하시면 됩니다.

### [Blog 페이지](https://ausg.me/blog)

- `/lib/blogSpider/README.md`를 참고해주세요.

(이 아래는 릴레이 코딩 과정에서 활용한 리드미입니다)

## 목표

- 우리는 릴레이 코딩으로 홈페이지를 만듭니다.
- 참여자는 슬랙에서 모집합니다.
- 순서는 랜덤을 통하여 공정하게 처리합니다.

## 그라운드 룰

```text
1. 참여자 모두 1회 이상 릴레이 코딩에 참여합니다.

2. 서비스를 오픈하기 전 모두의 투표를 받아 최종 런칭 여부를 결정합니다.

3. 모두의 코딩이 끝나고 MVP를 선정합니다. MVP에게는 부상을 제공합니다. (배달 어플 쿠폰 예정)

4. 룰은 언제든지 바뀔 수 있습니다.
```

## 코드 룰

- 브랜치 네이밍
  - `dev` 브랜치에서 `feature/$FEATURE_NAME` 브랜치를 생성하고 해당 브랜치에서 작업합니다. _(ex. feature/mainpage)_
  - 이후 `dev` 브랜치로 PR를 생성합니다. _(ex. feature/main -> dev)_
  - 이후 체크를 마치면 `dev`를 `main`에 머지 후 `main`에서 배포합니다.
- 코드 리뷰어는 다음 타자입니다.
  - 다음 타자가 승인을 해주어야 넘어갈 수 입니다.
  - 최소 1개 이상의 기능을 추가합니다.
  - 커밋 메시지에 깔끔하게 기능 리스트가 담겨야 합니다.
  - 코드 리뷰어와 코드 작성자가 서로 협의하에 소스를 병합합니다.
- 빌드 오류가 발생하면 안됩니다.
- 코드를 칠때는 스트리밍(유튜브, 줌, 구글밋, etc)을 진행합니다. (아무나 들어와서 관찰하세요)

## 릴레이 순서

주희 -> 명진 -> 은수 -> 민태 -> 규태 -> 성혁 -> 성익 -> 초희 -> 수연 -> 준석 -> 진수 -> 예본 -> 은수

## etc

- 사이트 [홈페이지 예시 사이트](https://sites.google.com/view/ausg-4th/)
- 부족한 부분 혹은 중간 중간에 들어갔어야 하는 요소가 더 있다면,
  - 직접 구현하시면 좋습니다.
  - 공개된 채널에 알려주셔도 좋습니다.
  - 모든 내용은 각 운영진에게 공유하여 주시면 빠르게 피드백을 제공하겠습니다.

## 개발 참고사항

- [테일윈드 CSS](https://tailwindcss.com/)
- NextJS 개발은 `/client/README.md` 참고
- **메인의 Node Package 삭제 금지 (for husky)**
  - 수정 시 husky 문서 및 [https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/] 참고
