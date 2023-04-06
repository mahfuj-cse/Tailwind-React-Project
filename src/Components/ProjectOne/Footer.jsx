import React from "react";
import logo from "../assets/logo-white.svg";
import fb from "../assets/icon-facebook.svg";
import i from "../assets/icon-instagram.svg";
import p from "../assets/icon-pinterest.svg";
import y from "../assets/icon-youtube.svg";
import t from "../assets/icon-twitter.svg";

function Footer() {
  return (
    <footer class="bg-veryDarkBlue">
      {/* <!-- Flex Container --> */}
      <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div>
            <img src={logo} class="h-8" alt="" />
          </div>
          {/* <!-- Social Links Container --> */}
          <div class="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}
            <a href="/">
              <img src={fb} alt="" class="h-8" />
            </a>
            {/* <!-- Link 2 --> */}
            <a href="/">
              <img src={y} alt="" class="h-8" />
            </a>
            {/* <!-- Link 3 --> */}
            <a href="/">
              <img src={t} alt="" class="h-8" />
            </a>
            {/* <!-- Link 4 --> */}
            <a href="/">
              <img src={p} alt="" class="h-8" />
            </a>
            {/* <!-- Link 5 --> */}
            <a href="/">
              <img src={i} alt="" class="h-8" />
            </a>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="/" class="hover:text-brightRed">
              Home
            </a>
            <a href="/" class="hover:text-brightRed">
              Pricing
            </a>
            <a href="/" class="hover:text-brightRed">
              Products
            </a>
            <a href="/" class="hover:text-brightRed">
              About
            </a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="/" class="hover:text-brightRed">
              Careers
            </a>
            <a href="/" class="hover:text-brightRed">
              Community
            </a>
            <a href="/" class="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;