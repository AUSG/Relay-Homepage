# Relay-Homepage

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-41-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 자신의 정보를 추가하는 법

### [People 페이지](https://ausg.me/people)

#### 프로필

- `/client/public/images/people` 디렉토리에 사진을 추가합니다. format : `$nickname.jpg` (ex. roeniss2.jpg)
- `/client/src/components/people/CrewInfo.tsx` 파일에 자신의 정보를 추가합니다. 해당 파일 주석과 이미 작성된 데이터를 참고하시면 됩니다.

#### 어워드

AUSG 크루들과 함께하는 이벤트들을 통해 어워드를 획득하실 수 있습니다. 이 어워드는 프로필 아래에 조그마한 아이콘들로 표시돼요.

- `/client/src/components/people/CrewInfo.tsx`에서 awardList 항목을 추가합니다. 등록 가능한 어워드 이름들은 ``/client/src/components/people/AwardInfo.tsx`에서 확인할 수 있어요.

- 새 어워드를 추가하려면 `/client/src/components/people/AwardInfo.tsx`의 예제를 참고해서 새  추가하고, `/public/images/icons`에 아이콘 svg 파일을 추가하면 됩니다.

### [Blog 페이지](https://ausg.me/blog)

- `/lib/blogSpider/README.md`를 참고해주세요.

### 리드미의 기여자 명단에 새 크루를 추가하는 법

#### 방법 1

[이 코멘트](https://github.com/AUSG/Relay-Homepage/pull/62#issuecomment-867417573)를 참고하세요. (PR 머지한 후에 댓글 달면 됩니다)

#### 방법 2

위 방법은 조금 번거롭습니다. (새 컨트리뷰터가 PR 등록 -> Merge -> 그 PR에 all-contributors 봇 호출하기 위해 댓글 달기 -> 새로운 PR 생성뙴 -> 새 PR을 Merge)

이 때문에 로컬에서 직접 컨트리뷰터를 추가할 수 있는 가이드를 준비했습니다.

```sh
# 소스파일 루트 디렉토리에서:
yarn
yarn all-contributors add $GITHUB_NAME code
```

이렇게 치면 .all-contributorsrc 파일에 새 이름을 넣고, 리드미를 업데이트하고, 커밋까지 마칩니다. 이 내용을 별도 브랜치에 올려서 PR 등록하면 됩니다.

## 배포 방법

`.github/workflows/continuous-deployment.yml`에 의해, `dev` 브랜치에 push/merge 되면 자동으로 배포 프로세스가 진행됩니다.

자세한 내용은 `serverless.yml`을 참고하시면 되는데, 간단히 설명하면 [Serverless](https://www.serverless.com/) 프레임워크를 이용해 aws에 리소스를 배포합니다.

@roeniss 가 관리하는 AWS 계정에서 Lambda, S3, ACM, CF 등이 생성, 유지됩니다. 서버리스라서 비용은 거의 없어요.

### 배포 중 에러 발생 시 조치방법

https://github.com/AUSG/Relay-Homepage/runs/4659668861?check_suite_focus=true 와 같이, 가끔 배포가 실패할 때가 있습니다. 2021년 12월 30일 커밋으로 해당 serverless 스택을 최신화해두었는데, 일단 이걸로 해결이 된 것 같고 또 유사한 문제가 생긴다면 다시 들춰봐야 할 것 같습니다.

## 그 외

- 프론트 및 NextJS 작업은 `/client/README.md`를 참고하세요.
- 최상단 `package.json`, `yarn.lock`은 [husky](https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/)와 [all-contributors](https://allcontributors.org/)를 위해 존재합니다 삭제하지 말아주세요.

## 기여한 사람들

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/14km"><img src="https://avatars.githubusercontent.com/u/45898974?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MinTae Kim</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=14km" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/suyeon96"><img src="https://avatars.githubusercontent.com/u/64878866?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Suyeon Woo</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=suyeon96" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/eunsukimme"><img src="https://avatars.githubusercontent.com/u/31213226?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peter(Eunsu) Kim</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=eunsukimme" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/yebonkim"><img src="https://avatars.githubusercontent.com/u/25071311?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yebon Kim</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=yebonkim" title="Code">💻</a></td>
    <td align="center"><a href="http://bit.ly/2Oxp8OK"><img src="https://avatars.githubusercontent.com/u/34286430?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Seon Namkung</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=whitesoil" title="Code">💻</a></td>
    <td align="center"><a href="https://www.perpick.me/"><img src="https://avatars.githubusercontent.com/u/24822072?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ray</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=rayleighko" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/RustShark"><img src="https://avatars.githubusercontent.com/u/58954057?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gyutae Oh</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=RustShark" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/byunjuneseok"><img src="https://avatars.githubusercontent.com/u/29401441?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juneseok Byun</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=byunjuneseok" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/siyeons"><img src="https://avatars.githubusercontent.com/u/35549653?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Siyeon Lee</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=siyeons" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/seohyun0120"><img src="https://avatars.githubusercontent.com/u/35247295?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Seohyun Yoon</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=seohyun0120" title="Code">💻</a></td>
    <td align="center"><a href="https://blogik.netlify.app/"><img src="https://avatars.githubusercontent.com/u/26772420?v=4?s=100" width="100px;" alt=""/><br /><sub><b>SeongIkKim</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=SeongIkKim" title="Code">💻</a></td>
    <td align="center"><a href="https://choheeis.github.io/newblog"><img src="https://avatars.githubusercontent.com/u/31889335?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kimchohee</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=choheeis" title="Code">💻</a></td>
    <td align="center"><a href="https://umi0410.github.io/"><img src="https://avatars.githubusercontent.com/u/33250725?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jinsu Park</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=umi0410" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/roeniss"><img src="https://avatars.githubusercontent.com/u/26613280?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Roeniss Moon</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=roeniss" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://victoriagjh.github.io/"><img src="https://avatars.githubusercontent.com/u/35221733?v=4?s=100" width="100px;" alt=""/><br /><sub><b>JooHee Gwon</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=victoriagjh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/naru200"><img src="https://avatars.githubusercontent.com/u/52230505?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jinsu Bae</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=naru200" title="Code">💻</a></td>
    <td align="center"><a href="https://tape22.tistory.com/"><img src="https://avatars.githubusercontent.com/u/35520314?v=4?s=100" width="100px;" alt=""/><br /><sub><b>HurJungMin</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=tape22" title="Code">💻</a></td>
    <td align="center"><a href="https://bluayer.com/"><img src="https://avatars.githubusercontent.com/u/37579681?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jungwoo Song</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=bluayer" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dawonparkk"><img src="https://avatars.githubusercontent.com/u/60343930?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dawon Park</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=dawonparkk" title="Code">💻</a></td>
    <td align="center"><a href="https://velog.io/@prayme"><img src="https://avatars.githubusercontent.com/u/34934883?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Seong Chan Hwang</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=plzprayme" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/gineepark"><img src="https://avatars.githubusercontent.com/u/60264957?v=4?s=100" width="100px;" alt=""/><br /><sub><b>gineepark</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=gineepark" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/JeoungSulMo"><img src="https://avatars.githubusercontent.com/u/50662170?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sulmo</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=JeoungSulMo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nanaeu"><img src="https://avatars.githubusercontent.com/u/55730357?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yu Jin Lee</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=nanaeu" title="Code">💻</a></td>
    <td align="center"><a href="https://devwithpug.github.io/"><img src="https://avatars.githubusercontent.com/u/69145799?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jungyu Choi</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=devwithpug" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/BAEJIANN"><img src="https://avatars.githubusercontent.com/u/87267738?v=4?s=100" width="100px;" alt=""/><br /><sub><b>BAEJIANN</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=BAEJIANN" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Ohyaelim"><img src="https://avatars.githubusercontent.com/u/53201847?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yaelim</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=Ohyaelim" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/gimquokka"><img src="https://avatars.githubusercontent.com/u/60743304?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jin Kim</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=gimquokka" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Ywoosang"><img src="https://avatars.githubusercontent.com/u/68385605?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ywoosang</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=Ywoosang" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://velog.io/@jinseock95"><img src="https://avatars.githubusercontent.com/u/48677363?v=4?s=100" width="100px;" alt=""/><br /><sub><b>JinSeok Oh</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=jinseock95" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/namrmino"><img src="https://avatars.githubusercontent.com/u/69797157?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nam Jeong Jae</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=namrmino" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sju0924"><img src="https://avatars.githubusercontent.com/u/39671049?v=4?s=100" width="100px;" alt=""/><br /><sub><b>serendipity</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=sju0924" title="Code">💻</a></td>
    <td align="center"><a href="https://devlog-wjdrbs96.tistory.com/"><img src="https://avatars.githubusercontent.com/u/45676906?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gyunny</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=wjdrbs96" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/inddoni"><img src="https://avatars.githubusercontent.com/u/46644241?v=4?s=100" width="100px;" alt=""/><br /><sub><b>InJeong Choi</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=inddoni" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/freedom07"><img src="https://avatars.githubusercontent.com/u/29652381?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yun Jegal</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=freedom07" title="Code">💻</a></td>
    <td align="center"><a href="https://say-young.tistory.com/"><img src="https://avatars.githubusercontent.com/u/55133871?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sayer(JangSeYoung)</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=Say-young" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/sang-w0o"><img src="https://avatars.githubusercontent.com/u/48438083?v=4?s=100" width="100px;" alt=""/><br /><sub><b>나상우</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=sang-w0o" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cheongha"><img src="https://avatars.githubusercontent.com/u/51499782?v=4?s=100" width="100px;" alt=""/><br /><sub><b>cheongha</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=cheongha" title="Code">💻</a></td>
    <td align="center"><a href="https://jsqna.com"><img src="https://avatars.githubusercontent.com/u/28754907?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Seongbin Kim</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=seongbin9786" title="Code">💻</a></td>
    <td align="center"><a href="http://rdd9223.github.io, velog.io/@rdd9223"><img src="https://avatars.githubusercontent.com/u/46023074?v=4?s=100" width="100px;" alt=""/><br /><sub><b>YeongWoooo</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=rdd9223" title="Code">💻</a></td>
    <td align="center"><a href="https://velog.io/@juno7803"><img src="https://avatars.githubusercontent.com/u/26808056?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juno</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=juno7803" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/yezgoget"><img src="https://avatars.githubusercontent.com/u/55784772?v=4?s=100" width="100px;" alt=""/><br /><sub><b>yeji s</b></sub></a><br /><a href="https://github.com/AUSG/Relay-Homepage/commits?author=yezgoget" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---

이 아래 내용은 릴레이 코딩이 진행될 때 사용되었던 리드미입니다. 더 이상 필요가 없어 대표 리드미에서 별도 파일로 분리했습니다.

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
