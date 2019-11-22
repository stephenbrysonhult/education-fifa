import React from "react";
import Header from "./cmps/header";
import Landing from "./views/landing";
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fal, far, fas, fab)

function App() {
  return (
    <div className="container">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
