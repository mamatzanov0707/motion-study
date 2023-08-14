import React from "react";
import "../Flag/index.scss";
import amertica from "../../img/america.png";
import greatBritan from "../../img/griteBriten.png";
import austria from "../../img/ausrtra.png";
import germany from "../../img/germany.png";
import holland from "../../img/holland.png";
import ireland from "../../img/Ireland.png";
import spain from "../../img/Spain.png";
import italy from "../../img/Italy.png";
import canada from "../../img/canada.png";
import cyprus from "../../img/cyprus.png";
import China from "../../img/china.png";
import latvia from "../../img/latvia.png";
import { Link } from "react-router-dom";
import Country from "../../Page/Country";

const Flag = () => {
  return (
    <section id="flag">
      <div className="container">
        <h1>Choose the country</h1>
        <div className="flag">
          <div className="flag--select">
            <select>
              <option value="#">Higher Education</option>
              <option value="#">Secondary Education</option>
              <option value="#">Higher Education</option>
              <option value="#">language courses for youth</option>
              <option value="#">chilren's language comps</option>
            </select>

            <select name="" id="">
              <option value="#">Specialization</option>
              <option value="#">IT Technologies</option>
              <option value="#">Bisiness</option>
              <option value="#">Medicine</option>
              <option value="#">International Relationships</option>
              <option value="#">Tourism</option>
            </select>
            <div className="flag--select__options">
              <select name="" id="">
                <option value="#">Сountries</option>
                <option value="#">America</option>
                <option value="#">Germany</option>
                <option value="#">INDONESIA</option>
                <option value="#">South Korea</option>
              </select>
            </div>
          </div>
          <div className="flag--block">
           <Link to={"/country"}> 
           <div className="flag--block__one">
              <img src={amertica} alt="img" />
              <h2>America</h2>
            </div>
            </Link>

            <div className="flag--block__one">
              <img src={greatBritan} alt="img" />
              <h2>Great Britain</h2>
            </div>

            <div className="flag--block__one">
              <img src={austria} alt="img" />
              <h2>Austria</h2>
            </div>

            <div className="flag--block__one">
              <img src={germany} alt="img" />
              <h2>Germany</h2>
            </div>

            <div className="flag--block__one">
              <img src={holland} alt="img" />
              <h2>Holland</h2>
            </div>

            <div className="flag--block__one">
              <img src={ireland} alt="img" />
              <h2>Ireland</h2>
            </div>

            <div className="flag--block__one">
              <img src={spain} alt="img" />
              <h2>Spain</h2>
            </div>

            <div className="flag--block__one">
              <img src={italy} alt="img" />
              <h2>Italy</h2>
            </div>

            <div className="flag--block__one">
              <img src={canada} alt="img" />
              <h2>Canada</h2>
            </div>

            <div className="flag--block__one">
              <img src={cyprus} alt="img" />
              <h2>Cyprus</h2>
            </div>

            <div className="flag--block__one">
              <img src={China} alt="img" />
              <h2>China</h2>
            </div>

            <div className="flag--block__one">
              <img src={latvia} alt="img" />
              <h2>Latvia</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flag;
