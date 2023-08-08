import { useState } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./utils/store";
import ContactForm from "./contact-form/contact-form";
import UserList from "./user-list/user-list";

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <Provider store={store}>
      <div>
        {showForm ? (
          <>
            <ContactForm data-testid="contact-form" />
            <button onClick={() => setShowForm(false)}>Show User List</button>
          </>
        ) : (
          <>
            <UserList data-testid="user-list" />
            <button onClick={() => setShowForm(true)}>Back to Form</button>
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;
