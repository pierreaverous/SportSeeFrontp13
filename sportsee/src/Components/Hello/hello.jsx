
import FetchData from "../../Api/Api";
import './helloStyle.scss'
import React, { useState, useEffect } from 'react';


const Hello = ({arraydata}) => {
    // const [data, setdata] = useState([])
    // const chargementDonnées = async function ()
    // {
    //     const Mesdata =  await FetchData()
    //     setdata(Mesdata)
    //     console.log(Mesdata)
    // };
    //
    // useEffect(function (){
    //     chargementDonnées()
    // },[])
    // const arrayData = Object.entries(data);
    // console.log(arrayData)
    return(
        <>
            <div className='container'>
                <div className='containerRow'>
                    <div className='hello-tilte'>
                        <p> Bonjour</p>
                    </div>
                    <div className="title">
                        {/*{arrayData.map(a=> <p>{a[1].userInfos.firstName}</p>)}*/}
                        {arraydata[1].userInfos.firstName}
                    </div>
                </div>
                <div>
                    <p id='sousTitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
            </div>

        </>
    )

}

export default Hello