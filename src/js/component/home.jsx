import React from "react";

//include images into your bundle
import {Navbar} from './navbar.jsx';
import { Jumby } from "./jumbo.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumby/>
			<div className="container row m-auto p-0 justify-content-between mb-4">
				<Cards title='Elrond ROP' img='https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/07/rings-of-power-season-2-trailer-robert-aramayo.jpg' text="Elrond from Rings of Power" btn='Buy Card'/>
				<Cards title='Elrond LOTR' img='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/lotr-elrond.jpg' text="Elrond from The Lord of the rings" btn='Buy card' />
				<Cards title='Sauron LOTR' img='https://www.nautis.com/content/images/size/w1200/2024/01/nautis-photo_00018_.png' text="Sauron from the motion picture The Lord of the rings" btn='Buy card'/>
				<Cards title='Sauron RIP' img='https://cineypalomitas.com/wp-content/uploads/2024/05/qui9en-es-annatar.jpg' text="Sauron from the motion picture Rings of Power" btn='Buy card'/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
