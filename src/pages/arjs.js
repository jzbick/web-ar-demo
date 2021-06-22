import React, {useState} from 'react';
import image1 from "../images/holzmarkt-hmh-bild-1-1930.jpg"
import image2 from "../images/holzmarkt-hmh-bild-2-1933.jpg"
import image3 from "../images/holzmarkt-hmh-bild-3-1939.jpg"
import image4 from "../images/holzmarkt-hmh-bild-4-1943.jpg"
import image5 from "../images/holzmarkt-hmh-bild-5-1963.jpg"
import image6 from "../images/holzmarkt-hmh-bild-6-1965.jpg"
import image7 from "../images/holzmarkt-hmh-bild-7-2019.jpg"

const Arjs = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const handleClick = () => {
        document.getElementById("entity").setAttribute("material", `src: #image${(currentImage % 7) + 1}; shader: flat;`)
        setCurrentImage(img => img++);
    }


    return (
        <a-scene
            onClick={handleClick}
            arjs='debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'
            embedded
            id="scene"
            vr-mode-ui="enabled: false;"
        >

            <a-assets>
                <img id="image1" src={image1} alt=""/>
                <img id="image2" src={image2} alt=""/>
                <img id="image3" src={image3} alt=""/>
                <img id="image4" src={image4} alt=""/>
                <img id="image5" src={image5} alt=""/>
                <img id="image6" src={image6} alt=""/>
                <img id="image7" src={image7} alt=""/>
            </a-assets>

            <a-marker type="barcode" value="0">
                <a-entity
                    geometry="primitive: plane; height: 1; width: 2;"
                    id="entity"
                    material="src: #image1; shader: flat;"
                    rotation="270 0 0"
                >
                </a-entity>
            </a-marker>

            <a-entity camera></a-entity>
        </a-scene>
    );
};

export default Arjs;
