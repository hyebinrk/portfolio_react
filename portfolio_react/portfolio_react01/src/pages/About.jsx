import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <div className="about-section">
        <img className="profile-img" src="/img/profileimg.png" alt="프로필사진" />
        <div className="profile-contact">
          <div className="profile-name">
            <span>박혜빈</span>
            <span>Park Hyebin</span>
          </div>
          <ul>
            <li>
              <div>
                <img className="mail-icon" src="/img/mail.png" alt="메일아이콘"></img>
              </div>
              <span>gpqls3698@naver.com</span>
            </li>
            <li>
              <div>
                <img className="github-icon" src="/img/github.png" alt="깃허브아이콘"></img>
              </div>
              <a className="github-link" href="https://github.com/hyebinrk" target="_blank">https://github.com/hyebinrk</a>
            </li>
            <li>
              <div>
                <img className="call-icon" src="/img/call.png" alt="전화번호아이콘"></img>
              </div>
              <span>010-6750-3698</span>
            </li>
          </ul>
        </div>
        <section className="custom-wave">
          <div className="wave-layer"></div>
        </section>
      </div>
    </>
  );
}

export default About;