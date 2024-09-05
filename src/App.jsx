import TodoSection from "./components/shared/TodoSection";
import useLocalStorage from "./components/hooks/useLocalStorage";
import { Style } from "./components/styles/App.styles";
import Header from "./Header";
import { Global, css } from "@emotion/react";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [completed, setCompleted] = useLocalStorage("completed", []);

  const handleFormSubmit = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const handleToggleTodo = (index, isCompleted) => {
    if (isCompleted) {
      const newCompleted = completed.filter((_, i) => i !== index);
      const todoToMove = completed[index];
      setCompleted(newCompleted);
      setTodos((prev) => [todoToMove, ...prev]);
    } else {
      const newTodos = todos.filter((_, i) => i !== index);
      const completedTodo = todos[index];
      setTodos(newTodos);
      setCompleted((prev) => [completedTodo, ...prev]);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const deleteDone = (index) => {
    const newCompleted = completed.filter((_, i) => i !== index);
    setCompleted(newCompleted);
  };

  return (
    <div>
      <Global
        styles={css`
          @font-face {
            font-family: "DungGeunMo";
            src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff")
              format("woff");
            font-weight: normal;
            font-style: normal;
          }

          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }

          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }
          body {
            font-family: "DungGeunMo";
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #595ca1;
            background-image: url("/public/arcade.png");
            background-size: 1430px;
            background-position: 49%;
            background-repeat: no-repeat;
          }
          input {
            font-family: "DungGeunMo";
          }
          ol,
          ul {
            list-style: none;
          }
          blockquote,
          q {
            quotes: none;
          }
          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: "";
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
        `}
      />

      <Style.AppWrapper>
        <Header handleFormSubmit={handleFormSubmit} />

        <Style.TodoSectionWrapper>
          <TodoSection
            title="IN PROGRESS"
            items={todos}
            onToggle={handleToggleTodo}
            onDelete={deleteTodo}
            isCompleted={false}
          />

          <TodoSection
            title="COMPLETED"
            items={completed}
            onToggle={handleToggleTodo}
            onDelete={deleteDone}
            isCompleted={true}
          />
        </Style.TodoSectionWrapper>
      </Style.AppWrapper>
    </div>
  );
}
