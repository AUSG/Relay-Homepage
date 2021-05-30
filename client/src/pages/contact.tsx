import Intro from "@ausg/components/molecules/Intro";
import AppLayout from "@ausg/components/templates/AppLayout";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <AppLayout>
      <Intro
        title="Contact Us"
        description="AUSG와 함께 더 나은 세상을 만들어요"
      />
      <div className="contact">
        <form action="https://formspree.io/f/xgeprzaq" method="post">
          <div className="half left">
            <input
              className="boxes"
              type="email"
              name="_replyto"
              placeholder="이메일 ( Email )"
            />
            <input
              className="boxes"
              type="text"
              name="name"
              placeholder="이름 ( Name )"
            />
            <input
              className="boxes"
              type="text"
              name="phone"
              placeholder="전화번호 ( Phonenumber )"
            />
          </div>
          <div className="half right">
            <textarea
              className="boxes"
              id="message"
              name="message"
              placeholder="내용 (Message)"
            ></textarea>
          </div>
          <button className="sendbutton" type="submit" value="Send">
            <i className="fa fa-paper-plane"> SEND</i>
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default ContactPage;
