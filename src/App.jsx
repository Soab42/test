import "./App.css";
import Page from "./Page";

function App() {
  return (
    <>
      <h1>There is some page list</h1>
      <main>
        {Array.from({ length: 10 }, (_, pageNo) => {
          return <Page key={pageNo} pageNo={pageNo + 1} />;
        })}
      </main>
    </>
  );
}

export default App;
