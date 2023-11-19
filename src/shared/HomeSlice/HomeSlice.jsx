import React, { useState } from "react";
import { Nav } from "react-bootstrap";

import "./HomeSlice.scss";

import appbg1 from "../../assets/appElipse1.png";
import appbg2 from "../../assets/appElipse2.png";
import human1 from "../../assets/ai-human-1.png";
import human2 from "../../assets/ai-human-2.jpg";
import arrow from "../../assets/arrow.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import logo from "../../assets/logo.png";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";

export default function HomeSlice() {
  const experts = [
    {
      firstName: "Jane Doe",
      profession: "Javascript developer",
      image: human1,
    },
    {
      firstName: "Kanye Dann",
      profession: "UX/UI designer",
      image: human2,
    },
  ];
  const handleSetIndex = (to) => {
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, 200);
    }).then(() => {
      switch (to) {
        case "forward":
          index + 1 < experts.length ? setIndex((i) => i + 1) : setIndex(0);
          break;
        case "back":
          index > 0 ? setIndex((i) => i - 1) : setIndex(experts.length - 1);
          break;
      }
    });
  };
  const [index, setIndex] = useState(0);
  const boxes = [
    {
      img: box1,
      head: "Development & IT",
      desc: "Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.",
    },
    {
      img: box2,
      head: "Development & IT",
      desc: "Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.",
    },
    {
      img: box3,
      head: "Development & IT",
      desc: "Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.",
    },
    {
      img: box3,
      head: "Development & IT",
      desc: "Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.",
    },
    {
      img: box2,
      head: "Development & IT",
      desc: "Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.",
    },
    {
      img: box1,
      head: "Development & IT",
      desc: "Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.",
    },
  ];
  return (
    <div className="home-slice-container">
      <img className="bg app-bg-1" src={appbg1} alt="" />
      <img className="bg app-bg-2" src={appbg2} alt="" />
      <section className="section-1">
        <div className="left">
          <h1>Make bright ideas happen</h1>
          <h2>Brief description of the platform</h2>
          <div className="left-buts">
            <Nav.Link href="/experts">
              <button>Browse Experts</button>
            </Nav.Link>

            <button>Register as Expert</button>
          </div>
        </div>
        <div className="right">
          {/* <img className="home-window-img" src={homeWindow} alt="" /> */}

          <div className="image">
            <div className="image-top">
              <img
                className="arrow left"
                src={arrow}
                alt=""
                onClick={() => {
                  handleSetIndex("back");
                }}
              />
              <img className="image fade" src={experts[index].image} alt="" />
              <img
                className="arrow arr-right"
                src={arrow}
                alt=""
                onClick={() => {
                  handleSetIndex("forward");
                }}
              />
            </div>
            <h2 className="firstName">{experts[index].firstName}</h2>
            <h2 className="profession">{experts[index].profession}</h2>
          </div>
        </div>
        <h1 className="mistake1">How It Works</h1>
      </section>
      <section className="section-2">
        <div>
          <img src={one} className="N" alt="" />
          <h3>Target Identification and Prioritization</h3>
          <p>
            Nightingale's AI algorithms analyze vast amounts of biological and
            genetic data to identify.
          </p>
        </div>
        <div>
          <img src={two} className="N" alt="" />
          <h3>Target Identification and Prioritization</h3>
          <p>
            Nightingale's AI algorithms analyze vast amounts of biological and
            genetic data to identify.
          </p>
        </div>
        <div>
          <img src={three} className="N" alt="" />
          <h3>Target Identification and Prioritization</h3>
          <p>
            Nightingale's AI algorithms analyze vast amounts of biological and
            genetic data to identify.
          </p>
        </div>
      </section>
      <section className="section-3">
        <img src={logo} alt="" />
        <div>
          <h2>The brains behind this</h2>
          <p>
            Our mission at Experts.ai is to bridge the gap between visionary
            businesses and exceptional AI talent. We believe that AI has the
            potential to revolutionize industries and create unprecedented
            value, but only when placed in the hands of those who truly
            understand its complexities and capabilities. We strive to
            facilitate collaborations that yield not only groundbreaking
            technological advancements but also foster learning and growth for
            both our clients and experts. We pride ourselves on being more than
            just a platform – we're a community where brilliance converges. Our
            platform serves as a hub where businesses seeking AI expertise can
            seamlessly connect with a curated network of AI specialists, data
            scientists, machine learning engineers, and visionaries. We
            meticulously vet our experts, ensuring that only the most
            accomplished and forward-thinking minds become part of the
            Experts.ai community.
          </p>
        </div>
      </section>
      <section className="section-4">
        <h3 className="heading">Browse expert by category</h3>
        {boxes.map((e, i) => (
          <div className="box" key={i}>
            <img src={e.img} alt="" />
            <h4>{e.head}</h4>
            <p>{e.desc}</p>
            <p className="end">Explore more</p>
          </div>
        ))}
      </section>
    </div>
  );
}
