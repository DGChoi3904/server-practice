
(function() {
  function LoginPage() {
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "로그인 페이지2"),
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
  console.log("이거 읽혔다?");
  window.LoginPage = LoginPage;
})();
