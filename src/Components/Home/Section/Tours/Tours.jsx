import { useState } from "react";
import bangladeshDistricts from "../../../AllDistrict/AllDistrict";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Tours = () => {
  const [startDate, setStartDate] = useState(new Date());
  
  const allDistrict = bangladeshDistricts;
  return (
    <div className="text-white grid grid-cols-11 gap-2 items-center pt-2 max-w-[900px]">
      <div className="col-span-2 bg-white text-black px-6 py-3 rounded">
        <h5 className="text-xs">I want to go</h5>
        <select defaultValue='' className="outline-none w-full">
          <option disabled selected>
            Pick a place
          </option>
          {allDistrict?.map((item) => {
            return <option key={item?.id}>{item?.name}</option>;
          })}
        </select>
      </div>
      <div className="col-span-2 bg-white text-black px-6 py-3 rounded">
        <h5 className="text-xs">Travel Date</h5>
        <select defaultValue='' className="outline-none w-full">
          <option disabled selected>
            Pick a place
          </option>
          {allDistrict?.map((item) => {
            return <option key={item?.id}>{item?.name}</option>;
          })}
        </select>
      </div>
      <div className="col-span-2 bg-white text-black px-6 py-3 rounded">
        <h5 className="text-xs">Journey Date</h5>
        <DatePicker
          className="w-full outline-none"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      
      <div className="col-span-2 bg-white text-black px-6 py-3 rounded">
        <h5 className="text-xs">Return Date</h5>
        <DatePicker
          className="w-full outline-none"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="col-span-2 bg-white text-black px-6  rounded">
        <h5 className="text-xs">Travelers</h5>
        <details className="dropdown">
          <summary className=" btn hover:bg-white bg-white border-none p-0">
            1 Guest(s)
          </summary>
          <ul className=" shadow menu dropdown-content  bg-base-100 p-">
            <div className="flex gap-10 ">
              <div className="flex items-center">
                <h5>Adults</h5>
                <select defaultValue='' name="" id="" className="outline-none">
                  <option value="">01</option>
                </select>
              </div>
              <div className="flex items-center">
                <h5>Adults</h5>
                <select defaultValue='' name="" id="" className="outline-none">
                  <option value="">00</option>
                </select>
              </div>
            </div>
          </ul>
        </details>
      </div>
      <div>
        <button className="bg-red-500 px-5 py-3 rounded">Search</button>
      </div>
    </div>
  );
};

export default Tours;
