import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './routes/Home';
import IdentidadeVisual from './routes/IdentidadeVisual';
import Website from './routes/Website';
import Outros from './routes/Outros';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/identidade-visual" element={<IdentidadeVisual />} />
                <Route path="/website" element={<Website />} />
                <Route path="/outros" element={<Outros />} />
                <Route path="*" element={<p>Not Found</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
