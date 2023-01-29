import React from "react";
import NavBar from "../../CommonComponents/Navbar";
import oliveHandMan from "../../assets/oliveHandMan.png"
import oliveOrchard from "../../assets/oliveOrchard.png"
import Footer from "../../CommonComponents/Footer";

const AboutPage = () => {
  return (
    <main>
      <NavBar/>
      <div className="mt-20 mb-60 text-sm text-gray-600">
        <div className="flex flex-row gap-10 mx-10 my-10">
          <img src={oliveHandMan} alt="olive oil" className="w-1/2"/>
          <article className='w-1/2'>
            <div className="text-align-left">
              <h2 className="text-3xl font-medium pb-2 text-emerald-800">Our story</h2>
              <div className="m-l-0 h-1 w-1/3 mb-2 bg-yellow-300"></div>
            </div>
            <p className="max-w, m-0, mt-2 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              iure vel tempora laudantium molestias earum unde eius eum omnis
              nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, repellat.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              iure vel tempora laudantium molestias earum unde eius eum omnis
              nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, repellat.
              
            </p>
            <p className="max-w, m-0, mt-2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              iure vel tempora laudantium molestias earum unde eius eum omnis
              nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, repellat.
            </p>
          </article>
        </div>
        <div className="flex flex-row gap-10 mx-10 my-10">
          <article className='w-1/2'>
            <div className="text-align-left">
              <h2 className="text-3xl font-medium pb-2 text-emerald-800">Our commitment</h2>
              <div className="m-l-0 h-1 w-1/3 mb-2 bg-yellow-300"></div>
            </div>
            <p className="max-w, m-0,">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              iure vel tempora laudantium molestias earum unde eius eum omnis
              nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, repellat.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              iure vel tempora laudantium molestias earum unde eius eum omnis
              nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, repellat.
              
            </p>
            <p className="max-w, m-0, mt-2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              iure vel tempora laudantium molestias earum unde eius eum omnis
              nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, repellat.
            </p>
          </article>
          <img src={oliveOrchard} alt="olive oil" className="w-1/2"/>
        </div>
      </div>
      <Footer/>
    </main>
  );
};


export default AboutPage;