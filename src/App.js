import logo from './images/wildSide_logo.png';

function App() {
  return (
    <div className="App">
      <h1>The Wild Side</h1>
      <h2>Hair Salon</h2>
      <img className='logo' src={logo} alt='The Wild Side Salon' />
      <div className='bookCont'>
        <a href='https://thewildside.mylocalsalon.com/OnlineBooking/' target='_blank' rel="noreferrer">
          <button class="btn-101">
            BOOK APPOINTMENT!
            <svg>
              <defs>
                <filter id="glow">
                  <fegaussianblur result="coloredBlur" stddeviation="5"></fegaussianblur>
                  <femerge>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="SourceGraphic"></femergenode>
                  </femerge>
                </filter>
              </defs>
              <rect />
            </svg>
          </button>
        </a>

      </div>
    </div>
  );
}

export default App;
