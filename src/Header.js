import ProfileText from "./ProfileText";
import ProfileImage from "./ProfileImage"; 

const Header = () => {
    return ( 
        <header style={styles}>
            <ProfileImage/>
            <ProfileText/>
        </header>
    );
}

const styles = {
    display: 'grid', 
    gridTemplate: '1fr/ 1fr', 
    width: '25vw', 
    borderRadius: '25px', 
    overflow: 'hidden', 
   // boxShadow: '3px 3px 3px rgba(0, 0, 0, .2)', 
 }
 
export default Header;