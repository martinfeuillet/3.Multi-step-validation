import React from 'react'
import Regime from './Regime'
import Cuisine from './Cuisine'
import './SubForm.css'
import Allergie from './Allergie'
import Preference from './Preference'


export default function SubForms() {

  const [form, setForm] = React.useState({
    regime: true,
    cuisine: false,
    allergies: false,
    preferences : false,
  })

  const [data, setData] = React.useState({
    regime : [],
    cuisine : [],
    allergies : [],
    preferences : []
  })

  const congratulate = () => {
    if (!form.regime && !form.cuisine && !form.allergies && !form.preferences) {
      return (
        <div className='congratulation'>
          <h2>Bravissimo !</h2>
          <p>Vous avez terminé la sélection de vos aliments</p>
        </div>
      )
    }
      
    }

  return (
    <div className=''>
      {form.regime && <Regime setForm = {setForm} setData={setData} />}
      {form.cuisine && <Cuisine setForm = {setForm} setData={setData} />}
      {form.allergies && <Allergie setForm = {setForm} setData={setData} />}
      {form.preferences && <Preference setForm = {setForm} setData={setData} />}
      {congratulate()}
    </div>
  )
}
