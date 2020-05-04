import React from "react"

const header = {
    color:'blue',
    textAlign:'center',
}
const card = {
    margin: "10px"
}

const img ={
    width: '100px',
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "20px"
}

const card_title ={
    textAlign: "center",
    //borderRadius: 0px 0px 40px 40px;

    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: "30px",
    marginTop: "80px",
    height: "40px"
  }

function Card({project}) {
    // return (
    //     <div style={card} className="card">
    //         <img style={img} className="card-img-top" src={project.img} alt="hi" />
    //         <div className="card-body">
    //             <h5 style={header} className="card-title">{project.title}</h5>
    //             <p className="card-text">Description Goes Here</p>
    //             <a href={project.deployed} className="btn btn-primary">Deployed</a>
    //             <a href={project.github} className="btn btn-primary">Github</a>
    //         </div>
    //     </div>
    // )
    return (
        <div class="card 1">
            <div className="card_image"> 
                <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt=""/> 
            </div>
            <div style={card_title}>
                <p>Card Title</p>
            </div>
        </div>
    )
}

export default Card;