import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import './i18n'
import { I18nextProvider } from "react";
const Layout = ({children}) => {
    return ( 
        <div className='content'>
            {/* <Suspense fallback={'Loading ...'}> */}
            {/* <I18nextProvider i18n={req.i18n}> */}
                <Navbar/>
                {children}
                <Footer/>
                {/* </I18nextProvider> */}
            {/* </Suspense> */}
        </div>
     );
}
 
export default Layout;