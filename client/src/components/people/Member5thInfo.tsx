/**
 * nickname : 닉네임,
 * name : 이름,
 * hasImage : 사진유무 (O/X),
 * imageType: 이미지 타입 (jpg, png..),
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
 * image: /public/images/people -> $NAME.jpg
 */

const member5thInfo = [
  {
    nickname: "bluayer",
    name: "송정우",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `다양한 사람들과 대화하는 것을 좋아하는 주니어 백엔드 개발자입니다 XD`,
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
    imageType: "jpg",
    role: "5th Member",
    introduction: `데이터 엔지니어를 꿈꾸는 다이버입니다. 
    배움과 사람을 좋아합니다.`,
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
    imageType: "jpg",
    role: "5th Member",
    introduction: `예비 백엔드 개발자입니다. 
      함께 일하고 싶은 사람이 되고 싶습니다.`,
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
    imageType: "jpg",
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
    imageType: "jpg",
    role: "5th Member",
    introduction: `웹에 관심이 있습니다.앞으로 프론트엔드를 많이 파보려 합니다!`,
    description: "넘모 행보카고!!",
    email: "tjdah0853@gmail.com",
    linkedinURL: "",
    githubURL: "https://github.com/JeoungSulMo",
    blogURL: "https://jeoungsulmo.github.io/",
    otherURL: "",
  },
  {
    nickname: "lyuashley",
    name: "이유진",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `백엔드 개발자를 희망하고 있어요!
    다같이 즐겁게 활동해보아요😊`,
    description: "🐣🐣🐣",
    email: "lyubliss@gmail.com",
    linkedinURL: "",
    githubURL: "https://github.com/Ashley031",
    blogURL: "",
    otherURL: "",
  },
  {
    nickname: "say-young",
    name: "장세영",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `지금처럼 계속해서 즐겁게 개발하고 싶습니다.`,
    description: "🔥프로 재미사냥꾼🔥",
    email: "sayer.dev@gmail.com",
    linkedinURL: "https://www.linkedin.com/in/seyoung-jang-9400bb206/",
    githubURL: "https://github.com/say-young",
    blogURL: "https://say-young.tistory.com/",
    otherURL: "",
  },
  {
    nickname: "devwithpug",
    name: "최준규",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `백엔드 개발자를 꿈꾸고 있어요.
    Spring, MSA, DevOps에 관심이 많습니다.`,
    description: "강아지 퍼그 귀엽지 않나요? 🐶",
    email: "zmfjscl789@gmail.com",
    linkedinURL: "",
    githubURL: "https://github.com/devwithpug",
    blogURL: "https://devwithpug.github.io",
    otherURL: "",
  },
  {
    nickname: "baejiann",
    name: "배지안",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `서비스 기획으로 문제를 해결하는 사람이 되고 싶습니다.`,
    description: "파도가 와요.\\n서핑을 해야겠네요.",
    email: "baejiann120@naver.com",
    linkedinURL: "https://www.linkedin.com/in/jian-bae-117756201/",
    githubURL: "https://https://github.com/BAEJIANN",
    blogURL: "",
    otherURL: "",
  },
  {
    nickname: "ohyes",
    name: "오예림",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `아직은 배울게 많은 저의 목표는 '재밌고 즐겁게 개발하자'입니다. 모두 함께하시죠~`,
    description: "오예스~✨",
    email: "npr05080@gmail.com",
    linkedinURL: "",
    githubURL: "https://github.com/Ohyaelim",
    blogURL: "",
    otherURL: "",
  },
  {
    nickname: "gimquokka",
    name: "김진영",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `Spring, Cloud, DevOps 등에 관심이 많고 잘하는 Backend Software Engineer가 되고 싶습니다.`,
    description: "Learning by Doing 💻",
    email: "gimquokka@gmail.com",
    linkedinURL: "https://www.linkedin.com/in/gimquokka/",
    githubURL: "https://github.com/gimquokka",
    blogURL: "https://gimquokka.github.io/",
    otherURL: "https://kwize.com/pics/Linus-Torvalds-quote-about-talking-2a9797.jpg",
  },
  {
    nickname: "sangwoo",
    name: "나상우",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: "백엔드, 프론트, 인프라 모두 다 좋아해요~!",
    description: "칼퇴하는 개발자가 되자.",
    email: "robbyra@gmail.com",
    linkedinURL: "https://www.linkedin.com/in/sangwoo-ra-845529202/",
    githubURL: "https://github.com/sang-w0o",
    blogURL: "https://github.com/sang-w0o/Study",
    otherURL: "",
  },
  {
    nickname: "ywoosang",
    name: "윤우상",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `'시너지'와 '인사이트'를 제공할 수 있는 개발자가 되고 싶습니다.`,
    description: "당신처럼 아름다운 하루에요 🌈",
    email: "opellong13@gmail.com",
    linkedinURL: "",
    githubURL: "https://github.com/Ywoosang",
    blogURL: "",
    otherURL: "",
  },
  {
    nickname: "jinseok",
    name: "오진석",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `데이터가 움직이는 것을 다루고 바라보는 일을 굉장히 좋아합니다👻`,
    description: "안녕하세요🙂",
    email: "jinseock95@gmail.com",
    linkedinURL: "https://www.linkedin.com/in/진석-오-6894841a7/",
    githubURL: "https://github.com/jiseock95",
    blogURL: "https://velog.io/@jinseock95",
    otherURL: "",
  },
  {
    nickname: "namrmino",
    name: "남정재",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `End to End 프로젝트 리더가 되는 날까지 🌻🌻🌻`,
    description: "백패킹 캠퍼 갬성",
    email: "njj97@naver.com",
    linkedinURL:
      "https://www.linkedin.com/in/jeongjaenam/",
    githubURL: "https://github.com/namrmino",
    blogURL: "https://namrmino.tistory.com/",
    otherURL: "",
  },
  {
    nickname: "Gyunny",
    name: "최정균",
    hasImage: "O",
    imageType: "jpg",
    role: "5th Member",
    introduction: `늦더라도 꾸준히 원칙을 지키며 올바른 방향으로 가고자 합니다~`,
    description: "겉차속따,,",
    email: "wjdrbs966@naver.com",
    linkedinURL: "",
    githubURL: "https://github.com/wjdrbs96",
    blogURL: "https://devlog-wjdrbs96.tistory.com/",
    otherURL: "",
  },
];

export default member5thInfo;
