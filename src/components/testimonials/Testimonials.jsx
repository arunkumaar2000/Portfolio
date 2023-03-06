import "./testimonials.scss";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

export default function Testimonials() {
  return (
    <>
      <div className="section-title" id="project">
        <h2 className="project">Projects</h2>
      </div>
      <div class="testimonials">
        <div class="container">
          <div class="banner-img1"></div>
          <h1 class="name" style={{ color: "crimson" }}>
            UI for CRUD Operation
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/arunkumaar2000/Day-26.git")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("endearing-froyo-c76f84.netlify.app")
              }
            >
              View Site <IoMdOpen />
            </button>
            </div>
          <p class="description">
            This application is used for CRUD Operation.
            <br />
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img1"></div>
          <h1 class="name" style={{ color: "rgb(65, 201, 255)" }}>
            Library Management
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/arunkumaar2000/Day-32.git")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://delicate-yeot-9bd39e.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            </div>
          <p class="description">
            This application is used for Admins at Library.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img1"></div>
          <h1 class="name" style={{ color: "rgb(44, 73, 167)" }}>
            Student & Teacher Management
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/arunkumaar2000/Day-29.git")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() => window.open("https://benevolent-gumption-e1b7d8.netlify.app")}
            >
              View Site <IoMdOpen />
            </button>
            </div>
          <p class="description">
            This application is used to manage Students and Teachers at Institution.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img1"></div>
          <h1 class="name" style={{ color: "rgba(255, 0, 0, 0.534)" }}>
            Password Reset Verfication
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/arunkumaar2000/Day-43A.git")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() => window.open("sunny-kheer-ba817e.netlify.app")}
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/arunkumaar2000/Day-43B.git")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
          This application is used For password verfication.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img1"></div>
          <h1 class="name" style={{ color: "rgb(255, 65, 65)" }}>
            Mentor & Student Assigning App
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() => window.open("https://github.com/arunkumaar2000/Day-41.git")}
            >
              Github <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://m-ehig.onrender.com")
              }
            >
              View Site <IoMdOpen />
            </button>
            </div>
          <p class="description">
            This application is used in Institutes for assigning Mentor.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
            NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img1"></div>
          <h1 class="name" style={{ color: "rgb(218, 181, 181)" }}>
            Stack overflow-clone
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://github.com/arunkumaar2000/client"
                )
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://stack-over-flow-cloned.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/arunkumaar2000/server")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This site is Display clone.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
