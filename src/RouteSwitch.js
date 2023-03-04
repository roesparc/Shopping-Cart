const { BrowserRouter } = require("react-router-dom");

const RouteSwitch = () => (
  <BrowserRouter>
    <header>
      <h1>Towel Worl</h1>
    </header>
    <main></main>
    <footer>
      <p>
        By <a href="https://github.com/roesparc/">roesparc</a>
      </p>
      <a href="https://github.com/roesparc/">
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  </BrowserRouter>
);

export default RouteSwitch;
