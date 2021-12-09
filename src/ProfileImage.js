
const image = 'https://i.pinimg.com/474x/21/8a/a5/218aa5d94ada5bf828fcf2bd386bf234.jpg'

const ProfileImage = () => {
    return ( 
        <section style={styles}>
            <img src={image} style={{display:'block', width:'100%'}} alt="profileimage" />
        </section>
     );
}

const styles = {
    gridArea: '1/1/3/3'
}

export default ProfileImage;