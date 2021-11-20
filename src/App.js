import BuildPage from './screens/BuildPage';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './screens/AboutPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<BuildPage />} />
          <Route path='/about' exact element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
