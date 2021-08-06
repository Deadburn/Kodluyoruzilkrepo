import "./App.css";
import {ThemeProvider} from "./context/ThemeContext";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {

  return (
      <ThemeProvider>
        <Header />
        <hr />
        <Button />
      </ThemeProvider>
  );
}




export default App;
