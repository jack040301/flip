import './App.css';
import React from 'react';

function App() {
  
  const click1 = () => {
    
const card = document.querySelector(".card__inner");
card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});
  }


  return (
    <div className="App" onClick={click1}>
     <div className="card" >
		<div className="card__inner"  >
			<div className="card__face card__face--front">
				<h2>To Jeyel</h2>
    
			</div>
			<div className="card__face card__face--back">
				<div className="card__content">
					<div className="card__header">
						<img src="chibi.gif" alt="" className="pp" />
						<h2>I MISS YOU</h2>
					</div>
					<div className="card__body">
						<h3>Dear Jeyel</h3>
						<p align="justify">Pashnea kaaa, walang pagkamiss nanaman, so kailan ka magrerespond, sabi ko sayo magaral ka mabuti pero wag mo kakalimutan
              responsibilidad mo sakin kahit hindi mo ko namimiss mag chat ka parin na namimiss mo ako, ano na kamusta ka? nakapagpahinga ka na ba? alagaan mo sarili mo.lupet nung hammer ni thor na ginawa mo pala. i miss you grrr..</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>


  );

  
}


export default App;
