import React from "react";

//create your first component
//props o propiedades
const Card = (props) => {//¿Donde estas RECIBIENDO/consumiendo la propiedad?
    console.log(props);
	return (
        <div className="card" style={{width: "18rem"}}>
        <img src={props.url} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Contador: {props.numero6} {props.numero5} {props.numero4} {props.numero3} {props.numero2} {props.numero1}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
	);
};

export default Card;