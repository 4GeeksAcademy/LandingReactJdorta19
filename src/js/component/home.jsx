import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.pinimg.com/736x/08/a9/b8/08a9b8cc805a1b6a7037819719ab2427.jpg"
							cardTitle="Bob Dylan"
							cardDescription="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
							buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://los40es00.epimg.net/los40/imagenes/2020/06/15/los40classic/1592224638_964781_1592235274_noticia_normal.jpg"
							cardTitle="Bob Marley"
							cardDescription="Robert Nesta Marley, más conocido como Bob Marley , fue un músico, guitarrista y compositor jamaicano."
							buttonUrl="https://es.wikipedia.org/wiki/Bob_Marley"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/201651/rs_1300x1654-160601141850-Marilyn-Monroe-pics6.jpg?fit=around%7C1300:1654&output-quality=90&crop=1300:1654;center,top"
							cardTitle="Marilyn Monroe"
							cardDescription="Marilyn Monroe was an American actress, model, and singer. She was a renowned actress"
							buttonUrl="https://en.wikipedia.org/wiki/Marilyn_Monroe"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://www.biografiasyvidas.com/biografia/j/fotos/jackson_michael_1.jpg"
							cardTitle="Michael Jackson"
							cardDescription="Michael Joseph Jackson was an American singer, songwriter, and dancer. Dubbed the 'King of Pop'."
							buttonUrl="https://en.wikipedia.org/wiki/Michael_Jackson"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Build with ❤️ using React.js
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
