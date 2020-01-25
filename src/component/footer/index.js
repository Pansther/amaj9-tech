import React from "react";
import "../../css/footer.css";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="store-wrapper">
                    <div id="first-alp" style={{ display: 'inline' }}>
                        อีกหลากหลายวิธีในการเลือกซื้อ: ไปที่ &nbsp;
                        <a href="Amaj9Store" style={{ display: 'inline', color: 'darkcyan' }}>Amaj9 Store</a>
                        ,&nbsp; โทร 001‑000‑69‑6969 English support available. หรือ
                        <a href="Dealer" style={{ display: 'inline', color: 'darkcyan' }}>ตัวแทนจำหน่าย</a>
                    </div>
                </div>

                <hr style={{ opacity: '50%', marginTop: '15px' }} />

                <div className="contact-wrapper">
                    <div className="copyright">Copyright © 6969 B.C. Amaj9 Technologies Inc. สงวนสิทธิ์ทุกประการ</div>
                    <div className="warp-wrapper">
                        <a id="contact" href="Instagram"><img src={require("../../img/footer/instagram.svg")} width="25" height="25" alt="ig"></img></a>
                        <a id="contact" href="https://www.facebook.com/gurock.hin"><img src={require("../../img/footer/facebook.svg")} width="25" height="25" alt="fb"></img></a>
                        <a id="contact" href="Twitter"><img src={require("../../img/footer/twitter.svg")} width="25" height="25" alt="twit"></img></a>
                        <a id="contact" href="https://vk.com/clubkonthai"><img src={require("../../img/footer/vk.svg")} width="25" height="25" alt="vk"></img></a>
                        <a id="contact" href="https://github.com/Pansther/Amaj9-Tech-Dev"><img src={require("../../img/footer/github.svg")} width="25" height="25" alt="git"></img></a>
                    </div>
                </div>

            </div>
        </div>
    );
}
