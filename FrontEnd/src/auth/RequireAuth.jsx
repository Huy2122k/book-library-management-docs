import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './use-auth';

export const RequireAuth = ({ role }) => {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user || !role.includes(auth.user.role)) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
};
export default RequireAuth;
