import Landing from "./components/Landing"
import Contact from "./components/Contact"


import {Route,BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      
        <Route path="/landing" component={Landing} />
        <Route path="/contact" component={Contact} />
      
    </BrowserRouter>
  );
}

export default App;

