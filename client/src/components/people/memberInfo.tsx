/**
 * csv format: 이름 - 기수 역할 - 자기소개(<= 50자) - 마우스 올리면 보이는 캐치프레이즈 (<= 20자) - 이메일 - 링크드인 url - 깃헙 url - 블로그 url - 기타 url
 * (각 필드에 해당하는 값이 없다면/생략하려면 delimeter를 사용해 값이 비었음을 알려주어야 함.
 *
 * csv delimeter : "|" (vertical bar)
 * line break: '\\n' (3 words)
 *
 * image: /public/images/people -> $NAME.jpg
 */

const memberInfo = `김초희|3th Member|Kotlin을 주로 사용하고 Android Architecture에 관심이 많습니다! 그리고 음... 다른 분들은 자기소개 어떻게 쓰셨나요?.? ㅋㅋㅋㅋ|마우스 올리셨죠!!!! 다 알고 있어요~ ><|chchgml10@gmail.com||https://github.com/choheeis|https://choheeis.github.io/newblog/|
권주희|4th Regulator|안녕하세요. 권주희입니다. 아직 배울 게 많은 주니어 개발자입니다. 항상 겸손한 자세로 더욱 성장하는 개발자가 되겠습니다.|Once and For All|akrso06197@naver.com|https://www.linkedin.com/in/victoriagjh/|https://github.com/victoriagjh|https://victoria-k.tistory.com/|https://www.instagram.com/vic._.toree
문성혁|3th Organizer|alias rm='rm -rf'|이틀에 하루만 자도 개운하면 좋겠다|roeniss2@gmail.com|https://www.linkedin.com/in/roenissmoon/|https://github.com/roeniss|https://velog.io/@roeniss|https://roeniss.tistory.com/
남궁선|1th Organizer|Enjoy and Smile|고양이를 좋아합니다|nkseon@gmail.com|https://www.linkedin.com/in/seon-namkung/|https://github.com/whitesoil|http://bit.ly/2Oxp8OK|https://www.facebook.com/seon.namkung/
류다윤|1th Member|안녕하세요. 안드로이드 개발자 류다윤입니다.|주식 부자 되자|ekdbs3675@gmail.com|https://www.linkedin.com/feed/||https://ddayunee.tistory.com/|
박소정|1th Member|잘 부탁드려요!|♥♥♥|luna.sojeong.park@gmail.com||||
한민수|1th Member|ex깃랩, 현 AWS 세일즈|깃헙말고 깃랩도 사랑해주세요|mshan1218@naver.com|https://www.linkedin.com/in/minsu-han/|||
유호균|1th Member|스스로 문제를 정의하고, 그 문제를 해결해나가는 과정을 즐기는 평범한 개발자입니다.|Fail fast, learn faster|yoohoogun114@naver.com|https://kr.linkedin.com/in/yuhogyun|||
고명진|2th Member|스타트업 노동자|고양이를 좋아해|ray@scentlab.kr|https://www.linkedin.com/in/rayle|https://github.com/rayleighko|https://k-dev.medium.com|https://i.pinimg.com/originals/69/0d/28/690d288b651b78ecf09e776c05d977e3.jpg
김성익|4th Regulator|욕심과 기울기가 큰 사람이 되고 싶습니다. AIOps, DevOps, Backend, 무엇보다 스타트업계와 사람에 관심이 많습니다.|AI 하지마\\n그게 뭔데\\nAI 하지말라고\\n그거 어떻게 하는건데|kpic1638@gmail.com||https://github.com/SeongIkKim|https://blogik.netlify.app/|
오규태|4th Member|현재 컴퓨터공학과 3학년으로 대학교를 다니고 있는 오규태라고 합니다. 영상스트리밍이나 영상처리에 관심을 많이 갖고있습니다.|행운은 용감한 자를 돕는다|einokt@naver.com|https://www.linkedin.com/in/규태-오-b26582189/|https://github.com/RustShark|https://blog.naver.com/einokt|
김정모|3th Regulator|주로 웹을 다룹니다. 콘솔 게임과 해산물을 좋아합니다. 따릉이 정기권 있습니다. INFJ.|두둥실|cadenzah93@gmail.com|https://www.linkedin.com/in/cadenzah/|https://github.com/cadenzah|https://velog.io/@cadenzah|
고윤호|2th Member|AUSG 2기 멤버입니다. TS가 주 언어입니다. 보안에 관심이 많습니다. 잘 부탁해요.|진리가 너희를 자유케 하리라|lylisha@gmail.com|https://www.linkedin.com/in/%EC%9C%A4%ED%98%B8-%EA%B3%A0-006099161/|https://github.com/yoonhoGo/|https://yoonhogo.github.io/blog|
윤서현|1th Member|Web과 Cloud 개발에 관심이 많습니다.|Happy Coding|sarahseohyun@gmail.com|https://www.linkedin.com/in/seohyunyoon/|https://github.com/seohyun0120|https://seohyun0120.tistory.com/|
김은수|4th Regulator|배우고 성장하는 것을 좋아하는 프론트엔드 개발자입니다. 클라우드에 관심이 많습니다 :)|while(true) { coding(); coffee(); sleep(); }|eunsu.dev@gmail.com|https://www.linkedin.com/in/eunsukimme/|https://github.com/eunsukimme|https://eunsukim.me/|
정소원|1th Member|(구) AUSG 1기 회식 프로 참석러|노는게 제일 좋아|swj960515@gmail.com||https://github.com/ss-won||
우수연|4th Regulator|Cloud & DevOps Engineer.Data에 관심이 많으며 최근에는 AI/ML 공부중입니다.|GCP 합시다|dntndus9611@gmail.com|https://www.linkedin.com/in/suyeon-woo|https://github.com/suyeon96|https://suyeon96.tistory.com/|`;
export default memberInfo;
