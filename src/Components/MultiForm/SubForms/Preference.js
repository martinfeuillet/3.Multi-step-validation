import React,{useState} from "react";


export default function Preference({ modifyIndex }) {

    const [data,setData]=useState({
        preference: {
            good: "",
            bad: "",
        },
    })

    const handleChange = (e,value)=>{
      if (value ==='good') {
        setData({
          preference : {
            ...data.preference,
            good : e.target.value
          }
        })
      }else if(value === 'bad'){
        setData({
          preference : {
            ...data.preference,
            bad : e.target.value
          }
        })
      }
    }


    const preventFunc = (e) => {
        e.preventDefault();
        modifyIndex(6,data)
    };

    return (
        <form className="preferences-form" onSubmit={preventFunc}>
            <p>Parle-nous des aliments que tu préfères et que tu détestes !</p>

            <label htmlFor="prefered">
                Tes aliments préférés, séparés par une virgule :
            </label>
            <textarea
                id="prefered"
                placeholder="Un ou plusieurs, si tu en as"
                onChange={(e)=>handleChange(e,'good')}
            ></textarea>

            <label htmlFor="hated">
                Les aliments que tu ne supportes pas, séparés par une virgule :
            </label>
            <textarea
                id="hated"
                placeholder="Un ou plusieurs, si tu en as"
                onChange={(e)=>handleChange(e,'bad')}
            ></textarea>

            <div className="container-nav-btns">
                <button type="button" className="prev" onClick={()=>modifyIndex(4)}>
                    Précédent
                </button>
                <button>Valider</button>
            </div>
        </form>
    );
}
