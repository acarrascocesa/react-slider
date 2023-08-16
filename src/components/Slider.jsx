import "./slider.css";
import foto1 from "../assets/1.jpeg";
import foto2 from "../assets/2.jpeg";
import foto3 from "../assets/3.jpeg";
import foto4 from "../assets/4.jpeg";
import foto5 from "../assets/5.jpeg";
import foto6 from "../assets/6.jpeg";

const Slider = () => {
  return (
    <div className="container">
      <div className="box">
        <img src={foto1} alt="car" />
      </div>
      <div className="box">
        <img src={foto2} alt="car" />
      </div>
      <div className="box">
        <img src={foto3} alt="car" />
      </div>
      <div className="box">
        <img src={foto4} alt="car" />
      </div>
      <div className="box">
        <img src={foto5} alt="car" />
      </div>
      <div className="box">
        <img src={foto6} alt="car" />
      </div>
    </div>
  );
};

export default Slider;
