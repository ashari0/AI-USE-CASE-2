import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import ContactForm from "./contact-form/contact-form";

function App() {
  return (
    <Provider store={store}>
      <ContactForm />
    </Provider>
  );
}

export default App;
