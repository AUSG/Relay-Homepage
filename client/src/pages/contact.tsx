import AppLayout from "@ausg/components/templates/AppLayout";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <AppLayout>
      <div className="contact">
        <div className="py-20 px-3 text-black">
          <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>

          <p className="text-base">AUSG와 함께 더 나은 세상을 만들어요</p>
        </div>
        <form action="https://formspree.io/f/xgeprzaq" noValidate={true} method="post">
          <div className="half">
            <input
              className="boxes"
              type="email"
              name="_replyto"
              placeholder="이메일 ( Email )"
              aria-required={true}
              data-validation-required-message="Please enter your email address."
            />
            <input
              className="boxes"
              type="text"
              name="name"
              placeholder="이름 ( Name )"
              aria-required={true}
              data-validation-required-message="Please enter your name."
            />
            <textarea
              className="boxes"
              id="message"
              name="message"
              placeholder="내용은 이메일로 답변 드립니다. ( Message )"
              aria-required={true}
              data-validation-required-message="Please enter a message."
            ></textarea>
          </div>
          <button className="sendbutton" type="submit" value="Send">
            <i className="fa fa-paper-plane">   SEND</i>
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default ContactPage;
