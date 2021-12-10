import Child from "./child";

const Parent = (props) => {
    return ( 
        <div>
            <h2>Brith {props.mellemnavn}</h2>
            <Child efternavn={props.efternavn}/>
        </div>
     );
}
 
export default Parent;