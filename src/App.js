
import './App.css';
import PropTypes from "prop-types";
import Profil from "./Profil/Profil.js";
import image1 from './image/Chat.jpg';
import image2 from './image/Chat1.jpg';

function App() {

  const sayhello=(name)=>{
alert(`hello ${name}`)
  }
  return (
    <div className="App">
      <Profil
        fullName="Najwa"
        Bio="Studient Full Stack JS"
        profession="Studient"
        sayhello={sayhello}
      >
      <img  src={image1} alt=""/>
      <img  src={image2} alt=""/>
      </Profil>
    </div>
  );
}

export default App;

Profil.defaultProps = {
  fullName: "Name",
  Bio :"Bio",
  profession : "profession"
 };

 Profil.propTypes = {
  fullName: PropTypes.string,
  Bio: PropTypes.string,
  profession: PropTypes.string,
  affiche: PropTypes.func
 };