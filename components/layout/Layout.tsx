import { FunctionComponent } from 'react'; // importing FunctionComponent
import { Navbar, Footer } from './styles/index'
import Link from 'next/link'

type CardProps = {
    children: React.ReactNode
}

const Layout: FunctionComponent<CardProps> = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar>
                    <Link href="/">
                        <a>Chanel 21</a>
                    </Link>
                    <Link href="/sports/">
                        <a>Sports</a>
                    </Link>
                    <Link href="/business/">
                        <a>Business</a>
                    </Link>
                    <Link href="/politics/">
                        <a>politics</a>
                    </Link>
                </Navbar>
                
                kanpp
            </div>
            <div>
                {children}
            </div>
            <Footer>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </Footer>
        </div>
    )
}



export default Layout
