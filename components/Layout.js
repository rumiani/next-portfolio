// import { Suspense } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({children}) => {
    return ( 
        <div className='content'>
                  {/* <Suspense fallback={(<div>Loading ...</div>)}> */}

                <Navbar/>
                {children}
                <Footer/>
                {/* </Suspense> */}
        </div>
     );
}
 
export default Layout;