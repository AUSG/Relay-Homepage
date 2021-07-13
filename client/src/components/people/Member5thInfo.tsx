/**
 * nickname : 닉네임,
 * name : 이름,
 * hasImage : 사진유무 (O/X),
 * role : 5th Member,
 * introduction : 자기소개 (50자),
 * description : 캐치프레이즈 (20자),
 * _email : 이메일(지금 사용 안함),
 * linkedinURL : 링크드인 url,
 * githubURL : 깃헙 url,
 * blogURL : bolg url,
 * otherURL : other url,
 *
 * ----
 * 1. 줄바꿈을 하고싶다면 다음과 같이 넣어주세요.
 * line break: '\\n' (3 words)
 * ----
 * 
 * image: /public/images/people -> $NAME.jpg
 */

const member5thInfo = [
  {
    nickname: "NewMember",
    name: "예시",
    hasImage: "X",
    role: "5th Member",
    introduction: "저는 새로운 멤버입니다!! 잘부탁드려요!!",
    description: "앗, 마우스에 올리셨군요",
    email: "ausg.awskrug@gmail.com",
    linkedinURL: "",
    githubURL: "github.com/ausg",
    blogURL: "",
    otherURL: "",
  },
  {
    nickname: "bluayer",
    name: "송정우",
    hasImage: "O",
    role: "5th Member",
    introduction:
      "다양한 사람들과 대화하는 것을 좋아하는 주니어 백엔드 개발자입니다 XD ",
    description: "앗, 저랑 재밌게 놀아봐요 :)",
    email: "ijacsong98@gmail.com",
    linkedinURL:
      "https://www.linkedin.com/in/%EC%A0%95%EC%9A%B0-%EC%86%A1-65a0b387/",
    githubURL: "https://github.com/bluayer",
    blogURL: "https://bluayer.com",
    otherURL: "",
  },
  {
    nickname: "dwp",
    name: "박다원",
    hasImage: "O",
    role: "5th Member",
    introduction:
      "데이터 엔지니어를 꿈꾸는 다이버입니다. 배움과 사람을 좋아합니다.",
    description: "UNDER THE SEA!🎶",
    email: "workpanda.n@gmail.com",
    linkedinURL: "",
    githubURL: "https://github.com/dawonparkk",
    blogURL: "",
    otherURL: "",
  },
  {
    nickname: "prayme",
    name: "황성찬",
    hasImage: "O",
    role: "5th Member",
    introduction: "예비 백엔드 개발자입니다. 함께 일하고 싶은 사람이 되고 싶습니다.",
    description: "저 오늘 한가해요 ~ 😘",
    email: "dbfpzk142@gmail.com",
    linkedinURL: "https://www.linkedin.com/in/prayme/",
    githubURL: "https://github.com/plzprayme",
    blogURL: "https://velog.io/@prayme",
    otherURL: "",
  },
];

export default member5thInfo;
