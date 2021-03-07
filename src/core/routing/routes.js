import Home from 'Pages/Homepage';
import Profile from 'Components/Profile/Profile';


export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/Profile',
        exact: true,
        component: Profile
    }
];