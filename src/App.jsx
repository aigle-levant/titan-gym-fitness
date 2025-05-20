// pages
import { useRoutes } from 'react-router-dom';
import router from './router.jsx';
// styles
import './styles/main.scss';

export default function App() {
    const element = useRoutes(router);
    return element;
}
