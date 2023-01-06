
import '../../Styles.css';
import HeaderNavBar from "../../Components/HeaderNavBar/HeaderNavBar";
import LeftNavBar from "../../Components/LeftNavBar/LeftNavBar";
import './_Home.scss'
import Hello from "../../Components/Hello/hello";
import FetchData from "../../Api/Api";
import React, {useState, useEffect} from "react";

const Home = () =>{
    const [data, setdata] = useState([])
    const chargementDonnées = async function ()
    {
        const Mesdata =  await FetchData()
        setdata(Mesdata)
        console.log(Mesdata)
    };

    useEffect(function (){
        chargementDonnées()
    },[])
    const arrayData = Object.entries(data);
    console.log(arrayData)
  return(
      <>
          <div className="containerTop">

            <HeaderNavBar/>
          </div>

          <div className="containerLeft">
            <LeftNavBar/>
              {arrayData.map(a =><Hello arraydata={a}/>)}
          </div>


      </>

  )
}
export default Home;
