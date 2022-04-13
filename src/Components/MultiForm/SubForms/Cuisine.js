import React,{ useRef } from 'react'

export default function Cuisine({modifyIndex}) {

  const styleData = {
    cuisine : []
  }  

   const preventFunc = (e) => {
      e.preventDefault()
      allRef.current.forEach(el =>{
        if (el.checked) {
          styleData.cuisine.push(el.value)
        }
      })
      modifyIndex(5,styleData)
   }

   const allRef = useRef([])

   const validation = (el)=>{
    if (el && !allRef.current.includes(el)) {
      allRef.current.push(el)
    }
   }
    
  return (
    <>
          <form className="checkbox-form" onSubmit={preventFunc}>
      <p>Quelles sont tes cuisines préférées ?</p>
      <span>Choix multiples.</span>

      <label htmlFor="italian">Italienne</label>
      <input type="checkbox" id="italian" value="italian" ref={validation} />

      <label htmlFor="japanese">Japonaise</label>
      <input type="checkbox" id="japanese" value="japanese" ref={validation} />

      <label htmlFor="indian">Indienne</label>
      <input type="checkbox" id="indian" value="indian" ref={validation}/>

      <label htmlFor="thaï">Thaïlandaise</label>
      <input type="checkbox" id="thaï" value="thaï" ref={validation}/>

      <label htmlFor="french">Française</label>
      <input type="checkbox" id="french" value="french" ref={validation}/>

      <label htmlFor="chinese">Chinoise</label>
      <input type="checkbox" id="chinese" value="chinese" ref={validation}/>

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={()=>modifyIndex(3)}>
          Précédent
        </button>
        <button>Valider</button>
      </div>
    </form> 
    </>
  )
}
