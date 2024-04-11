import './scss/app.scss';
import './App.css';
import Main from './pages/Main';

import { CursorProvider } from './utils/cursorContext';

function App() {
  return (
    <CursorProvider>
      <div className="content">
        <Main />
      </div>
    </CursorProvider>
  );
}

export default App;
