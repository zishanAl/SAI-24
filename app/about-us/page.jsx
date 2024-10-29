import React from "react";
import Link from "next/link";
import Image from "next/image";

import Facebook from "@/public/assets/icons/footer/facebook.svg";
import Instagram from "@/public/assets/icons/footer/instagram.svg";
import Whatsapp from "@/public/assets/icons/footer/whatsapp.svg";
import Linkedin from "@/public/assets/icons/footer/linkedin.svg";

const About = () => {
  return (
    <>
      <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2
            className="heading-secondary text-center"
            style={{ color: "white"}}
          >
            About Us
          </h2>
        </div>
      </div>

      <section class="py-[6rem]">
        <div class="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-30 px-[2rem] md:flex-row xl:px-0 lg:gap-20">
          <div class="text-center md:text-left md:w-full">
            <h2 class="heading-secondary" style={{ marginBottom: 0 }}>
              Get to know about us
            </h2>
            <p class="hero-description mt-9">
            Welcome to "COGNITIVE WELLNESS", your dedicated partner on the journey to cognitive wellbeing and mental fitness. Our site is designed to empower individuals of all ages to enhance their cognitive abilities, promote mental clarity, and foster emotional well-being. Here, we believe that a healthy mind is the foundation for a fulfilling life, and we are committed to helping you achieve your cognitive wellness goals.
            </p>
            <p class="hero-description mt-10">
            Our mission is to provide accessible and evidence-based cognitive wellness solutions that promote brain health, resilience, and overall well-being. We are dedicated to empowering individuals with the knowledge, tools, and lead more fulfilling lives.
            </p>
          </div>

          <div class="text-center self-center md:w-full">
            <Image 
              src="/assets/images/home/2.svg"
              width={850}
              height={650}
              className="object-contain w-full "
            />
          </div>
        </div>
      </section>

      <section class="py-[6rem] ">
        <div class="max-w-[120rem] py-[3rem] mx-auto flex flex-col gap-40 px-[2rem] md:flex-row xl:px-0 lg:gap-20">
          <div class="text-center self-center md:w-full">
            <Image
              src="/assets/images/about/social-media.svg"
              width={450}
              height={450}
              className="object-contain w-full "
            />
          </div>

          <div class="text-center md:text-left md:w-full">
            <h2 class="heading-secondary" style={{ marginBottom: 0 }}>
            Join Our <span className="text-primaryDark">Thriving Community</span> Across{" "}
              <span className="text-primaryDark">Social Media Platforms</span>
            </h2>
            <p class="hero-description mt-10">
            Welcome to our online hub, where mental health advocacy and awareness come alive. Join our thriving community across various social media platforms to connect with others who share your passion for mental well-being. Engage in enlightening conversations, access valuable resources, and stay updated on the latest initiatives and events in the realm of mental health. Together, we can break down stigmas, provide support, and spread awareness, one post, one share, and one message at a time. Your participation can make a significant impact, and we're excited to have you on board
            </p>

            {/* <Link href="/about-us" class="btn btn--primary">
              Learn more
            </Link> */}
          </div>
        </div>
      </section>


      {/* Our team */}
      <section className="py-[9.6rem]">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 text-center">
          <span className="subheading">Presenting</span>
          <h2 className="heading-secondary">Our Team</h2>
        </div>

        <div>
          <div className="px-[10rem] mx-auto max-w-[120rem] md:px-[2rem] ">
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/assets/images/home/dummy.jpg" alt="Bonnie Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-[3rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Tushar Sharma</a>
                  </h3>
                  <span className="text-gray-500 text-[1.8rem] ">
                    Web Developer
                  </span>
                  {/* <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p> */}
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/assets/images/home/dummy.jpg"
                    alt="Bonnie Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-[3rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Yatin Kumar</a>
                  </h3>
                  <span className="text-gray-500 text-[1.8rem] ">
                    Content Writer
                  </span>
                  {/* <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p> */}
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/assets/images/home/dummy.jpg"
                    alt="Jese Avatar"
                  />
                </a>

                <div className="p-5">
                  <h3 className="text-[3rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Aman Kumar</a>
                  </h3>
                  <span className="text-gray-500 text-[1.8rem] ">
                    Web Developer
                  </span>
                  {/* <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p> */}
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/assets/images/home/dummy.jpg"
                    alt="Michael Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-[3rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Ayush Kumar</a>
                  </h3>
                  <span className="text-gray-500 text-[1.8rem] ">
                    AI ML Developer
                  </span>
                  {/* <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p> */}
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-center bg-primaryLighter rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/assets/images/home/dummy.jpg"
                    alt="Michael Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-[3rem] font-bold tracking-tight text-[#333] ">
                    <a href="#">Md. Zishan Alam</a>
                  </h3>
                  <span className="text-gray-500 text-[1.8rem] ">
                    Web Developer
                  </span>
                  {/* <p className="mt-[1.2rem] mb-[1.6rem] font-light text-[#555] text-[1.6rem] ">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p> */}
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className=" bg-[#275A55] ">
        <div className="grid md:grid-cols-2">
          {/* Form */}
          <div className="px-[2rem] w-full pt-[9.6rem] pb-[6rem] ">
            <div className="mb-[10rem] md:mb-[8rem] ">
              <h2
                className="heading-secondary"
                style={{ color: "white", marginBottom: 0 }}
              >
                Get in Touch With Us
              </h2>
              <p className="text-[2rem] mt-[2rem] text-[#eee]">
              Reach out to our team for a supportive and confidential conversation.Ask anything – our experts are ready to provide the information you need.

              </p>
            </div>

            <form action="" className="cta-form">
              <div>
                <label className="text-[#eee] " htmlFor="first-name">
                  First Name
                </label>
                <input
                  name="first-name"
                  id="first-name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-[#eee]" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  name="last-name"
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div>
                <label className="text-[#eee]" htmlFor="phone">
                  Phone
                </label>
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div>
                <label className="text-[#eee]" htmlFor="email">
                  Email address
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div className="lg:col-span-2">
                <label className="text-[#eee]" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message"
                  rows={6}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-[4.6rem] py-[1.8rem] bg-white rounded-[1rem] text-[1.6rem] text-primaryDark font-semibold mt-8 duration-300 hover:bg-primaryDark hover:text-white border border-primaryDark hover:border-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="contact-img--container">
            <div className="w-full h-full flex relative justify-center items-center px-[2rem] py-[9.6rem] ">
              <p className="p-[2rem] text-[3rem] text-white border border-white leading-snug rounded-[1rem] md:p-[3rem] ">
              “Take a shower, wash off the day. Drink a glass of water. 
              Make the room dark. Lie down and close your eyes. Notice the silence.
               Notice your heart. Still beating. Still fighting. You made it, after all.
                You made it, another day. 
              And you can make it one more. You’re doing just fine.” — Charlotte Eriksson
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;