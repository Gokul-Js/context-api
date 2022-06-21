import React from 'react'

const Card = ({title = "Ecommerce Project",buttonText="Click To View"}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
              <img
                src="http://www.starwebmaker.com/images/ecommerce2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.google.com/" className="btn btn-success">{buttonText}</a>
              </div>
            </div>

    )
}

export default Card