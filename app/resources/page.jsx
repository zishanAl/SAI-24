"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Corrected import for modules
import './page.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import an icon for the articles section (optional)
import { FaBook } from 'react-icons/fa'; // FontAwesome Icons for visual enhancement

const resourcesData = {
 
  articles: [
    {
      title: "Understanding Anxiety",
      link: "#",
    },
    {
      title: "Coping with Depression",
      link: "#",
    },
    {
      title: "Mindfulness for Mental Health",
      link: "#",
    },
  ],
  videos: [
    {
      title: "Guided Meditation for Anxiety",
      videoUrl: "https://www.youtube.com/embed/ZToicYcHIOU",
    },
    {
      title: "10 Minute Mindfulness Meditation",
      videoUrl: "https://www.youtube.com/embed/inpok4MKVLM",
    },
    {
      title: "Overcoming Depression: Ted Talk by Andrew Solomon",
      videoUrl: "https://www.youtube.com/embed/-eBUcBfkVCo",
    },
    {
      title: "The Power of Vulnerability - Brené Brown",
      videoUrl: "https://www.youtube.com/embed/iCvmsMzlF7o",
    },
    {
      title: "How to Make Stress Your Friend | Kelly McGonigal",
      videoUrl: "https://www.youtube.com/embed/RcGyVTAoXEU",
    },
    {
      title: "5-Minute Meditation You Can Do Anywhere",
      videoUrl: "https://www.youtube.com/embed/inpok4MKVLM",
    },
    {
      title: "Understanding Mental Health - A Ted Talk by Guy Winch",
      videoUrl: "https://www.youtube.com/embed/F2hc2FLOdhI",
    }
  ]
  
};

const Resources = () => {
  return (
    <>
    <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2
            className="heading-secondary text-center"
            style={{ color: "white" }}
          >
            Mental Health Resources
          </h2>
        </div>
      </div>
    <div className="container mx-auto p-8">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Mental Health Resources</h1> */}

      



      <section className="better-mental-health-section">
  <h1 className="section-heading">Three Steps to Better Mental Health</h1>
  <div className="content-wrapper">
    <div className="content-block">
      <h2 className="content-title">Physical Activity</h2>
      <ul className="content-list">
        <li>
          When we exercise, our bodies release stress-relieving and mood-boosting chemicals called endorphins. This is a natural way for us to increase our mental health. When we have the chance, exercising outside in the sunshine also helps us to increase Vitamin D which releases a mood-increasing brain chemical called serotonin.
        </li>
      </ul>
    </div>
    <div className="content-block">
      <h2 className="content-title">Healthy Nutrition</h2>
      <ul className="content-list">
        <li>
          Eating well-balanced meals, like those encouraged by the FDA’s MyPlate, also naturally helps us to improve our mental health by increasing brain chemicals associated with a balanced mood. Carbohydrates, like whole grains, increase serotonin. Protein-rich foods increase both norepinephrine and dopamine. Finally, fruits and vegetables help to feed our cells, including those that regulate brain chemicals.
        </li>
      </ul>
    </div>
    <div className="content-block">
      <h2 className="content-title">Proper Sleep</h2>
      <ul className="content-list">
        <li>
          Research has shown that even small amounts of sleep deprivation have a negative effect on our mood and brain function. Continued lack of proper sleep can lead to or exacerbate mental health conditions like depression. Building good sleep habits, like maintaining a regular bedtime schedule and turning off all electronics one hour before bed, can help to improve our sleep.
        </li>
      </ul>
    </div>
  </div>
</section>


   
 {/* new                 */}
      <section className="mental-wellbeing-section">
  <h1 className="section-title">Mental Well-Being</h1>
  <p className="section-subtitle">A holistic guide to care</p>
  <div className="wellbeing-grid">
    {[
      { title: "Treatment for Anxiety", url: "https://www.healthline.com/mental-health/anxiety" },
      { title: "Treatment for Depression", url: "https://www.healthline.com/mental-health/depression" },
      { title: "Better Sleep", url: "https://www.healthline.com/mental-health" },
      { title: "Nutrition & Supplements", url: "https://www.healthline.com/mental-health/nutrition-supplements" },
      { title: "Building Relationships", url: "https://www.healthline.com/mental-health/building-relationships" },
      { title: "Emotional Well-Being", url: "https://www.healthline.com/mental-health/mind-and-body" },
      { title: "Navigating Therapy", url: "https://www.healthline.com/mental-health/treatment" },
    ].map((resource, index) => (
      <a
        key={index}
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="wellbeing-card"
      >
        {resource.title}
      </a>
    ))}
  </div>
  <a href="#" className="view-more-link">
    VIEW LESS RESOURCES +
  </a>
</section>


      {/* Updated Articles Section */}
      <section className="articles-section">
  <h2 className="text-3xl font-semibold mt-10 mb-4 flex items-center">
    <FaBook className="icon text-primary" /> Articles
  </h2>
  <div className="articles-grid">
    {resourcesData.articles.map((article, index) => (
      <div key={index} className="article-card">
        <h3>{article.title}</h3>
        <a href={article.link} className="article-link">
          Read More
        </a>
      </div>
    ))}
  </div>
</section>


      {/* Videos Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Latest News Videos</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {resourcesData.videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="video-slide">
                <iframe
                  width="100%"
                  height="240"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="mt-2 text-center">{video.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
    </>
  );
};

export default Resources;
