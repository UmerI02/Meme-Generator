import Navbar from './components/navbar'
import Main from './components/main'
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Navbar/>
  <Main/>
  </div>
);
