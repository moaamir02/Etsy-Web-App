import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterComp = () => {
  return (
    <footer className="flex bg-blue-600 px-10 h-[300px]">
      <div className="flex items-center justify-center bg-blue-900 w-4/12">
        {/* <p className='bg-orange-500 p-7 rounded-3xl text-white text-[28px] font-semibold'>Etsy</p> */}
        <svg
          className="h-[120px] w-[120px] p-[12px] bg-orange-500 rounded-2xl"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M6.5 3.1v6s2.1 0 3.2-.1c.6.1 1.1-.3 1.2-.9.1-.1.1-.1.1-.2l.3-1.3h1l-.2 2.8.1 2.9h-1l-.2-1.1c-.1-.6-.6-1.1-1.2-1.1C9 10 6.5 10 6.5 10v5c0 1 .5 1.4 1.6 1.4h3.4c1.2.2 2.4-.5 2.8-1.6l.9-2h.8c-.1.4-.5 4-.6 4.8 0 0-3.1-.1-4.4-.1H5.2l-3.5.1v-.9l1.1-.2c.9-.1 1.2-.3 1.2-1 0 0 .1-2.2.1-5.9S4 3.9 4 3.9c0-.8-.3-.9-1.1-1.1l-1.1-.2v-.9l3.4.1h6.5c1.3 0 3.5-.2 3.5-.2s-.1 1.3-.2 4.5h-.9L13.8 5c-.3-1.5-.8-2.2-1.7-2.2H7c-.5 0-.5.1-.5.3zm13.2.7h1v3.4L24 7l-.2 1.5-3.2-.2v6c0 1.7.6 2.4 1.5 2.4.7 0 1.4-.3 1.8-.9l.5.6c-.6 1.1-1.9 1.8-3.2 1.7-1.5.1-2.8-1-2.9-2.5V8.4h-1.9v-.8c1.6-.2 2.8-1.2 3.3-3.8zm7 10.4l.6 1.5c.3.9 1.2 1.4 2.1 1.3 1.4 0 2-.7 2-1.6 0-2.8-5.4-2-5.4-5.7 0-2.1 1.7-3.1 3.9-3.1 1.1 0 2.1.2 3.2.5-.2.9-.2 1.8-.2 2.7l-.9.1-.6-1.6c-.4-.5-1-.8-1.6-.7-1 0-2 .4-2 1.5 0 2.5 5.6 2 5.6 5.7 0 2.1-1.9 3.2-4.1 3.2-1.2 0-2.3-.3-3.4-.7.1-1 .1-2.1 0-3.1h.8zM33 22c.2-1 .4-2 .6-3.1l.9-.1.3 1.7c.1.5.5.8 1 .7 1.1 0 2.4-.6 3.7-2.9-.6-1.4-2.3-5.8-3.8-9.3-.4-.9-.5-1-1-1.1l-.4-.2V7l2.4.1 3-.2v.8l-.7.2c-.4 0-.8.3-.8.7 0 .1 0 .2.1.3.2.5 1.5 4.1 2.4 6.6.8-1.7 2.4-5.5 2.6-6.2.1-.2.1-.4.2-.6 0-.4-.4-.8-.8-.8l-.7-.1v-.9l2.3.1 2.1-.1v.8l-.4.4c-.6.1-1 .5-1.2 1.1l-3.6 8.4c-2.1 4.8-4.3 5.2-5.9 5.2-.8-.1-1.6-.3-2.3-.8z"></path>
        </svg>
      </div>

      <div className="flex w-full justify-between px-10 text-white">
        <div className="pt-10">
          <h3 className=" font-bold text-[18px] text-yellow-400 underline underline-offset-8 pb-3">Shop</h3>
          <a href="">
            <p>Gift cards</p>
          </a>
          <a href="">
            <p>Etsy Registry</p>
          </a>
          <a href="">
            <p>Sitemap</p>
          </a>
          <a href="">
            <p>Etsy blog</p>
          </a>
          <a href="">
            <p>Etsy United Kingdom</p>
          </a>
          <a href="">
            <p>Etsy Germany</p>
          </a>
          <a href="">
            <p>Etsy Canada</p>
          </a>
        </div>
        <div  className="pt-10">
          <h3 className=" font-bold text-[18px] text-yellow-400 underline underline-offset-8 pb-3">Sell</h3>
          <a href="">
            <p>Sell on Etsy</p>
          </a>
          <a href="">
            <p>Teams</p>
          </a>
          <a href="">
            <p>Forums</p>
          </a>
          <a href="">
            <p>Affiliates & Creators</p>
          </a>
        </div>
        <div  className="pt-10">
          <h3 className=" font-bold text-[18px] text-yellow-400 underline underline-offset-8 pb-3">About</h3>
          <a href="">
            <p>Etsy, Inc.</p>
          </a>
          <a href="">
            <p>Policies</p>
          </a>
          <a href="">
            <p>Investors</p>
          </a>
          <a href="">
            <p>Careers</p>
          </a>
          <a href="">
            <p>Press</p>
          </a>
          <a href="">
            <p>Impact</p>
          </a>
          <a href="">
            <p>Legal</p>
          </a>
        </div>
        <div  className="pt-10">
          <h3 className=" font-bold text-[18px] text-yellow-400 underline underline-offset-8 pb-3">Help</h3>
          <a href="">
            <p>Help Centre</p>
          </a>
          <a href="">
            <p>Privacy settings</p>
          </a>
          <div className="flex gap-5 pt-5">
            <a href="">
              <FaInstagram size={30}/>
            </a>
            <a href="">
              <FaFacebook size={30} />
            </a>
            <a href="">
              <FaTwitter size={30} />
            </a>
            <a href="">
              <FaYoutube  size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
