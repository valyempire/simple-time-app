function tick() {
  const element = /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("h1", { className: "hello" }, "Hello ! How are you today ? "), /*#__PURE__*/
  React.createElement("h2", null, "The time is ", new Date().toLocaleTimeString(), "."));



  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);