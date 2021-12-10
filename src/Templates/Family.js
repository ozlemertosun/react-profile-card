import reactDom from "react-dom";
import Grandparent from "../Grandparent";
import './family.css';



const Family = (props) => {
    return ( 
        <section className="family-container">
            <Grandparent mellemnavn="Snape" efternavn="Lygre"/> 
        </section>
     );
}
 


export default Family;