import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './routes/Home';
import Portfolio from './routes/Portfolio';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/andarilo" element={<Home />} />
                <Route path="/andarilo/portfolio" element={<Portfolio />} />
                <Route path="*" element={<p>Not Found</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
