import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    State: "",
    postalcode: "",
    comments: "false",
    condidates: "false",
    offers: "false",
    pushNotification: ""

  });
  // console.log(formData);
  function changeHndler(event) {
    const { name, type, value, checked } = event.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("lets print all data .....")
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center  bg-lime-300 ">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName" className="font-bold">
          First Name:
        </label>
        <br />


        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Deepak"
          onChange={changeHndler}
          value={formData.firstName}
          className="border-2 mt-0.5 outline-blue-500 w-full p-2 bg-pink-200 rounded-xl"
        />
        <br />
        <br />

        <label htmlFor="lastName" className="font-bold ">
          Last Name:
        </label>
        <br />

        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="kumar"
          onChange={changeHndler}
          value={formData.lastName}
          className="border-2 mt-0.5 p-2 outline-blue-500 w-full bg-pink-200 rounded-xl"
        />

        <br />
        <br />

        <label htmlFor="email" className="font-bold">
          Email:
        </label>
        <br />


        <input
          type="email"
          name="email"
          id="email"
          placeholder="aryanrajj...@gmail.com"
          onChange={changeHndler}
          value={formData.email}
          className="border-2 mt-0.5 p-2  outline-blue-500 w-full bg-pink-200 rounded-xl"
        />
        <br />
        <br />

        <label htmlFor="country" className="font-bold" >Country:</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHndler}
          className="outline-blue-500 w-full p-2 bg-pink-200 rounded-xl"
        >
          <option>India</option>
          <option>United State</option>
          <option>Abu Dhabi</option>
          <option>Canada</option>
          <option>Singapur</option>

        </select>
        <br />
        <br />
        <label htmlFor="streetAddress" className="font-bold">
          Street Address :
        </label>
        <br />


        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="sector-12"
          onChange={changeHndler}
          value={formData.streetAddress}
          className="border-2 mt-0.5 p-2 outline-blue-500 w-full bg-pink-200 rounded-xl"

        />
        <br />
        <br />

        <label htmlFor="city" className="font-bold">
          City :
        </label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="MumBai Juhu..."
          onChange={changeHndler}
          value={formData.city}
          className="border-2 mt-0.5 p-2 outline-blue-500 w-full bg-pink-200 rounded-xl"

        />
        <br /><br />
        <label htmlFor="state" className="font-bold" >State:</label>
        <br />
        <select
          id="State"
          name="State"
          value={formData.State}
          onChange={changeHndler}
          className="outline-blue-500 p-2 rounded-2xl"
        >
          <option>Mumbai</option>
          <option>Panjab</option>
          <option>Hariyana</option>
          <option>Uttar-pradesh</option>
          <option>Gova</option>

        </select>
        <br />
        <br />
        <label htmlFor="postalcode" className="font-bold w-full bg-pink-200 p-1 rounded-xl">
          Postal Code :
        </label>
        <br />
        <input
          type="text"
          name="postalcode"
          id="postalcode"
          placeholder="100396"
          onChange={changeHndler}
          value={formData.postalcode}
          className="border-2 mt-2  p-2 outline-blue-500 w-full bg-pink-200 rounded-xl"

        />
        <br />
        <br />

        <fieldset>
          <label className="font-bold">by Email :</label>
          <br />
          <div className=" flex flex-row">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHndler}
            />
            <div>
              <label htmlFor="comments">
                Commnets

              </label>
              <p>Get Notified when somesomes posts a comment on a posting..</p>
            </div>
          </div>


          <div className=" flex flex-row">
            <input
              id="condidates"
              name="condidates"
              type="checkbox"
              checked={formData.condidates}
              onChange={changeHndler}

            />
            <div>
              <label htmlFor="condidates">
                Condidates

              </label>
              <p>Get Notified when somesomes posts a comment on a posting..</p>
            </div>
          </div>


          <div className=" flex flex-row">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHndler}
            />
            <div>
              <label htmlFor="offers">
                Offers

              </label>
              <p>Get Notified when somesomes posts a comment on a posting..</p>
            </div>
          </div>







        </fieldset>
        <br />


        <fieldset>
          <legend className="font-bold">Push NotiFication</legend>
          <p>Are you allow Notfiction In mobile home</p>

          <input
            type="radio"
            id="pusheverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHndler}
          />
          <label htmlFor="pusheverything" className="font-bold">Everything</label>
          <br />
          <input
            type="radio"
            id="pushemail"
            name="pushNotification"
            value="same As email"
            onChange={changeHndler}
          />

          <label htmlFor="pushemail" className="font-bold">Same as Email</label>
          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="Nothing"
            onChange={changeHndler}
          />
          <label htmlFor="pushNothing" className="font-bold">Nothing</label>



        </fieldset>
        <button className="bg-yellow-500 text-white font-bold rounded-xl py-2 px-4" >Save</button>






      </form>
    </div>
  );
}

export default App;
