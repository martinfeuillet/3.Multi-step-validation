import React from "react";
import { useRef } from "react";

export default function Allergie({ modifyIndex }) {

  const styleData = {
    allergie : []
  }
  
  const preventFunc = (e) => {
    e.preventDefault();

    allRef.current.forEach(el=>{
      if (el.checked) {
        styleData.allergie.push(el.value)
      }
    })
    
    modifyIndex(4,styleData)


  };

  const allRef = useRef([]);
  
    const validation  = el => {
      if (el && !allRef.current.includes(el)) {
        allRef.current.push(el)
      }
    }


    
    return (
        <>
            <form className="checkbox-form" onSubmit={preventFunc}>
                <p>Quelles sont tes cuisines préférées ?</p>
                <span>Choix multiples.</span>

                <label htmlFor="milk">Lait</label>
                <input type="checkbox" id="milk" value="milk" ref={validation} />

                <label htmlFor="pollen">Pollen</label>
                <input
                    type="checkbox"
                    id="pollen"
                    value="pollen"
                    ref={validation}

                />

                <label htmlFor="nuts">Noix</label>
                <input type="checkbox" id="nuts" value="nuts" ref={validation} />

                <label htmlFor="eggs">Oeufs</label>
                <input type="checkbox" id="eggs" value="eggs" ref={validation} />

                <label htmlFor="shellfish">Fruits de mer</label>
                <input
                    type="checkbox"
                    id="shellfish"
                    value="shellfish"
                    ref={validation}
                />

                <div className="container-nav-btns">
                    <button
                        type="button"
                        className="prev"
                        onClick={() => modifyIndex(2)}
                    >
                        Précédent
                    </button>
                    <button>Valider</button>
                </div>
            </form>
        </>
    );
}
