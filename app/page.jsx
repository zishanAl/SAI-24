"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "flowbite-react";

import Question from "@/public/assets/images/home/question.svg";
import ArrowUp from "@/public/assets/icons/layout/arrow-up.svg";

export default function Home() {
  // const [showArrow, setShowArrow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 450) {
  //       setShowArrow(true);
  //     } else setShowArrow(false);
  //   });

  //   return () =>
  //     window.removeEventListener("scroll", () => {
  //       if (window.scrollY) {
  //         setShowArrow(true);
  //       } else setShowArrow(false);
  //     });
  // }, [window.scrollY]);

  return (
    <>
      {/* Hero */}
      <section className="bg-primaryLighter section">
        <div className="container flex flex-col gap-[10rem] md:flex-row lg:gap-[5rem]">
          <div className="text-center md:text-left md:w-full">
            <h1 className="heading-primary text-[5.2rem] mb-[3.2rem] leading-tight">
              Mental Wellness
            </h1>

            <p className="hero-description">
            Our goal is to offer readily available, science-backed cognitive well-being solutions that foster brain health, fortitude, and holistic thriving. We are committed to equipping individuals with the information, resources, and assistance necessary to enhance their cognitive capacities and live more satisfying lives.
            </p>

            <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:gap-[5rem] gap-3 mb-10">
            </div>

            <Link href="#meals" class="btn btn--primary">
              Get Started
            </Link>
          </div>

          <div class="self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-[9.6rem]">
        <div className="container">
          <span class="subheading">How it works</span>
          <h2 class="heading-secondary">How can we help you?</h2>
        </div>

        <div class="container md:py-0 d-grid grid-cols-1 md:grid-cols-2 grid--center-v">
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">Assessment and Support Evaluation</h3>
            <p class="step-description">
              : Mental health assessments involve individuals answering a series of questions to gauge their emotional well-being. These questions cover various aspects of mental health, helping to screen for potential issues. While they offer valuable insights, they are not a substitute for professional diagnosis and treatment. If concerns arise, seeking help from a mental health professional is crucial.
            </p>
          </div>
          <div class="step-image-box">
            <img
              src="/assets/images/home/1.svg"
              alt="Picture"
              class="step-image"
              loading="lazy"
            />
          </div>

          <div className="mb-20 md:hidden"></div>

          <div class="step-image-box">
            <img
              src="/assets/images/home/2.svg"
              alt="Picture"
              class="step-image"
              loading="lazy"
            />
            </div>
          <div class="step-text-box">
            <p class="step-number">02</p>
            <h3 class="heading-tertiary">Personalized Well-being Plans and Nearby Mental health centres </h3>
            <p class="step-description">
              : Tailored well-being plans are customized programs designed to meet an individual's specific needs, promoting their mental and emotional health. Nearby mental health centers refer to conveniently located facilities that offer professional support and services for individuals seeking assistance with their mental well-being and psychological concerns
            </p>
          </div>

          <div className="mb-20 md:hidden"></div>

          <div class="step-text-box">
            <p class="step-number">03</p>
            <h3 class="heading-tertiary">Ongoing Support and Resources</h3>
            <p class="step-description">
              : The resource section of a mental health and awareness website is a dedicated space providing visitors with a curated collection of valuable materials. These resources may include articles, videos, self-help tools, crisis helplines, community forums, and guidance on finding mental health professionals. It serves as a comprehensive knowledge hub to empower and assist individuals seeking information and support.
            </p>
          </div>
          <div class="step-image-box">
            <img
              src="/assets/images/home/3.svg"
              alt="Picture"
              class="step-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section class="bg-primaryLighter section">
        <div class="container flex flex-col gap-[10rem]  md:flex-row lg:gap-[5rem]">
          <div class="text-center md:text-left md:w-full">
            <h2 class="heading-secondary" style={{ marginBottom: 0 }}>
              Get to know about us
            </h2>
            <p class="hero-description mt-10">
            Our mission is to provide accessible and evidence-based cognitive wellness
             solutions that promote brain health, resilience, and overall well-being.
              We are dedicated to empowering individuals with the knowledge, tools, and 
              support they 
            need to optimize their cognitive functions and lead more fulfilling lives.</p>

            <Link href="/about-us" class="btn btn--primary">
              Learn more
            </Link>
          </div>

          <div class="text-center self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              className="object-contain w-full "
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-[9.6rem] " id="pricing">
        <div className="max-w-[120rem] py-[3rem] lg:py-0 mx-auto px-[2rem] xl:px-0  ">
          {/* <span className="subheading"></span> */}
          <h2 className="heading-secondary">
            Start Your Journey With Our Resources
          </h2>
        </div>

        <div className="max-w-[120rem] mx-auto px-[2rem] xl:px-0 grid sm:grid-cols-2 md:grid-cols-3 md:gap-[2.4rem] gap-[4.8rem]">
          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              {/* <p className="plan-name">VeeSession</p> */}
              <p className="plan-price">
                VIDs
              </p>
              <p className="plan-text mb-6">Let these videos</p>

              <div className="space-y-4">
                <p className="plan-text">guide you to a</p>
                <p className="plan-text">happier, healthier YOU</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="https://www.youtube.com/playlist?list=PLJicmE8fK0EgFqcHoA4ufzsPD6VQThV5S" target="_blank" className="btn btn--primary">
                Explore
              </a>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              {/* <p className="plan-name">VeeWorkshop</p> */}
              <p className="plan-price">
                Courses
              </p>
              <p className="plan-text mb-6">Enroll in this course</p>

              <div className="space-y-4">
                <p className="plan-text">and cultivate</p>
                <p className="plan-text">Inner Peace</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="https://www.coursera.org/courses?query=mental%20health" target="_blank" className="btn btn--primary">
              Explore
              </a>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              {/* <p className="plan-name">Blogs</p> */}
              <p className="plan-price">
                Blogs
              </p>
              <p className="plan-text mb-6">Discover the path to</p>

              <div className="space-y-4">
                <p className="plan-text">Inner peace </p>
                <p className="plan-text">and resilience</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="https://www.choosingtherapy.com/best-mental-health-blogs/" target="_blank" className="btn btn--primary">
              Explore
              </a>
            </div>
          </div>

          {/* <div className="pricing-plan pricing-plan--complete">
            <header className="plan-header">
              <p className="plan-name">Complete</p>
              <p className="plan-price">
                <span>$</span>649
              </p>
              <p className="plan-text">Every Week</p>
              <p className="plan-text">1 session</p>
            </header>

            <ul className="list">
              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>
                  <strong>2 meals</strong> meals per day
                </span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>
                  Order <strong>24/7</strong>
                </span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>Delivery is free</span>
              </li>

              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span>Get access to latest recipes</span>
              </li>
            </ul>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Start eating well
              </a>
            </div>
          </div> */}
        </div>

        {/* <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0 d-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[9.6rem] ">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              className="feature-icon"
              src="/assets/images/home/icon.svg"
              loading="lazy"
            />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              libero!
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              className="feature-icon"
              src="/assets/images/home/icon.svg"
              loading="lazy"
            />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              hic.
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              className="feature-icon"
              src="/assets/images/home/icon.svg"
              loading="lazy"
            />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              sed!
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              className="feature-icon"
              src="/assets/images/home/icon.svg"
              loading="lazy"
            />
            <p className="feature-title">Peace Again!</p>
            <p className="feature-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              incidunt.
            </p>
          </div>
        </div> */}
      </section>

      {/* Testimonials */}
      <section className="bg-primaryLight lg:grid-cols-[55fr_45fr] lg:items-center d-grid pt-[4.6rem] pb-[6.2rem] ">
        <div className="p-[6rem]">
          <div className="mb-40 lg:mb-0">
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">
              Healing Words Testimonials from Cognitive Wellness Clients
            </h2>
          </div>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                src="/assets/images/home/dave.webp"
                alt="Dave Image"
                className="testimonial-img"
                loading="lazy"
              />

              <blockquote className="testimonial-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam harum Quibusdam harum Quibusdam harum
              </blockquote>

              <p className="testimonial-name">&mdash; abc</p>
              <p className="text-[1.4rem] mt-2">Director Of HR</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/ben.webp"
                alt="Dave Image"
                className="testimonial-img"
                loading="lazy"
              />

              <blockquote className="testimonial-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam harum Quibusdam harum Quibusdam harum
              </blockquote>

              <p className="testimonial-name">&mdash; abc</p>
              <p className="text-[1.4rem] mt-2">Director Of HR</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/steve.webp"
                alt="Dave Image"
                className="testimonial-img"
                loading="lazy"
              />

              <blockquote className="testimonial-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam harum Quibusdam harum Quibusdam harum
              </blockquote>

              <p className="testimonial-name">&mdash; abc </p>
              <p className="text-[1.4rem] mt-2">Director Of HR</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/hannah.webp"
                alt="Dave Image"
                className="testimonial-img"
                loading="lazy"
              />

              <blockquote className="testimonial-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam harum Quibusdam harum Quibusdam harum
              </blockquote>

              <p className="testimonial-name">&mdash; abc</p>
              <p className="text-[1.4rem] mt-2">Director Of HR</p>
            </figure>
          </div>
        </div>

        <div className="gallery place-items-center">
          <figure className="gallery-item">
            <img
              src="/assets/images/home/17.jpg"
              alt="Photo of a happy client"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/2.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/13.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/4.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/5.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/6.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/7.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/16.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/9.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/10.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/11.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="/assets/images/home/12.jpg"
              alt="Photo of a happy client"
              srcSet=""
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Faq's */}
      <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem] lg:pb-[9.6rem]">
        <div className="text-center">
          <span className="subheading">FAQ</span>
          <h2 className="heading-secondary">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-6xl mx-auto px-[2rem] xl:px-0">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
              What is mental health?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                  Mental health is a state of mental well-being that enables people to
                   cope with the stresses of life, realize their abilities, learn well and 
                   work well, and contribute to their community. It is an integral component
                    of health and well-being that underpins our individual and collective 
                    abilities to make decisions, 
                  build relationships and shape the world we live in.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
              Are there cures for mental health problems?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                  It is often more realistic and helpful to find out 
                  what helps with the issues you face. Talking, counselling,
                   medication, friendships, exercise,
                  good sleep and nutrition, and meaningful occupation can all help.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
              What do I do if the support doesn’t help?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                  It can be difficult to find the things that will help you,
                   as different things help different people. It’s important
                    to be open to a range of approaches and to be committed to 
                    finding the right help and to continue to be hopeful, 
                  even when some things don’t work out.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
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

      {/* Arrow up */}
      {/* <Link
        href="#"
        className={`fixed p-1.5 duration-300 opacity-50 right-4 bottom-4 gradient hover:opacity-100 bg-primaryDark rounded-[5px] ${
          showArrow ? "right-2" : ""
        }`}
      >
        <ArrowUp className="w-8 h-8 text-white" />
      </Link> */}
    </>
  );
}
