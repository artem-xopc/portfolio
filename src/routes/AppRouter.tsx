import React from 'react'
import { Navigate, Route, Routes } from "react-router";
import { routes, privateRoutes } from './main'

const AppRouter = () => {
    const [isAuth, setIsAuth] = React.useState(false);

    return (
        <div>
            <Routes>
                {/* {isAuth ? ( */}
                    {
                        routes.publicRoutes.map(route => (
                            <Route
                                path={route.path}
                                element={<route.element />}
                                key={route.path} />
                        ))
                    }
                {/* ) : (
                    <Route></Route>
                )} */}
            </Routes>
        </div>
    )
}

export default AppRouter;