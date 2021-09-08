import Intro from "@ausg/components/molecules/Intro";
import AppLayout from "@ausg/components/templates/AppLayout";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  // Easter egg ~ (발동 조건 : 상단 h1 글씨 클릭)
  const onClickHandlerForEasterEgg = () => {
    alert("You found another egg! 🥚");
  };
  // ~ Easter egg

  return (
    <AppLayout>
      <Intro title="Contact Us" />
      <div className="contact max-w-4xl mx-auto">
        <div className="mx-4">
          <form
            action="https://formspree.io/f/xgeprzaq"
            noValidate={true}
            method="post"
          >
            <div className="half">
              <input
                className="boxes"
                type="email"
                name="_replyto"
                placeholder="연락 받으실 이메일"
                aria-required={true}
                data-validation-required-message="Please enter your email address."
              />
              <input
                className="boxes"
                type="text"
                name="name"
                placeholder="보내시는 분 성함"
                aria-required={true}
                data-validation-required-message="Please enter your name."
              />
              <textarea
                className="boxes"
                id="message"
                name="message"
                placeholder="무엇이든 편하게 말씀주세요"
                aria-required={true}
                data-validation-required-message="Please enter a message."
              ></textarea>
            </div>
            <button className="sendbutton" type="submit" value="Send">
              <i className="fa fa-paper-plane"> SEND &nbsp;</i>
            </button>
          </form>
          <div
            className="py-10 px-3 text-black"
            onClick={onClickHandlerForEasterEgg}
          ></div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ContactPage;
