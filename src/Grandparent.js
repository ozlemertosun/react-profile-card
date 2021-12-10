import Parent from "./Parent";


const Grandparent = (props) => {
    return ( 
        <div>
            <h1>Berit {props.mellemnavn} </h1>
            <Parent {...props}/>
        </div>
     );
}
 
export default Grandparent;