import React from 'react'
import Indicator from './Indicator/Indicator'
import './MultiForm.css'
import SubForms from './SubForms/SubForms'
import CardBegin from './Infos/CardBegin'
import CardEnd from './Infos/CardEnd'
import Allergie from './SubForms/Allergie'
import Regime from './SubForms/Regime'
import Preference from './SubForms/Preference'
import Cuisine from './SubForms/Cuisine'

export default function Multiform() {
    const [formIndex, setformIndex] = React.useState(1)
    const [dataForm, setDataForm] = React.useState({
        regime: '',
        allergie: [],
        cuisine: [],
        preference: [],
    })

    console.log(dataForm);

    const modifyIndex = (index,data) => {
      setformIndex(index)

      if (data) {
        const newData = {...dataForm}
      const key = Object.keys(data)[0]
      newData[key] = data[key]
      setDataForm(newData)
      }
    }

    const allCards = [
      <CardBegin  modifyIndex= {modifyIndex} />,
      <Regime  modifyIndex= {modifyIndex} />,
      <Allergie  modifyIndex= {modifyIndex} />,
      <Cuisine  modifyIndex= {modifyIndex} />,
      <Preference  modifyIndex= {modifyIndex} />,
      <CardEnd  modifyIndex= {modifyIndex} />,
    ]

  return (
    <div className='container-multiform'>
        <Indicator formIndex={formIndex}/>

        {allCards.map((item, index) => {
                if((index + 1) === formIndex){
                    return allCards[index]
                }
            })}
        {/* {formIndex === 1 ?  <CardBegin  modifyIndex= {modifyIndex} /> :
        formIndex ===2 ? <Regime modifyIndex = {modifyIndex} /> : 
        formIndex ===3 ? <Allergie modifyIndex = {modifyIndex} /> : 
        formIndex ===4 ? <Cuisine modifyIndex = {modifyIndex} /> : 
        formIndex ===5 ? <Preference modifyIndex = {modifyIndex} /> : 
        formIndex ===6 ? <CardEnd modifyIndex = {modifyIndex} /> : 
        ""} */}
    </div>
  )
}
