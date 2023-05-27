// Dependencies
import { createRoot } from 'react-dom/client';

// Components
import { Pet } from './Pet';

const App = () => (
  <div>
    <Pet name="Terry02" animal="Cotorro" breed="croquetas" />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
