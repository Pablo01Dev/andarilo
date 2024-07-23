import AppRoutes from './Routes';
import './global.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <AppRoutes />
      <Analytics />
    </div>
  );
}

export default App;
