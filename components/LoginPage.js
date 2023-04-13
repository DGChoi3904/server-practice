import React from 'react';
//로그인페이지 함수를 export.
//React.createElement()를 사용하여 컴포넌트를 제작(직관적이지 않은 이유는 이것 때문에.)
export default function LoginPage() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "로그인 페이지"),
    React.createElement("form", { action: "/login", method: "POST" }, 
      React.createElement("label", null, "ID: ", 
        React.createElement("input", { type: "text", name: "id" })
      ),
      React.createElement("label", null, "Password: ", 
        React.createElement("input", { type: "password", name: "password" })
      ),
      React.createElement("button", { type: "submit" }, "로그인")
    )
  );
}
