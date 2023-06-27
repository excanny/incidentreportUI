import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import '../Report.css';

export default function Report() {

    const [cookies, setCookie] = useCookies(['_fhv']);
    let [description, setDescription] = useState('');
    let [address, setAddress] = useState('');
    let [LGA, setLGA] = useState('');
    let [LCDA, setLCDA] = useState('');
    let [images, setImages] = useState('image');
    let [time, setTime] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
      
        const data = {  
          description: description,
          address : address,
          lga: LGA,
          lcda : LGA,
          images: images,
          cookie: cookies._fhv,
          userId: 0
        };  
    
        const myJSON = JSON.stringify(data);

        //console.log(myJSON)

        axios.post('https://localhost:7002/api/Report/AddReport', data)
        .then((response) => {
          //console.log(response.status);

          alert("Report sent successfully");

        if(response.status == 200) window.location.href = "/";

        }, (error) => {
          //console.log(error);
          alert(error);
        });

    }


  return (
    <>
        <div className="mt-2 pl-2"><a href="/">Home</a></div>

      <div className="container-fluid">

        <div className="row mb-5">

        <div className="col-lg-8 mx-auto">

        <div className="card">
          <div className="card-body">

            <h3 className="text-center">Report Incident</h3>
          <form onSubmit={onSubmit}>
          <div class="form-group">
            <label for="comment">Description: <span className='text-danger'>(Required)</span></label>
            <textarea class="form-control" rows="3" required onChange={(e) => setDescription(e.target.value)} ></textarea>
          </div>
          <div class="form-group">
            <label for="comment">Address of incident: <span className='text-danger'>(Required)</span></label>
            <textarea class="form-control" required rows="1" onChange={(e) => setAddress(e.target.value)} ></textarea>
          </div>

          <div className="row">

            <div className="col">
            <div class="form-group">
              <label for="sel1">LGA: <span className='text-danger'>(Required)</span></label>
              <select class="form-control" required onChange={(e) => setLGA(e.target.value)}>
              <option value="LGA" disabled selected hidden>
                Select your LGA here...
              </option>
              <option value="Agege">Agege</option>
              <option value="Ajeromi-ifelodun">Ajeromi-ifelodun</option>
              <option value="Alimosho">Alimosho</option>
              <option value="Amuwo-Odofin">Amuwo-Odofin</option>
              <option value="Apapa">Apapa</option>
              <option value="Badagry">Badagry</option>
              <option value="Epe">Epe</option>
              <option value="Eti-Osa">Eti-Osa</option>
              <option value="Ibeju-Lekki">Ibeju-Lekki</option>
              <option value="Ifako-Ijaiye">Ifako-Ijaiye</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Ikorodu">Ikorodu</option>
              <option value="Kosofe">Kosofe</option>
              <option value="Lagos Island">Lagos Island</option>
              <option value="Lagos Mainland">Lagos Mainland</option>
              <option value="Mushin">Mushin</option>
              <option value="Ojo">Ojo</option>
              <option value="Oshodi-Isolo">Oshodi-Isolo</option>
              <option value="Somolu">Somolu</option>
              <option value="Surulere">Surulere</option>
              </select>
            </div>
            </div>

            <div className="col">
            <div class="form-group">
              <label for="sel1">LCDA:- <span className='text-danger'>(Required)</span></label>
              <select class="form-control" required onChange={(e) => setLCDA(e.target.value)}>
              <option value="LCDA" disabled selected hidden>
                Your LCDA here ...
              </option>
              <option value="agege">
                Agege Local Council Development Area
              </option>
              <option value="agbado">
                Agbado/Oke-Odo Local Council Development Area
              </option>
              <option value="ajeromi">
                Ajeromi-ifelodun Local Council Development Area
              </option>
              <option value="Alimosho">
                Alimosho Local Council Development Area
              </option>
              <option value="Amuwo-Odofin">
                Amuwo-Odofin Local Council Development Area
              </option>
              <option value="Apapa">
                Apapa-Igamu Local Council Development Area
              </option>
              <option value="Badagry">
                Badagry Local Council Development Area
              </option>
              <option value="bariga">
                Bariga Local Council Development Area
              </option>
              <option value="coker">
                Coker-Aguda Local Council Development Area
              </option>
              <option value="egbe">
                Egbe-Idimu Local Council Development Area
              </option>
              <option value="epe">Epe Local Council Development Area</option>
              <option value="eredo">
                Eredo Local Council Development Area
              </option>
              <option value="Eti-Osa">
                Eti-Osa Local Council Development Area
              </option>
              <option value="iba">Iba Local Council Development Area</option>
              <option value="Ibeju-Lekki">
                Ibeju-Lekki Local Council Development Area
              </option>
              <option value="Ifako-Ijaiye">
                Ifako-Ijaiye Local Council Development Area
              </option>
              <option value="ifelodun">
                Ifelodun Local Council Development Area
              </option>
              <option value="Igando">
                Igando-Ikotun Local Council Development Area
              </option>
              <option value="Ikeja">
                Ikeja Local Council Development Area
              </option>
              <option value="Ikorodu">
                Ikorodu Local Council Development Area
              </option>
              <option value="Ikosi">
                Ikosi-Ejirin Local Council Development Area
              </option>
              <option value="Imota">
                Imota Local Council Development Area
              </option>
              <option value="east">
                Lagos Island East Local Council Development Area
              </option>
              <option value="island">
                Lagos Island West Local Council Development Area
              </option>
              <option value="Mainland">
                Lagos Mainland Local Council Development Area
              </option>
              <option value="mushin">
                Mushin Local Council Development Area
              </option>
              <option value="Odi-Olowo">
                Odi-Olowo/Ojuwoye Local Council Development Area
              </option>
              <option value="Ojodo">
                Ojodu Local Council Development Area
              </option>
              <option value="Ojokoro">
                Ojokoro Local Council Development Area
              </option>
              <option value="Olorunda">
                Olorunda Local Council Development Area
              </option>
              <option value="Onigbongbo">
                Onigbongbo Local Council Development Area
              </option>
              <option value="Oriade">
                Oriade Local Council Development Area
              </option>
              </select>
            </div>
            </div>
          </div>

          <div className="row">

            <div className="col">
            <div className="form-group">
              <label htmlFor="email">Images:</label>
              <input type="file" className="form-control" onChange={(e) => setImages(e.target.value)}/>
            </div>
            </div>

            <div className="col">
            <div className="form-group">
              <label htmlFor="pwd" className='pb-0'>Date/Time of Incident: <span className='text-danger'>(Required)</span></label>
              <input type="datetime-local" required className="form-control" onChange={(e) => setTime(e.target.value)}/>
            </div>
            
          </div>

            </div>

            <button type="submit" className="btn btn-primary mx-auto pb-0">Submit</button>
          </form>

          </div>
        </div>

        </div>
        
        </div>
        
      </div>

    </>
  )
}
