import { NavLink } from "react-router-dom";
import "./CSS/Error.css";

export const Error = () => {
  return (
    <section id="error-page">
      <div className="error-content">
        <h2 className="error-header">
          <span className="big-404">4<span className="error-text">0</span>4</span>
        </h2>
        <h2 className="error-header">Sorry! Page Not Found</h2>
        <p className="error-paragraph">
            <br />
          <b>OOPS! It seems like the page you are trying to access doesn't exist. If you believe there's an issue,
            <br />
           feel free to report it, and we'll look into it. </b>
        </p>
        <br />
        <div className="error-btns">
          <NavLink to="/"><strong>Return Home</strong></NavLink>
          <NavLink to="/contact"><strong>Report Problem</strong></NavLink>
        </div>
      </div>
    </section>
  );
};
