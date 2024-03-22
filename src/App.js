import Page from "./components/Page";
import LaunchPage from "./components/LaunchPage";

const year = 2024;

function App() {
  return (
    <main>
      <LaunchPage year={year} />
    </main>
  );
}

export default App;

/* <div className="page">
<h1 id="page-1">Page 1</h1>
<a href="#page-2">Next Page</a>
</div>
<div className="page">
<h1 id="page-2">Page 2</h1>
<a href="#page-1">First Page</a>
</div> */
