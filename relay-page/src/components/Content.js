import React from 'react'; 
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "images/-1.jpg" },
    { url: "images/0.jpg" },
    { url: "images/9.png" },
    { url: "images/18.jpg" },
];

const Content = () => ( 
    <div className="main">
        <div className="doc_content">
            <div className="title">
                <strong> AWSkrug University Student Group </strong>
            </div>
            <div className="description">
                <ul>
                    <li> AUSG는  AWS와 클라우드, 프로그래밍에 관심을 갖고 </li>
                    <li> 이와 관련 주제들로 이야기를 나누고  </li>
                    <li> 함께 성장하며 나아가는 대학생들의 모임입니다. </li>
                </ul>

                <ul>
                    <li> AUSG에서는 대학교에서 공부하는 친구들부터 현업에서 근무하는 개발자도 함께 </li>
                    <li> 다양한 사람들을 만나 소통하실 수 있습니다. </li>
                    <li> 함께 성장하며 나아가는 대학생들의 모임입니다. </li>
                </ul>

                <ul>
                    <li> AWS 한국사용자모임(https://awskrug.github.io/)과 함께하고 있어요! 😎 </li>
                </ul>
            </div>

            <table>
                <thead>
                <tr>
                    <td className="title">
                        <strong> Our Vision </strong>
                    </td>
                    <td rowSpan="2" style={{paddingTop:"30px", paddingLeft:"70px"}}>
                        <SimpleImageSlider
                            width={450}
                            height={300}
                            images={images}
                            onClickNav={(idx)=>{}}
                            onClickBullets={(idx)=>{}}
                            showNavs={true}
                            showBullets={true}
                        />
                    </td>
                </tr>
                <tr className="square_list_type">
                    <li> 우리는 각자의 경험을 나누고 함께 발전하는것을 좋아합니다. </li>
                    <li> 막히는 것이 있다면 언제든 편하게 같이 이야기합니다. </li>
                    <li> 각자의 자리에서 가진 고민들을 함께 나누며 성장하고 있습니다.</li>
                    <li> 앗, 물론 개발만이 아니라 함께 놀기도 합니다!! </li>
                </tr>
                </thead>
            </table>
        </div>
    </div>
)

export default Content;