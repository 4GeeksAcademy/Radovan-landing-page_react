import React from "react";
import PropTypes from "prop-types";

let styleCard = {
    width: '18rem'
}
const Cards = (props) => {
  return (
      

      <div className="card col-3 p-0 mt-2 mb-2" style={styleCard}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.text}
          </p>
          <a href="#" className="btn btn-primary">
            {props.btn}
          </a>
        </div>
      </div>

  );
};
Cards.defaultProps = {
  img: 'https://via.placeholder.com/500x325',
  title: 'Card',
  text: `You never gave me a text! I'm so sad...`,
  btn: 'To somewhere'
}


export { Cards };