import React from "react";

import {
  Box,
  Paragraph,
  Sidebar,
  Header,
  Markdown,
} from "grommet";

const MainSidebar = () => {
  return (
    <Sidebar pad="10px" margin="7px" width="medium" background="white">
      <Header align="start" direction="column">
        <h3>React</h3>
        <Markdown>
          Example
          [Source](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
        </Markdown>
        <Markdown>
          React + Backbone.js
          [Demo](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
          [Source](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
        </Markdown>
        <Markdown>
          Scala.js + React
          [Demo](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
          [Source](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
        </Markdown>
        <Markdown>
          TypeScript + React
          [Demo](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
          [Source](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
        </Markdown>
        <Markdown>
          React + Alt
          [Demo](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
          [Source](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
        </Markdown>
      </Header>

      <Box
        border={{
          color: "#c5c5c5",
          size: "xsmall",
          style: "dashed",
          side: "top",
        }}
      >
        <blockquote>
          <Paragraph margin="none">
            React is a JavaScript library for creating user interfaces. Its core
            principles are declarative code, efficiency, and flexibility. Simply
            specify what your component looks like and React will keep it
            up-to-date when the underlying data changes.
          </Paragraph>
          <Markdown>[React](https://reactjs.org/)</Markdown>
        </blockquote>
      </Box>

      <Box
        border={{
          color: "#c5c5c5",
          size: "xsmall",
          style: "dashed",
          side: "top",
        }}
      >
        <h4>Official Resources</h4>

        <ul>
          <li>
            <Markdown>
              [Tutorial](https://reactjs.org/tutorial/tutorial.html)
            </Markdown>
          </li>
          <li>
            <Markdown>
              [Philosophy](https://www.quora.com/profile/Pete-Hunt/Posts/React-Under-the-Hood)
            </Markdown>
          </li>
          <li>
            <Markdown>
              [Support](https://reactjs.org/community/support.html)
            </Markdown>
          </li>
          <li>
            <Markdown>
              [Flux architecture
              example](https://github.com/facebook/flux/tree/main/examples/flux-todomvc)
            </Markdown>
          </li>
        </ul>
      </Box>

      <Box
        border={{
          color: "#c5c5c5",
          size: "xsmall",
          style: "dashed",
          side: "top",
        }}
      >
        <h4>Community</h4>

        <ul>
          <li>
            <Markdown>
              [ReactJS on Stack
              Overflow](https://stackoverflow.com/questions/tagged/reactjs)
            </Markdown>
          </li>
          <li>
            <Markdown>
              [Google Groups Mailing
              List](https://groups.google.com/access-error?continue=https://groups.google.com/g/reactjs)
            </Markdown>
          </li>
          <li>
            <Markdown>[IRC](irc://chat.freenode.net/reactjs)</Markdown>
          </li>
        </ul>
      </Box>

      <Box
        border={{
          color: "#c5c5c5",
          size: "xsmall",
          style: "dashed",
          side: "top",
        }}
      >
        <em>
          If you have other helpful links to share, or find any of the links
          above no longer work, please let us know.
        </em>
      </Box>
    </Sidebar>
  );
};

export default MainSidebar;
