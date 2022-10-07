import Card from "./Card";
import i1 from "../images/01.jpg";
import i2 from "../images/02.jpg";
import i3 from "../images/03.jpg";
import i4 from "../images/04.jpg";
import i5 from "../images/05.jpg";
import i6 from "../images/12.jpg";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";

function Articles(){
    return <div>
        <div className="arrticles">
        <h2> <i class="bi bi-hourglass-top"></i> Today's top highlights</h2>
        <p>Latest breaking news, pictures, videos, and special reports</p>
        <div className="row">
            <Card img={i1}  pimg={p1} tittle="12 worst types of business accounts you follow on Twitter" desc="He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to" user="Carolyn -" date="Sep 01, 2022" />
            <Card img={i2}  pimg={p2} tittle="Dirty little secrets about the business industry" desc="Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor."user="Carolyn -" date="Sep 01, 2022"/>
            <Card img={i3} pimg={p5} tittle="Bad habits that people in the industry need to quit" desc="For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected" user="Carolyn -"date="Sep 01, 2022"/>
            <Card img={i4} pimg={p4} tittle="Around the web: 20 fabulous info graphics about business" desc="Projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but."user="Carolyn -"date="Sep 01, 2022" />
            <Card img={i5} pimg={p5} tittle="7 common mistakes everyone makes while traveling" desc="Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted." user="Carolyn -" date="Sep 01, 2022"/>
            <Card img={i6} pimg={p3} tittle="5 investment doubts you should clarify" desc="Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal."user="Carolyn -" date="Sep 01, 2022"/>
        </div>
        <div className="row">
                <button className="btn btn-primary btn1">Load more post <i class="bi bi-arrow-down-circle"></i></button>
        </div>




        </div>
    </div>
}
export default Articles;