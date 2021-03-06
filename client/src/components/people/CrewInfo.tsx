/**
 * nickname : 닉네임 (AwardInfo의 닉네임과 일치해야됨),
 * name : 이름,
 * role : 역할 (다른 사람들 항목 참고),
 * introduction : 자기소개 (<= 50자),
 * description : 캐치프레이즈 (<= 20자),
 * email : 이메일 (지금 사용 안함),
 * linkedinURL : 링크드인 url (생략 가능),
 * githubURL : 깃헙 url (생략 가능),
 * blogURL : bolg url (생략 가능),
 * otherURL : other url (생략 가능),
 *
 * ----
 * # 안내사항
 * 1. 줄바꿈을 하고싶다면 쌍따옴표(") 대신 백틱(`)을 이용해 문장을 적어주세요. 아래에 몇 분 예시 있음. 각 줄의 왼쪽 여백을 없애야 함에 주의할 것.
 * 2. 사진은 다음 위치에 추가해야 합니다: /images/people/YOUR_PROFILE_IMAGE.jpg (이미지가 없다면 다음 문자열을 써주세요: `/images/people/crewPlaceholder.jpg`)
 * 3. 자기 기수의 맞는 위치에 자신의 정보를 추가해주세요 (ex : 5th Member 인경우 5th 영역에 기입)
 * ----
 */

const crews = {
  "5th": [
    {
      nickname: "yeongwoooo",
      name: "강영우",
      imageUrl: "/images/people/yeongwoooo.jpg",
      role: "5th Member",
      introduction: `프론트, 백, 인프라 팔방미인이 될래요`,
      description: "I love sexy code.👨‍💻",
      email: "rdd9223@gmail.com",
      linkedinURL:
        "https://www.linkedin.com/in/%EC%98%81%EC%9A%B0-%EA%B0%95-659a861ba/",
      githubURL: "https://github.com/rdd9223",
      blogURL: "https://velog.io/@rdd9223",
      otherURL: "https://www.instagram.com/kang_0woo/",
    },
    {
      nickname: "cheongha",
      name: "성청하",
      imageUrl: "/images/people/cheongha.jpg",
      role: "5th Member",
      introduction: `멋쟁이 백엔드 개발자가 될래요`,
      description: "맑고 깨끗하게 💧",
      email: "sch7188@gmail.com",
      linkedinURL: "",
      githubURL: "https://github.com/cheongha",
      blogURL: "",
      otherURL: "",
      awardList: ["2021_baekak_mountain"],
    },
    {
      nickname: "tape22",
      name: "허정민",
      imageUrl: "/images/people/tape22.jpg",
      role: "5th Member",
      introduction: `문제를 고민하고, 해결할 줄 아는 백엔드 개발자를 희망하고 있습니다.`,
      description: "🚀 도전과 재미를 찾아서!",
      email: "gjwjdlas@gmail.com",
      linkedinURL: "",
      githubURL: "https://github.com/tape22",
      blogURL: "https://tape22.tistory.com/",
      otherURL: "",
      awardList: [
        "2021_baekak_mountain",
        "2021_book_reading",
        "2021_aws_community_day_master",
        "2021_bigchat",
      ],
    },
    {
      nickname: "bluayer",
      name: "송정우",
      imageUrl: "/images/people/bluayer.jpg",
      role: "5th Member",
      introduction: `다양한 사람들과 대화하는 것을 좋아하는 주니어 백엔드 개발자입니다 XD`,
      description: "앗, 저랑 재밌게 놀아봐요 :)",
      email: "ijacsong98@gmail.com",
      linkedinURL:
        "https://www.linkedin.com/in/%EC%A0%95%EC%9A%B0-%EC%86%A1-65a0b387/",
      githubURL: "https://github.com/bluayer",
      blogURL: "https://bluayer.com",
      otherURL: "",
      awardList: ["2021_book_reading"],
    },
    {
      nickname: "juno",
      name: "이준호",
      imageUrl: "/images/people/juno.jpg",
      role: "5th Member",
      introduction: `인생 프론트엔드 개발자입니다!
여러분과 함께 성장하고 싶어요🙌`,
      description: `걱정말고 다가와 주세요!
리액션은 제가 담당할게요😆`,
      email: "junolee7803@gmail.com",
      linkedinURL: "",
      githubURL: "https://github.com/juno7803",
      blogURL: "https://velog.io/@juno7803",
      otherURL: "",
      awardList: ["2021_book_reading"],
    },
    {
      nickname: "yelly",
      name: "손예지",
      imageUrl: "/images/people/yelly.jpg",
      role: "5th Member",
      introduction: `프론트와 백 모두 잘하고 싶은 욕심쟁이 개발자입니다`,
      description: `work play coffee`,
      email: "yejison98@gmail.com",
      linkedinURL: "",
      githubURL: "https://github.com/yezgoget",
      blogURL: " https://velog.io/@yellyjelly",
      otherURL: "",
    },
    {
      nickname: "dwp",
      name: "박다원",
      imageUrl: "/images/people/dwp.jpg",
      role: "5th Member",
      introduction: `데이터 엔지니어를 꿈꾸는 다이버입니다.
    배움과 사람을 좋아합니다.`,
      description: "UNDER THE SEA!🎶",
      email: "workpanda.n@gmail.com",
      linkedinURL: "",
      githubURL: "https://github.com/dawonparkk",
      blogURL: "",
      otherURL: "",
      awardList: ["2021_award_guessing_the_song_3rd"],
    },
    {
      nickname: "prayme",
      name: "황성찬",
      imageUrl: "/images/people/prayme.jpg",
      role: "5th Member",
      introduction: `예비 백엔드 개발자입니다.
함께 일하고 싶은 사람이 되고 싶습니다.`,
      description: "저 오늘 한가해요 ~ 😘",
      email: "dbfpzk142@gmail.com",
      linkedinURL: "https://www.linkedin.com/in/prayme/",
      githubURL: "https://github.com/plzprayme",
      blogURL: "https://velog.io/@prayme",
      otherURL: "",
      awardList: [
        "2021_chuseok_tetris_bronze",
        "2021_aws_community_day_presenter",
        "2021_bigchat",
      ],
    },
    {
      nickname: "gineepark",
      name: "박진희",
      imageUrl: "/images/people/gineepark.jpg",
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
      imageUrl: "/images/people/sulmo.jpg",
      role: "5th Member",
      introduction: `웹에 관심이 있습니다.앞으로 프론트엔드를 많이 파보려 합니다!`,
      description: "넘모 행보카고!!",
      email: "tjdah0853@gmail.com",
      linkedinURL: "",
      githubURL: "https://github.com/JeoungSulMo",
      blogURL: "https://jeoungsulmo.github.io/",
      otherURL: "",
      awardList: [
        "2021_chuseok_tetris_gold",
        "2021_book_reading",
        "2021_aws_community_day_participant",
      ],
    },
    {
      nickname: "nanaeu",
      name: "이유진",
      imageUrl: "/images/people/nanaeu.jpg",
      role: "5th Member",
      introduction: `백엔드 개발자를 희망하고 있어요!
다같이 즐겁게 활동해보아요😊`,
      description: "🐣🐣🐣",
      email: "lyubliss@gmail.com",
      linkedinURL: "",
      githubURL: "https://github.com/nanaeu",
      blogURL: "",
      otherURL: "",
    },
    {
      nickname: "say-young",
      name: "장세영",
      imageUrl: "/images/people/say-young.jpg",
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
      imageUrl: "/images/people/devwithpug.jpg",
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
      imageUrl: "/images/people/baejiann.jpg",
      role: "5th Member",
      introduction: `서비스 기획으로 문제를 해결하는 사람이 되고 싶습니다.`,
      description: `파도가 와요.
서핑을 해야겠네요.`,
      email: "baejiann120@naver.com",
      linkedinURL: "https://www.linkedin.com/in/jian-bae-117756201/",
      githubURL: "https://github.com/BAEJIANN",
      blogURL: "",
      otherURL: "",
      awardList: [
        "2021_baekak_mountain",
        "2021_book_reading",
        "2021_aws_community_day_master",
        "2021_bigchat",
        "2021_award_guessing_the_song_1st",
      ],
    },
    {
      nickname: "ohyes",
      name: "오예림",
      imageUrl: "/images/people/ohyes.jpg",
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
      imageUrl: "/images/people/gimquokka.jpg",
      role: "5th Member",
      introduction: `Spring, Cloud, DevOps 등에 관심이 많고 잘하는 Backend Software Engineer가 되고 싶습니다.`,
      description: "Learning by Doing 💻",
      email: "gimquokka@gmail.com",
      linkedinURL: "https://www.linkedin.com/in/gimquokka/",
      githubURL: "https://github.com/gimquokka",
      blogURL: "https://gimquokka.github.io/",
      otherURL:
        "https://kwize.com/pics/Linus-Torvalds-quote-about-talking-2a9797.jpg",
    },
    {
      nickname: "sangwoo",
      name: "나상우",
      imageUrl: "/images/people/sangwoo.jpg",
      role: "5th Member",
      introduction: "백엔드, 프론트, 인프라 모두 다 좋아해요~!",
      description: "칼퇴하는 개발자가 되자.",
      email: "robbyra@gmail.com",
      linkedinURL: "https://www.linkedin.com/in/sangwoo-ra-845529202/",
      githubURL: "https://github.com/sang-w0o",
      blogURL: "https://github.com/sang-w0o/Study",
      otherURL: "",
      awardList: ["2021_aws_community_day_participant"],
    },
    {
      nickname: "ywoosang",
      name: "윤우상",
      imageUrl: "/images/people/ywoosang.jpg",
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
      imageUrl: "/images/people/jinseok.jpg",
      role: "5th Member",
      introduction: `데이터가 움직이는 것을 다루고 바라보는 일을 굉장히 좋아합니다👻`,
      description: "안녕하세요🙂",
      email: "jinseock95@gmail.com",
      linkedinURL: "https://www.linkedin.com/in/진석-오-6894841a7/",
      githubURL: "https://github.com/jinseock95",
      blogURL: "https://velog.io/@jinseock95",
      otherURL: "",
    },
    {
      nickname: "namrmino",
      name: "남정재",
      imageUrl: "/images/people/namrmino.jpg",
      role: "5th Member",
      introduction: `End to End 프로젝트 리더가 되는 날까지 🌻🌻🌻`,
      description: "백패킹 캠퍼 갬성",
      email: "njj97@naver.com",
      linkedinURL: "https://www.linkedin.com/in/jeongjaenam/",
      githubURL: "https://github.com/namrmino",
      blogURL: "https://namrmino.tistory.com/",
      otherURL: "",
    },
    {
      nickname: "zion",
      name: "손지언",
      imageUrl: "/images/people/zion.jpg",
      role: "5th Member",
      introduction: `재밌는 것들을 쫓아 가는 사람`,
      description: "노력하겠습니다..",
      email: "sju0924@khu.ac.kr",
      linkedinURL: "",
      githubURL: "https://github.com/sju0924",
      blogURL: "",
      otherURL: "https://www.instagram.com/zzioni._.bears/",
    },
    {
      nickname: "gyunny",
      name: "최정균",
      imageUrl: "/images/people/gyunny.jpg",
      role: "5th Member",
      introduction: `늦더라도 꾸준히 원칙을 지키며 올바른 방향으로 가고자 합니다~`,
      description: "겉차속따,,",
      email: "wjdrbs966@naver.com",
      linkedinURL: "",
      githubURL: "https://github.com/wjdrbs96",
      blogURL: "https://devlog-wjdrbs96.tistory.com/",
      otherURL: "",
      awardList: ["2021_chuseok_tetris_oops"],
    },
    {
      nickname: "injeong",
      name: "최인정",
      imageUrl: "/images/people/injeong.jpg",
      role: "5th Member",
      introduction: `🍎를 좋아하는 iOS 개발자 최인정입니다`,
      description: "ㅇㅈ? 최인정 😉",
      email: "idinjeong@gmail.com",
      linkedinURL: "",
      githubURL: "https://github.com/inddoni",
      blogURL: "",
      otherURL: "",
      awardList: ["2021_chuseok_tetris_silver", "2021_book_reading"],
    },
    {
      nickname: "tony",
      name: "제갈윤",
      imageUrl: "/images/people/tony.jpg",
      role: "5th Member",
      introduction: "배우고 적용하는 것을 좋아합니다",
      description: "블로그 시작했습니다 😀😀",
      email: "ddr04014@gmail.com",
      linkedinURL: "https://www.linkedin.com/in/yunjegal/",
      githubURL: "https://github.com/freedom07",
      blogURL: "https://loggg.tistory.com/",
    },
    {
      nickname: "seongbin9786",
      name: "김성빈",
      imageUrl: "/images/people/seongbin9786.jpg",
      role: "5th Member",
      introduction: "팀에게, 소비자에게 좋은 사람이 되고 싶습니다.",
      description: "공부합시다",
      email: "seongbin9786@gmail.com",
      githubURL: "https://github.com/seongbin9786",
      blogURL: "https://jsqna.com/",
    },
    {
      nickname: "enif.lee",
      name: "이진성",
      imageUrl: "/images/people/enif.lee.jpg",
      role: "5th Member",
      introduction: "같이 코딩해요!",
      description: "Use `import` for Boosting your company! 😁",
      email: "enif.lee@gmail.com",
      githubURL: "https://github.com/enif-lee",
      blogURL: "https://sticky32.tistory.com/",
      awardList: [
        "2021_book_reading",
        "2021_aws_community_day_presenter",
        "2021_bigchat",
      ],
    },
  ],
  "4th": [
    {
      nickname: "connor614",
      name: "김민태",
      imageUrl: "/images/people/connor614.jpg",
      role: "4th Organizer",
      email: "k.connor614@gmail.com",
      introduction: "어.. 4기 오거나이저 입니다 반갑습니다 :)",
      description: "햄버거는 최대 3개",
      githubURL: "https://github.com/14km",
      linkedinURL: "https://www.linkedin.com/in/mintae-kim-b1a627187/",
      awardList: [
        "2021_aws_community_day_master",
        "2021_aws_community_day_presenter",
        "2021_bigchat",
      ],
    },
    {
      nickname: "suyeon96",
      name: "우수연",
      imageUrl: "/images/people/suyeon96.jpg",
      role: "4th Regulator",
      email: "dntndus9611@gmail.com",
      introduction:
        "Cloud & DevOps Engineer. Data에 관심이 많으며 최근에는 AI/ML 공부 중입니다.",
      description: "GCP 합시다",
      githubURL: "https://github.com/suyeon96",
      linkedinURL: "https://www.linkedin.com/in/suyeon-woo",
      blogURL: "https://suyeon96.tistory.com/",
      awardList: ["2021_aws_community_day_presenter", "2021_bigchat"],
    },
    {
      nickname: "akrso06197",
      name: "권주희",
      imageUrl: "/images/people/akrso06197.jpg",
      role: "4th Regulator",
      email: "akrso06197@naver.com",
      introduction:
        "안녕하세요. 권주희입니다. 아직 배울 게 많은 주니어 개발자입니다. 항상 겸손한 자세로 더욱 성장하는 개발자가 되겠습니다.",
      description: "Once and For All",
      githubURL: "https://github.com/victoriagjh",
      linkedinURL: "https://www.linkedin.com/in/victoriagjh/",
      blogURL: "https://victoria-k.tistory.com/",
      otherURL: "https://www.instagram.com/vic._.toree",
      awardList: ["2021_bigchat"],
    },
    {
      nickname: "kpic1638",
      name: "김성익",
      imageUrl: "/images/people/kpic1638.jpg",
      role: "4th Regulator",
      email: "kpic1638@gmail.com",
      introduction:
        "욕심과 기울기가 큰 사람이 되고 싶습니다. AIOps, DevOps, Backend, 무엇보다 스타트업계와 사람에 관심이 많습니다.",
      description: "AI 하지마\n그게 뭔데\nAI 하지말라고\n그거 어떻게 하는건데",
      githubURL: "https://github.com/SeongIkKim",
      blogURL: "https://blogik.netlify.app/",
      awardList: [
        "2021_aws_community_day_master", 
        "2021_bigchat",
        "2021_award_guessing_the_song_2nd"
      ],
    },
    {
      nickname: "eunsukimme",
      name: "김은수",
      imageUrl: "/images/people/eunsukimme.jpg",
      role: "4th Regulator",
      email: "eunsu.dev@gmail.com",
      introduction:
        "배우고 성장하는 것을 좋아하는 프론트엔드 개발자입니다. 클라우드에 관심이 많습니다 :)",
      description: "while(true) { coding(); coffee(); sleep(); }",
      githubURL: "https://github.com/eunsukimme",
      linkedinURL: "https://www.linkedin.com/in/eunsukimme/",
      blogURL: "https://blog.eunsukim.me/",
      awardList: ["2021_bigchat"],
    },
    {
      nickname: "naru200",
      name: "배진수",
      imageUrl: "/images/people/naru200.jpg",
      role: "4th Regulator",
      email: "jinsu2504@gmail.com",
      introduction: "사람 만나는 걸 좋아하는 프론트엔드 개발자입니다 :)",
      description: "커피 많이 아주 많이 좋아합니다!",
      githubURL: "https://github.com/naru200",
      linkedinURL: "https://www.linkedin.com/in/naru200/",
      awardList: ["2021_aws_community_day_master", "2021_bigchat"],
    },
    {
      nickname: "danmin",
      name: "이정민",
      imageUrl: "/images/people/danmin.jpeg",
      role: "4th Member",
      email: "ljm991108@gmail.com",
      introduction: "취미는 뒹굴기, 직업은 프론트엔드 개발자",
      description: "장래희망: 돌",
      githubURL: "https://github.com/danmin20",
      blogURL: "https://danminblog.tistory.com/",
      linkedinURL: "https://www.linkedin.com/in/정민-이-1927881a8/",
      awardList: ["2021_aws_community_day_master", "2021_bigchat"],
      otherURL: 'https://jeong-min.com/',
    },
    {
      nickname: "einokt",
      name: "오규태",
      imageUrl: "/images/people/einokt.jpg",
      role: "4th Member",
      email: "einokt@naver.com",
      introduction:
        "현재 컴퓨터공학과 3학년으로 대학교를 다니고 있는 오규태라고 합니다. 영상스트리밍이나 영상처리에 관심을 많이 갖고있습니다.",
      description: "행운은 용감한 자를 돕는다",
      githubURL: "https://github.com/RustShark",
      linkedinURL: "https://www.linkedin.com/in/규태-오-b26582189/",
      blogURL: "https://blog.naver.com/einokt",
      awardList: ["2021_bigchat"],
    },
    {
      nickname: "jsh",
      name: "정승호",
      imageUrl: "/images/people/jsh.jpg",
      role: "4th Member",
      introduction: `Python, Cloud, 맛집을 사랑하는 개발자.`,
      description: "더 넓은 세상 밖으로 🚀",
      email: "wony9795@gmail.com",
      linkedinURL: "https://www.linkedin.com/in/seungho-jeong-79684b210/",
      githubURL: "https://github.com/Jeoungseungho",
      awardList: ["2021_baekak_mountain", "2021_bigchat"],
    },
  ],
  "3rd": [
    {
      nickname: "roeniss2",
      name: "문성혁",
      imageUrl: "/images/people/roeniss2.jpg",
      role: "3rd Organizer",
      email: "roeniss2@gmail.com",
      introduction: "alias cd='rm -rf /'",
      description: "이 사이트의 이스터에그를 모두 찾아보세요",
      githubURL: "https://github.com/roeniss",
      linkedinURL: "https://www.linkedin.com/in/roenissmoon/",
      blogURL: "https://velog.io/@roeniss",
      otherURL: "https://roeniss.tistory.com/",
      awardList: [
        "2021_baekak_mountain",
        "2021_book_reading",
        "2021_aws_community_day_participant",
        "2021_bigchat",
      ],
    },
    {
      nickname: "cadenzah93",
      name: "김정모",
      imageUrl: "/images/people/cadenzah93.jpg",
      role: "3rd Regulator",
      email: "cadenzah93@gmail.com",
      introduction:
        "주로 웹을 다룹니다. 콘솔 게임과 해산물을 좋아합니다. 따릉이 정기권 있습니다. INFJ.",
      description: "두둥실",
      githubURL: "https://github.com/cadenzah",
      linkedinURL: "https://www.linkedin.com/in/cadenzah/",
      blogURL: "https://velog.io/@cadenzah",
      awardList: ["2021_bigchat"],
    },
    {
      nickname: "siyeons",
      name: "이시연",
      imageUrl: "/images/people/siyeons.jpg",
      role: "3rd Regulator",
      email: "siyeonleeme@gmail.com",
      introduction: "클라우드 회사에서 일하는 프론트엔드 개발자입니다.",
      description: "저는 사실 골든리트리버",
      githubURL: "https://github.com/siyeons",
      linkedinURL: "https://www.linkedin.com/in/siyeon-lee-3b082b160/",
      blogURL: "https://velog.io/@sian",
    },
    {
      nickname: "chchgml10",
      name: "김초희",
      imageUrl: "/images/people/chchgml10.jpg",
      role: "3rd Member",
      email: "chchgml10@gmail.com",
      introduction:
        "Kotlin을 주로 사용하고 Android Architecture에 관심이 많습니다!",
      description: "마우스 올리신거 딱 걸림!",
      githubURL: "https://github.com/choheeis",
      blogURL: "https://choheeis.github.io/newblog/",
    },
    {
      nickname: "byunjuneseok",
      name: "변준석",
      imageUrl: "/images/people/byunjuneseok.jpg",
      role: "3rd Member",
      email: "byunjuneseok@gmail.com",
      introduction:
        "Passion for learning and adopting new technologies with a focus on finding the right tool for the job.",
      description: "“WE GON MAKE IT”",
      githubURL: "https://github.com/byunjuneseok",
      linkedinURL: "https://www.linkedin.com/in/byunjuneseok/",
      blogURL: "https://binaryflavor.com",
    },
    {
      nickname: "p4rksh",
      name: "박상훈",
      imageUrl: "/images/people/p4rksh.jpg",
      role: "3rd Member",
      email: "p4rksh@kakao.com",
      introduction: "안녕하세요! 백엔드 개발자 박상훈입니다.",
      description: "김병규 사랑해",
      githubURL: "https://github.com/p4rksh",
      blogURL: "https://velog.io/@p4rksh",
      awardList: ["2021_book_reading", "2021_bigchat"],
    },
    {
      nickname: "beygee",
      name: "김병규",
      imageUrl: "/images/people/beygee.jpg",
      role: "3rd Member",
      email: "doug0476@naver.com",
      introduction: "React, Flutter, Nest.js, Typescript 좋아해요",
      description: "이때다 싶을때 도망쳐",
      githubURL: "https://github.com/beygee",
      awardList: ["2021_bigchat"],
    },
    {
      nickname: "sds",
      name: "신동선",
      imageUrl: "/images/people/sds.jpg",
      role: "3rd Member",
      email: "sds111888@gmail.com",
      introduction: "주니어 백엔드 개발자입니다 :)",
      description: "포세이동선입니다",
      githubURL: "https://github.com/shindongsun0",
      blogURL: "https://gasungbilife.tistory.com/",
    },
    {
      nickname: "umi0410",
      name: "박진수",
      imageUrl: "/images/people/umi0410.jpg",
      role: "3rd Regulator",
      email: "dev.umijs@gmail.com",
      introduction:
        "Go, Spring, Container, Cloud 등에 관심이 많은 백엔드 개발자입니다! 다양한 기술 얘기와 완성도 있는 아키텍쳐 설계를 좋아하고 개발 말고도 이것 저것 좋아하는 에너지 있는 녀석입니다~!",
      description: "시대를 앞서가는(?) 고독한 Go 러버...",
      githubURL: "https://github.com/umi0410/",
      linkedinURL: "https://www.linkedin.com/in/jinsu-park-63a7b2179/",
      blogURL: "https://umi0410.github.io",
    },
  ],
  "2nd": [
    {
      nickname: "yebon",
      name: "김예본",
      imageUrl: "/images/people/yebon.jpg",
      role: "2nd Organizer",
      email: "v954242@gmail.com",
      introduction: "가뭄에 콩나듯한 AUSG 안드 개발자",
      description: "맥주마실 때 불러주세요🍻",
      githubURL: "https://github.com/yebonkim",
      linkedinURL: "https://www.linkedin.com/in/yebon-kim-196986175/",
      blogURL: "https://yebon-kim.tistory.com/",
    },
    {
      nickname: "rayleighko",
      name: "고명진",
      imageUrl: "/images/people/rayleighko.jpg",
      role: "2nd Member",
      email: "ray@scentlab.kr",
      introduction: "고양이 중독",
      description:
        "아아 오늘도 평안한 하루 보내고 계실런지요. 다름이 아니라 오늘은 저를 소개해보려 합니다. 우선 저는",
      githubURL: "https://github.com/rayleighko",
      linkedinURL: "https://www.linkedin.com/in/rayle",
      blogURL: "https://k-dev.medium.com",
      otherURL:
        "https://i.pinimg.com/originals/69/0d/28/690d288b651b78ecf09e776c05d977e3.jpg",
    },
    {
      nickname: "lylisha",
      name: "고윤호",
      imageUrl: "/images/people/lylisha.jpg",
      role: "2nd Member",
      email: "lylisha@gmail.com",
      introduction:
        "AUSG 2기 멤버입니다. TS가 주 언어입니다. 보안에 관심이 많습니다. 잘 부탁해요.",
      description: "진리가 너희를 자유케 하리라",
      githubURL: "https://github.com/yoonhoGo/",
      linkedinURL:
        "https://www.linkedin.com/in/%EC%9C%A4%ED%98%B8-%EA%B3%A0-006099161/",
      blogURL: "https://yoonhogo.github.io/blog",
    },
    {
      nickname: "yorr",
      name: "김상렬",
      imageUrl: "/images/people/yorr.jpg",
      role: "2nd Member",
      email: "twysg@likelion.org",
      introduction: "이것저것 좋아하는 서버 개발자입니다.",
      description: "늦었다고 생각할 때가 마지막 기회다 😋",
      githubURL: "https://github.com/sangyeol-kim",
      linkedinURL: "https://kr.linkedin.com/in/sangyeol-kim-a33b90192",
      blogURL: "https://yorr.tistory.com",
    },
    {
      nickname: "jaehee",
      name: "김재희",
      imageUrl: "/images/people/jaehee.jpg",
      role: "2nd Member",
      email: "jaeheekim970327@gmail.com",
      introduction: "스타트업에서 일하며 성장하고 있는 iOS 개발자입니다. ",
      description: "You Only Live Once",
      githubURL: "https://github.com/jaehui327",
    },
    {
      nickname: "cho2",
      name: "정초이",
      imageUrl: "/images/people/cho2.jpg",
      role: "2nd Member",
      email: "thecho2cho2@gmail.com",
      introduction:
        "안녕하세요 iOS 개발 공부중인 정초이라고 합니다 ~! 자는 시간 빼고 음악을 틀고 있을 정도로 음악듣기를 좋아합니다 🎧",
      description: "노래 추천 받습니다 ~.~",
      githubURL: "https://github.com/iamcho2",
      blogURL: "https://iamcho2.github.io/",
      awardList: [""],
    },
    {
      nickname: "minji",
      name: "조민지",
      imageUrl: "/images/people/minji.jpg",
      role: "2nd Member",
      email: "jominjimail@naver.com",
      introduction:
        "안녕하세요 건강하게 오래 살고 싶은 초록공장 직원입니다. 🌱",
      description: "룰루~",
      githubURL: "https://github.com/jominjimail",
      linkedinURL: "https://www.linkedin.com/in/minji-jo-269b38184/",
      awardList: [""],
    },
  ],
  "1st": [
    {
      nickname: "nks",
      name: "남궁선",
      imageUrl: "/images/people/nks.jpg",
      role: "1st Organizer",
      email: "nkseon@gmail.com",
      introduction: "Cloud기술과 DevOps에 관심이 많은 개발자 입니다!",
      description: "Enjoy and Smile",
      githubURL: "https://github.com/whitesoil",
      linkedinURL: "https://www.linkedin.com/in/seon-namkung/",
      blogURL: "http://bit.ly/2Oxp8OK",
      otherURL: "https://www.facebook.com/seon.namkung/",
    },
    {
      nickname: "wjh",
      name: "원지혁",
      imageUrl: "/images/people/wjh.jpg",
      role: "1st Member",
      email: "tony.w@hey.com",
      introduction: "JavaScript to Infinity 🚀",
      description: "Move fast and ship high-quality",
      githubURL: "https://github.com/tonyfromundefined",
      blogURL: "https://read.cv/tonyfromundefined",
    },
    {
      nickname: "sarahseohyun",
      name: "윤서현",
      imageUrl: "/images/people/sarahseohyun.jpg",
      role: "1st Member",
      email: "sarahseohyun@gmail.com",
      introduction:
        "음악을 좋아하고 다양한 분야를 두루 공부하는 백엔드 개발자입니다.",
      description: "Whatever - oasis",
      githubURL: "https://github.com/seohyun0120",
      linkedinURL: "https://www.linkedin.com/in/seohyunyoon/",
      blogURL: "https://seohyun0120.tistory.com/",
    },
    {
      nickname: "rdy",
      name: "류다윤",
      imageUrl: "/images/people/rdy.jpg",
      role: "1st Member",
      email: "ekdbs3675@gmail.com",
      introduction: "안녕하세요. 안드로이드 개발자 류다윤입니다.",
      description: "주식 부자 되자",
      linkedinURL: "https://www.linkedin.com/in/dayun-ryu-4272aa171/",
      blogURL: "https://ddayunee.tistory.com/",
    },
    {
      nickname: "psj",
      name: "박소정",
      imageUrl: "/images/people/psj.jpg",
      role: "1st Member",
      email: "luna.sojeong.park@gmail.com",
      introduction: "모든 분위기는 제가 살립니다! 잘 부탁드려요!",
      description: "♥♥♥",
    },
    {
      nickname: "hms",
      name: "한민수",
      imageUrl: "/images/people/hms.jpg",
      role: "1st Member",
      email: "mshan1218@naver.com",
      introduction: "Partner Manager @Microsoft",
      description: "깃헙말고 깃랩도 사랑해주세요",
      linkedinURL: "https://www.linkedin.com/in/minsu-han/",
    },
    {
      nickname: "yhk",
      name: "유호균",
      imageUrl: "/images/people/yhk.jpg",
      role: "1st Member",
      email: "yoohoogun114@naver.com",
      introduction:
        "스스로 문제를 정의하고, 그 문제를 해결해나가는 과정을 즐기는 평범한 개발자입니다.",
      description: "Fail fast, learn faster",
      linkedinURL: "https://kr.linkedin.com/in/yuhogyun",
    },
    {
      nickname: "jsw",
      name: "정소원",
      imageUrl: "/images/people/jsw.jpg",
      role: "1st Member",
      email: "swj960515@gmail.com",
      introduction: "Javascript Full Stack Developer",
      description: "(구) AUSG 1기 회식 프로 참석러",
      githubURL: "https://github.com/ss-won",
    },
    {
      nickname: "hmh",
      name: "한만혁",
      imageUrl: "/images/people/hmh.jpg",
      role: "1st Member",
      email: "rnanhyuk@gmail.com",
      introduction: "Node.js 많이 사랑해 주세요",
      description: "디지털 노마드",
      githubURL: "https://github.com/ManHyuk",
      blogURL: "https://manhyuk.github.io/",
    },
    {
      nickname: "khj",
      name: "김현중",
      imageUrl: "/images/people/khj.jpg",
      role: "1st Member",
      email: "henrynicholas09@gmail.com",
      introduction: "Data Engineering도 관심이 많은 SRE 개발자 입니다 :)",
      description: "AUSG 1기 비쥬얼 담당",
      githubURL: "https://github.com/Exubient",
      awardList: [""],
    },
    {
      nickname: "lck",
      name: "이철규",
      imageUrl: "/images/people/lck.jpg",
      role: "1st Member",
      introduction:
        "게임회사 PM을 하고 있습니다. 게임하시면서 제 생각 해주세요!",
      description: "For fun",
      blogURL: "https://www.instagram.com/lcgkiller/",
      awardList: [""],
    },
    {
      nickname: "kjc",
      name: "김종찬",
      imageUrl: "/images/people/kjc.jpg",
      role: "1st Member",
      introduction: "Android Fanatic",
      description: "AUSG였지만 AWS보다 안드로이드와 친한 개발자",
      awardList: [""],
    },
  ],
};

export default crews;
