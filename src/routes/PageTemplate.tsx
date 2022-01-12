import Header from "../components/header";
import Footer from "../components/footer";

import '../styles/template.scss';

export default function PageTemplate ( props: any )
{
    return (
        <div id="app">
            <Header />
            <section id="main">
                { props.children }
            </section>
            <Footer />
        </div>
    );
}

            // <div className="background">
            //     {/* <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span>
            //     <span></span> */}
            // </div>