import { Flex, Grid } from '@radix-ui/themes'
import './styles.scss'
import { NavLink, Outlet } from 'react-router'

const Layout = () => {
    return (
        <Grid columns={'250px 1fr'}>
            <aside>
                <span>Sistema Criminal de SQL City</span>

                <Flex direction={'column'}>
                    <NavLink to="/">Crimes</NavLink>
                    <NavLink to="/pessoas">Pessoas</NavLink>
                    <NavLink to="/carteiras">Carteiras</NavLink>
                    <NavLink to="/entrevistas">Entrevistas</NavLink>
                    <NavLink to="/academia">Academia</NavLink>
                    <NavLink to="/facebook">Facebook</NavLink>
                </Flex>
            </aside>

            <main>
                <Outlet />
            </main>
        </Grid>
    )
}

export default Layout
