import React from 'react';


class App extends React.Component {
  render() {
    return (

  <div className="nav-box">
  <img className="logo" src={require('../../public/target2.png')}/>
  <p className="nav-text">Categories  </p><span><i className="arrow down"></i></span>
  <span className="space"></span>
  <p className="nav-text">Deals  </p><span><i className="arrow down"></i></span>
  <span className="space"></span>
  <p className="nav-text">Gifting  </p><span><i className="arrow down"></i></span>
  <span className="big-space"></span>

  <div className="search-container">
    <form>
      <input type="text" placeholder="Search" name="search" />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>

   <img className="sign-img" src={require('../../public/signin.png')}/><span><i className="arrow down"></i></span>
   <p className="signin">Sign in</p>

   <span className="space"></span>
   <img className="cart" src={require('../../public/cart.png')}/><span><i className="arrow down"></i></span>




  </div>
     )
   }
 }

export default App;