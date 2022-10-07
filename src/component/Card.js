// import { Component } from "react"

// class Card extends Component {
//    render(){ return <div className="col-lg-6">
//    <div class="card">
// <img  class="card-img-top" alt="..."/>
// <div class="card-body">
// <h5 class="card-title">{props.x}</h5>
// <p class="card-text">{props.desc} / 5</p>
// <a href="#" class="btn btn-success">{props.price}$</a>

// </div>
// </div>
// </div>}
  
// }
function Card(props){
   return <div className="col-lg-6 col-md-6">
      <div class="card" >
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
   <a href="#" className="abvtittle"> <i class="bi bi-info-circle"></i> Sponsored </a>
    <h5 class="card-title ">{props.tittle}</h5>
    <p class="card-text">{props.desc}</p>
    <img className="pimg" src={props.pimg}/>
    <a href="#" className="hvr-underline-from-left user"> by {props.user}</a>
    <p className="pdate"> {props.date} </p>
  </div>
</div>
   </div>
}
export default Card;
