// assets
// import define_text from '.../assets/define-text.svg';
// import define_logo_solid from '.../assets/define-logo-solid.svg';
import define_logo_outline from '../assets/define-logo-outline.svg';

// styles
import '../styles/template.scss';
import '../styles/home.scss';

// scripts
// import '../scripts/intro';

// components
import Header from '../components/header';
import Footer from '../components/footer';


export default function Home()
{
  return (
    <div id="app">

        <Header />

        <section id="main">
          <section id="left-container">
            <div id="info">
              <h1 id="info-heading">
                Join #define
              </h1>
              <p id="info-text">
                We aim to build a platform that will not only encourage you to find which domain interests you but
                will also help you to come forward and gain expertise in that.
              </p>
            </div>
          </section>

          <section id="right-container">
            <div id="logo-container">
              <div id="logo-image-container">
                <img class="logo-image outline" src={define_logo_outline} alt="define logo outline" />
              </div>
            </div>
          </section>
        </section>

        <Footer />

    </div>
  );
}

// window.onload = function ()
// {
//   setTimeout(function ()
//   {
//     document.getElementById("header").classList.remove("hide-and-disable");
//     document.getElementById("left-container").classList.remove("hide-and-disable");
//     document.getElementById("footer").classList.remove("hide-and-disable");
//     document.getElementById("logo-container").classList.remove("position-center");
//     document.getElementById("logo-image-container").classList.remove("position-center");
//     removeFadeOut(document.getElementById("logo-text"), 500);
//     document.getElementsByClassName("logo-image solid")[0].classList.add("hide-and-disable");
//   }, 800);
// };

// function removeFadeOut(el, speed)
// {
//   var seconds = speed / 1000;
//   el.style.transition = "opacity " + seconds + "s ease";

//   el.style.opacity = 0;
//   setTimeout(function ()
//   {
//     el.parentNode.removeChild(el);
//   }, speed);
// }


