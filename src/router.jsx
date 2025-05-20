import { createBrowserRouter } from 'react-router-dom';
import Default from './layouts/Default.jsx';
const modules = import.meta.glob('./pages/*.jsx');
for (const path in modules) {modules[path]().then((mod) => {console.log(mod.default)})};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {path: "", element: <Home/>},
            {path: "about", element: <About/>},
            {path: "contact-us", element: <ContactUs/>},
            {path: "pricing", element: <Pricing/>},
            {path: "services", element: <Services/>}
        ],
    },
    {path: "not-found", element: <NotFound/>},
])

export default router;