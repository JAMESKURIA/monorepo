import Footer from './Footer'
import Header from './Header'

type Props = {
    children: JSX.Element
}

const Layout = (props: Props) => {
    const { children } = props

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
