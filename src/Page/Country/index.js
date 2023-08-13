import React from "react";
import "../Country/index.scss"
import onePhoto from "../../img/onePhoto.png";
import twoPhoto from "../../img/two.png";
import threePhoto from "../../img/three.png";
import fourPhoto from "../../img/four.png";
import sixPhoto from "../../img/six.png";
import sevenPhoto from "../../img/seven.png";
import eightPhoto from "../../img/eigth.png";
import {CiLocationOn} from "react-icons/ci"

const Country = () => {
  return (
    <section id="country">
      <div className="container">


        <div className="country">
          <img src={onePhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>Location <CiLocationOn/></h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div> 
        <div className="country">
          <img src={twoPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>Location <CiLocationOn/></h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={threePhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>Location <CiLocationOn/></h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={fourPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>Location <CiLocationOn/></h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={sixPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>Location <CiLocationOn/></h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={sevenPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>Location <CiLocationOn/></h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={eightPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>Location <CiLocationOn/></h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;
