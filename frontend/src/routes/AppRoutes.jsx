import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Blog from '../pages/Blog';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
    </Routes>
);

export default AppRoutes;
