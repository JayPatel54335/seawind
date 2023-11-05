import React from 'react'
import './Page1.css';
import smallimg from '../../../Images/OIP.jpg'
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Page5 from '../Page5/Page5';
import Page6 from '../Page6/Page6';
function Page1() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>SeaWind</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="yo.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossOrigin="anonymous"
  />
  <div className="header">
    <div className="header2">
      <div className="navbar">
        <div className="left">
          <div className="logo">Logo</div>
        </div>
        <div className="right">
          <ul>
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>Item </li>
            <li>Item </li>
            <li>Item </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="rr"></div>
  </div>
  <div className="secondcom">
    <h1>WELCOME</h1>
  </div>
  <div className="text-center">
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 1</div>
    </div>
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 2</div>
    </div>
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 3</div>
    </div>
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 4</div>
    </div>
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 5</div>
    </div>
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 6</div>
    </div>
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 7</div>
    </div>
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 8</div>
    </div>
    <div className="image-container">
      <img src={smallimg} className="rounded" alt="..." />
      <div className="image-text">Text for Image 9</div>
    </div>
    <div className="btndiv">
      <button type="button" className="btn btn-primary ">
        Button
      </button>
    </div>
  <Page2/>
  <Page3/>
  <Page4/>
  <Page5/>
  <Page6/>
  </div>
</>

  )
}

export default Page1