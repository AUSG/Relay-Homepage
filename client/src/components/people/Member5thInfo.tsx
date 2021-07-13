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
];

export default member5thInfo;
