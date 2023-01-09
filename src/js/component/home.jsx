import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<>
			{/* <Navbar/> */}
			<Jumbotron/>
			{/* componente JSX */}
			<Card/>

			<h1>Contador: {props.numero6} {props.numero5} {props.numero4} {props.numero3} {props.numero2} {props.numero1}</h1>
			{/* <Card url="https://img.freepik.com/vector-gratis/lindo-perro-corgi-comiendo-dibujos-animados-hueso_138676-2534.jpg?auto=format&h=200" pepito="perrito"/>
			<Card url="https://www.petdarling.com/wp-content/uploads/2014/09/gato-siberiano-200x200.jpg" pepito="Gatito"/> */}
			
		</>
	);
};

export default Home;
