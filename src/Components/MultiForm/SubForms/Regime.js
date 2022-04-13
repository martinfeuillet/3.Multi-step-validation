import React from 'react'

export default function Regime({modifyIndex}) {
  const [dataForm, setDataForm] = React.useState({
    regime: 'noDiet',
  })

  const handleChange = (e) => {
    setDataForm({
      regime : e.target.value,
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    modifyIndex(3,dataForm)
   }

   console.log(dataForm);
   
    
  return (
    <>
         <form onSubmit={handleSubmit} className="diet-form">
      <p>Quelle est ton régime alimentaire ?</p>

      <label htmlFor="nodiet">Pas de régime en particulier</label>
      <input
        onChange={handleChange}
        type="radio"
        name="diet"
        id="nodiet"
        value="nodiet"
      />

      <label htmlFor="homnivorous">Homnivore</label>
      <input
        onChange={handleChange}
        type="radio"
        name="diet"
        id="homnivorous"
        value="homnivorous"
      />

      <label htmlFor="vegetarian">Végétarien</label>
      <input
        onChange={handleChange}
        type="radio"
        name="diet"
        id="vegetarian"
        value="vegetarian"
      />

      <label htmlFor="vegan">Vegan</label>
      <input
        onChange={handleChange}
        type="radio"
        name="diet"
        id="vegan"
        value="vegan"
      />

      <button>Valider</button>
    </form>
    </>
  )
}
