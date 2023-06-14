import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/layouts/Main';
import Index from './Index';


const router = createBrowserRouter([{
    path: '/', // con una ruta renderizo un componente de tipo layout
    element: <Main />, // rutas hijas 
    children: [
        {
            path: '/', element: <Index />
        },
        {
            path: '/index', element: <Index />
        }
    ]
}])

export default router;