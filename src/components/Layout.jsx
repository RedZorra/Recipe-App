import { Outlet } from 'react-router-dom';

function Layout() {
    return(
        <>
        <Header />
        <main className="container container-main">
          <Outlet />
        </main>
      </>
    )
}

export default Layout;
