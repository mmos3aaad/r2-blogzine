import ip1 from "../images/post1.jpg"
import ip2 from "../images/post2.jpg"
import ip3 from "../images/post3.jpg"
import ip4 from "../images/post4.jpg"
import adv from "../images/adv.png"

function Aside() {
    return<div className="asiide">
        <div className="row a-1">
            <div className="col-4 ">
            <button className="btfb"> <i class="bi bi-facebook"></i> 1.5k Fans </button>
            </div>
            <div className="col-4 ">
            <button  className="btig"> <i class="bi bi-instagram"></i> 1.8k Followers </button>
            </div>
            <div className="col-4 ">
            <button className="btyt"> <i class="bi bi-youtube"></i> 22k Subs </button>
            </div>
        </div>
        <h2>Trending Topics</h2>
        <div className="travel hvr-grow"> <a href="#" className="cat hvr-underline-from-left"> Travel</a> </div>
        <div className="business hvr-grow"> <a href="#" className="cat hvr-underline-from-left"> Business</a> </div>
        <div className="marketing hvr-grow"> <a href="#" className="cat hvr-underline-from-left"> Marketing</a> </div>
        <div className="photography hvr-grow"> <a href="#" className="cat hvr-underline-from-left"> Photography</a>  </div>
        <div className="sports hvr-grow"> <a href="#" className="cat hvr-underline-from-left"> Sports</a> </div>
        <a href="#" id="Aa"> View All Categories</a>

        <div className="possts">
        <h2>Recent Posts</h2>
        <div className="row a-2">
            <div className="col-4">
                <img src={ip1} width="80px" height="80px" />
            </div>
            <div className="col-8">
                <h1>The Pros and Cons of business</h1>
                <p>May, 17, 2022</p>
            </div>
        </div>
        <div className="row a-2">
            <div className="col-4">
                <img src={ip4} width="80px" height="80px" />
            </div>
            <div className="col-8">
                <h1>5 Reasons why you shouldnt startup...</h1>
                <p>May, 17, 2022</p>
            </div>
        </div>
        <div className="row a-2">
            <div className="col-4">
                <img src={ip2} width="80px" height="80px" />
            </div>
            <div className="col-8">
                <h1>Ten questions to answer if yo......</h1>
                <p>May, 17, 2022</p>
            </div>
        </div>
        <div className="row a-2">
            <div className="col-4">
                <img src={ip3} width="80px" height="80px" />
            </div>
            <div className="col-8">
                <h1>Five Unbelivable Facts about money</h1>
                <p>May, 17, 2022</p>
            </div>
        </div>
        </div>
        
        <a href="#"> <img src={adv} className="adv" /> </a>

    </div>
}
export default Aside;