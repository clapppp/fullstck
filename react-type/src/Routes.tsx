import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";
import App from "./App";
import { UserPage } from "./pages/UserPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { lazy, Suspense } from "react";
import { ContactPage } from "./pages/ContactPage";
import { ThanksPage } from "./pages/ThanksPage";

const Admin = lazy(() => import('./pages/AdminPage'));

const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'users',
                element: <UsersPage />
            },
            {
                path: 'users/:seq',
                element: <UserPage />
            },
            {
                path: 'admin',
                element: (
                    <Suspense fallback={
                        <div className="text-center text-xl p-5">Loading...</div>
                    }>
                        <Admin />
                    </Suspense>
                )
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'submit/:name',
                element: <ThanksPage />
            }
        ]
    }
])

export function Routes() {
    return <RouterProvider router={route} />
}