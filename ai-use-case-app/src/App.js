import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>Test</div>
    </Provider>
  );
}

export default App;
