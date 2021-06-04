/**
 * csv format: 닉네임(image file name) - 이름 - 사진 유무(O/X) - 기수 역할 - 자기소개(<= 50자) - 마우스 올리면 보이는 캐치프레이즈 (<= 20자) - 이메일 - 링크드인 url - 깃헙 url - 블로그 url - 기타 url
 * (각 필드에 해당하는 값이 없다면/생략하려면 delimeter를 사용해 값이 비었음을 알려주어야 함.
 *
 * csv delimeter : "|" (vertical bar)
 * line break: '\\n' (3 words)
 *
 * image: /public/images/people -> $NAME.jpg
 */

const memberInfo = `connor614|김민태|O|4th Organizer|어.. 4기 오거나이저 입니다 반갑습니다 :)|아, 편하게 자고싶다.|k.connor614@gmail.com|https://www.linkedin.com/in/mintae-kim-b1a627187/|github.com/14km||
roeniss2|문성혁|O|3rd Organizer|alias cd='rm -rf /'|이틀에 하루만 자도 개운하면 좋겠다|roeniss2@gmail.com|https://www.linkedin.com/in/roenissmoon/|https://github.com/roeniss|https://velog.io/@roeniss|https://roeniss.tistory.com/
suyeon96|우수연|O|4th Regulator|Cloud & DevOps Engineer. Data에 관심이 많으며 최근에는 AI/ML 공부 중입니다.|GCP 합시다|dntndus9611@gmail.com|https://www.linkedin.com/in/suyeon-woo|https://github.com/suyeon96|https://suyeon96.tistory.com/|
akrso06197|권주희|O|4th Regulator|안녕하세요. 권주희입니다. 아직 배울 게 많은 주니어 개발자입니다. 항상 겸손한 자세로 더욱 성장하는 개발자가 되겠습니다.|Once and For All|akrso06197@naver.com|https://www.linkedin.com/in/victoriagjh/|https://github.com/victoriagjh|https://victoria-k.tistory.com/|https://www.instagram.com/vic._.toree
kpic1638|김성익|O|4th Regulator|욕심과 기울기가 큰 사람이 되고 싶습니다. AIOps, DevOps, Backend, 무엇보다 스타트업계와 사람에 관심이 많습니다.|AI 하지마\\n그게 뭔데\\nAI 하지말라고\\n그거 어떻게 하는건데|kpic1638@gmail.com||https://github.com/SeongIkKim|https://blogik.netlify.app/|
eunsukimme|김은수|O|4th Regulator|배우고 성장하는 것을 좋아하는 프론트엔드 개발자입니다. 클라우드에 관심이 많습니다 :)|while(true) { coding(); coffee(); sleep(); }|eunsu.dev@gmail.com|https://www.linkedin.com/in/eunsukimme/|https://github.com/eunsukimme|https://eunsukim.me/|
einokt|오규태|O|4th Member|현재 컴퓨터공학과 3학년으로 대학교를 다니고 있는 오규태라고 합니다. 영상스트리밍이나 영상처리에 관심을 많이 갖고있습니다.|행운은 용감한 자를 돕는다|einokt@naver.com|https://www.linkedin.com/in/규태-오-b26582189/|https://github.com/RustShark|https://blog.naver.com/einokt|
naru200|배진수|O|4th Member|사람 만나는 걸 좋아하는 프론트엔드 개발자입니다 :)|커피 많이 아주 많이 좋아합니다!|jinsu2504@gmail.com|https://www.linkedin.com/in/naru200/|https://github.com/naru200|
cadenzah93|김정모|O|3rd Regulator|주로 웹을 다룹니다. 콘솔 게임과 해산물을 좋아합니다. 따릉이 정기권 있습니다. INFJ.|두둥실|cadenzah93@gmail.com|https://www.linkedin.com/in/cadenzah/|https://github.com/cadenzah|https://velog.io/@cadenzah|
siyeons|이시연|O|3rd Regulator|클라우드 회사에서 일하는 프론트엔드 개발자입니다.|저는 사실 골든리트리버|siyeonleeme@gmail.com|https://www.linkedin.com/in/siyeon-lee-3b082b160/|https://github.com/siyeons|https://velog.io/@sian|
chchgml10|김초희|O|3rd Member|Kotlin을 주로 사용하고 Android Architecture에 관심이 많습니다! 그리고 음... 다른 분들은 자기소개 어떻게 쓰셨나요?.? ㅋㅋㅋㅋ|마우스 올리셨죠!!!! 다 알고 있어요~ ><|chchgml10@gmail.com||https://github.com/choheeis|https://choheeis.github.io/newblog/|
byunjuneseok|변준석|O|3rd Member|Passion for learning and adopting new technologies with a focus on finding the right tool for the job.|“WE GON MAKE IT”|byunjuneseok@gmail.com|https://www.linkedin.com/in/byunjuneseok/|https://github.com/byunjuneseok|https://binaryflavor.com|
p4rksh|박상훈|O|3rd Member|안녕하세요! 백엔드 개발자 박상훈입니다.|김병규 사랑해|p4rksh@kakao.com||https://github.com/p4rksh|https://velog.io/@p4rksh|
beygee|김병규|O|3rd Member|React, Flutter, Nest.js, Typescript 좋아해요|이때다 싶을때 도망쳐|doug0476@naver.com||https://github.com/beygee||
sds|신동선|O|3rd Member|주니어 백엔드 개발자입니다 :)|포세이동선입니다|sds111888@gmail.com||https://github.com/shindongsun0|https://gasungbilife.tistory.com/|
beygee|김병규|O|3rd Member|React, Flutter, Nest.js, Typescript 좋아해요|이때다 싶을때 도망쳐|doug0476@naver.com||https://github.com/beygee||
sds|신동선|O|3rd Member|주니어 백엔드 개발자입니다 :)|포세이동선입니다|sds111888@gmail.com||https://github.com/shindongsun0|https://gasungbilife.tistory.com/|
umi0410|박진수|O|3rd Regulator|Go, Spring, Container, Cloud 등에 관심이 많은 백엔드 개발자입니다! 다양한 기술 얘기와 완성도 있는 아키텍쳐 설계를 좋아하고 개발 말고도 이것 저것 좋아하는 에너지 있는 녀석입니다~!|시대를 앞서가는(?) 고독한 Go 러버...|dev.umijs@gmail.com|https://www.linkedin.com/in/jinsu-park-63a7b2179/|https://github.com/umi0410/|https://umi0410.github.io|
rayleighko|고명진|O|2nd Member|스타트업 노동자|고양이를 좋아해|ray@scentlab.kr|https://www.linkedin.com/in/rayle|https://github.com/rayleighko|https://k-dev.medium.com|https://i.pinimg.com/originals/69/0d/28/690d288b651b78ecf09e776c05d977e3.jpg
lylisha|고윤호|O|2nd Member|AUSG 2기 멤버입니다. TS가 주 언어입니다. 보안에 관심이 많습니다. 잘 부탁해요.|진리가 너희를 자유케 하리라|lylisha@gmail.com|https://www.linkedin.com/in/%EC%9C%A4%ED%98%B8-%EA%B3%A0-006099161/|https://github.com/yoonhoGo/|https://yoonhogo.github.io/blog|
nks|남궁선|O|1st Organizer|Enjoy and Smile|고양이를 좋아합니다|nkseon@gmail.com|https://www.linkedin.com/in/seon-namkung/|https://github.com/whitesoil|http://bit.ly/2Oxp8OK|https://www.facebook.com/seon.namkung/
sarahseohyun|윤서현|O|1st Member|백엔드 개발자입니다.|Whatever - oasis|sarahseohyun@gmail.com|https://www.linkedin.com/in/seohyunyoon/|https://github.com/seohyun0120|https://seohyun0120.tistory.com/|
rdy|류다윤|O|1st Member|안녕하세요. 안드로이드 개발자 류다윤입니다.|주식 부자 되자|ekdbs3675@gmail.com|https://www.linkedin.com/in/dayun-ryu-4272aa171/||https://ddayunee.tistory.com/|
psj|박소정|O|1st Member|잘 부탁드려요!|♥♥♥|luna.sojeong.park@gmail.com||||
hms|한민수|O|1st Member|ex깃랩, 현 AWS 세일즈|깃헙말고 깃랩도 사랑해주세요|mshan1218@naver.com|https://www.linkedin.com/in/minsu-han/|||
yhk|유호균|O|1st Member|스스로 문제를 정의하고, 그 문제를 해결해나가는 과정을 즐기는 평범한 개발자입니다.|Fail fast, learn faster|yoohoogun114@naver.com|https://kr.linkedin.com/in/yuhogyun|||
jsw|정소원|O|1st Member|(구) AUSG 1기 회식 프로 참석러|노는게 제일 좋아|swj960515@gmail.com||https://github.com/ss-won||
hmh|한만혁|O|1st Member|아우쓱 1기 공식 인싸|프로 치킨러|rnanhyuk@gmail.com||https://github.com/ManHyuk|https://manhyuk.github.io/|
khj|김현중|O|1st Member|AUSG 1기 비쥬얼 담당|SRE 개발자 입니다|henrynicholas09@gmail.com||https://github.com/Exubient||
lcg|이철규|O|1st Member|응애입니다|:)|lcgkiller@gmail.com||||https://www.instagram.com/lcgkiller/`;

export default memberInfo;
