
import './App.css';


function App() {
  return(
    <div className='App'>
      <div className='Homepage' style={{
        backgroundImage:  `url('https://i.pinimg.com/564x/6e/2a/d8/6e2ad8a3aeebf3741aa5b3cf1fdb0b90.jpg')`
      }}>

    <div className='Navbar' /*ref={homeRef}*/>
      <div className='Navbar-wrapper'>
       <h3 className='Logo'>PRODLUNA</h3>
       <ul className='Logo-label'>
        <li className='Producer-label'>PRODUCER</li>
        <li className='Musician-label'>MUSICIAN</li>
        </ul>
      </div>

      <div className='Navbar-wrapper-right'>
      <ul className='Header-links'>
      <li className='Catalogue'>Beat Catalogue</li>
      <li className='Pricing'>Pricing</li>
      <li className='Credits'>Credits</li>
      <li className='Contact'>Contact</li>
     </ul>
     </div>
    </div>

    <div className='Homepage-wrapper'>
      <div className='Bio-wrapper'>
      <div className='Bio-title'>YOUR NEXT HIT STARTS HERE</div>
      <div className='Bio-ul-wrapper'>
        <ul className='Bio-ul'>
          <li className='li-item'>All beats are original</li>
          <li className='li-item'>Simple licensing options</li>
          <li className='li-item'>Reach out to me for other enquiries/ quotes</li>
        </ul>
      </div>
      </div>
      </div>
    </div>

    <div className='Sticky-icons'></div>
    </div>

   
  );
     
  
}

export default App;
