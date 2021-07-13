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
  {
    nickname: "gineepark",
    name: "박진희",
    hasImage: "O",
    role: "5th Member",
    introduction: "Do What You Can't",
    description: "클라우드와 보안을 공부하는 중입니다:)",
    email: "bluejinhee@gmail.com",
    linkedinURL: "",
    githubURL: "https://github.com/gineepark",
    blogURL: "https://velog.io/@ginee_park",
    otherURL: "",
  },
  {
    nickname: "sulmo",
    name: "정성모",
    hasImage: "O",
    role: "5th Member",
    introduction: "웹에 관심이 있습니다. 앞으로 프론트엔드를 많이 파보려 합니다!",
    description: "넘모 행보카고!!",
    email: "tjdah0853@gmail.com",
    linkedinURL: "",
    githubURL: "https://github.com/JeoungSulMo",
    blogURL: "https://jeoungsulmo.github.io/",
    otherURL: "",
  },
];

export default member5thInfo;
