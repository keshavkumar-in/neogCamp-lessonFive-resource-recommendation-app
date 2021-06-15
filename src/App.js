import { useState } from "react";
import "./styles.css";

const resourcesDb = {
  html: [
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      logo: "https://developer.mozilla.org/favicon-48x48.97046865.png",
      ratings: "5/5"
    },
    {
      name: "freeCodeCamp",
      url:
        "https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5",
      logo:
        "https://www.freecodecamp.org/icons/icon-144x144.png?v=6cba562cbd10e31af925a976f3db73f7",
      ratings: "5/5"
    },
    {
      name: "W3Schools",
      url: "https://w3schools.com",
      logo: "https://www.w3schools.com/favicon.ico",
      ratings: "4/5"
    }
  ],
  css: [
    {
      name: "Learn CSS by Google",
      url: "https://web.dev/learn/css/",
      logo: "https://web.dev/images/favicon.ico",
      ratings: "5/5"
    },
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      logo: "https://developer.mozilla.org/favicon-48x48.97046865.png",
      ratings: "5/5"
    },
    {
      name: "freeCodeCamp",
      url:
        "https://www.freecodecamp.org/learn/responsive-web-design/#basic-css",
      logo:
        "https://www.freecodecamp.org/icons/icon-144x144.png?v=6cba562cbd10e31af925a976f3db73f7",
      ratings: "4/5"
    }
  ],
  javascript: [
    {
      name: "Javascript.Info",
      url: "https://javascript.info",
      logo: "https://javascript.info/img/favicon/favicon.png",
      ratings: "5/5"
    },
    {
      name: "Eloquent JavaScript",
      url: "https://eloquentjavascript.net",
      logo:
        "https://raw.githubusercontent.com/marijnh/Eloquent-JavaScript/master/html/favicon.ico",
      ratings: "5/5"
    },
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: "https://developer.mozilla.org/favicon-48x48.97046865.png",
      ratings: "4/5"
    }
  ]
};
const topics = Object.keys(resourcesDb);

export default function App() {
  const [topic, setTopic] = useState("");
  const [active, setActive] = useState();
  const topicClickHandler = (topic) => {
    setTopic(topic);
    setActive(topic);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>
          <span role="img" aria-label="Books icon">
            📚
          </span>{" "}
          Web Development Resources
        </h1>
        <p>
          Checkout my favourite resources for web development learning. Select a
          topic to get started.
        </p>
        <ul className="topics">
          {topics.map((topic) => {
            return (
              <li
                key={topic}
                onClick={() => topicClickHandler(topic)}
                className={active === topic ? "active" : ""}
              >
                {topic}
              </li>
            );
          })}
        </ul>
        {topic && (
          <div>
            <ul>
              {resourcesDb[topic].map((topic) => {
                return (
                  <div className="resourceList" key={topic.name}>
                    <img src={topic.logo} alt={topic.name} />
                    <a href={topic.url}>{topic.name}</a>
                    <span>{topic.ratings}</span>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
