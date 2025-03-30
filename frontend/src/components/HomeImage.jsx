import './Homeimage.css'
import { NavLink } from 'react-router-dom';

export const HomeImage = () => {
  return (
    <div className="homeimg">
      <img src="Images/main.jpeg" alt="Home Image" />
      <div className="imgcontent">
        <h1 className="imgheading">PHOENIX FOUNDATION</h1>
        <p className="mainimgparagraph">Together, We Make A Difference</p>
        <h2 className="save-heading">SAVE PALESTINE, SAVE GAZA</h2>
        {/* <h2 class="save-heading"><span style="color: white;">SAVE PLAISTINE,</span> <span style="color: yellow;">SAVE GAZA</span></h2> */}
        {/* <h2 className="save-heading-gaza">SAVE GAZA</h2> */}
        <NavLink to="/donation">
        <button className="homebtn">Donate Now</button>
        </NavLink>
      </div>
    </div>
  );
};
