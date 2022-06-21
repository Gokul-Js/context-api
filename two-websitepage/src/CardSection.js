import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
         <Card />
          </div>
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img
                src="https://www.weblankan.com/wp-content/uploads/2018/07/Web-Development-Process-weblankan.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.google.com/" className="btn btn-success">Check Resume</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img
                src="https://www.concettolabs.com/blog/wp-content/uploads/2018/10/fullstack-development.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">BlockChain</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.google.com/" className="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection