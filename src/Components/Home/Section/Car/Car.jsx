import { useState } from "react";
import bangladeshDistricts from "../../../AllDistrict/AllDistrict";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Car = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [getTime, setGetTime] = useState(new Date())

  const allDistrict = bangladeshDistricts;
  return (
    <div className='grid grid-cols-9 gap-2 items-center max-w-[950px]'>
      <div className="bg-white px-4 py-[34px] rounded col-span-2">
        <p className="text-xs">Pick-Up Location</p>
        <select defaultValue='' className="outline-none w-full">
          <option disabled selected>
            Pick a place
          </option>
          {allDistrict?.map((item) => {
            return <option key={item?.id}>{item?.name}</option>;
          })}
        </select>
      </div>
      <div className="bg-white px-4 py-[34px] rounded col-span-2">
      <p className="text-xs">Drop-Off Location</p>
      <select defaultValue='' className="outline-none w-full">
          <option disabled selected>
            Pick a place
          </option>
          {allDistrict?.map((item) => {
            return <option key={item?.id}>{item?.name}</option>;
          })}
        </select>
      </div>
      <div className="bg-white px-4 py-3 rounded col-span-2">
        <h5 className="text-xs">PickUp Date</h5>
        <DatePicker
          className="w-full outline-none"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
         <h5 className="text-xs">Time</h5>
        <TimePicker disableClock={true} onChange={setGetTime} value={getTime} />
      </div>
      <div className="bg-white px-4 py-3 rounded col-span-2">
      <h5 className="text-xs">Return Date</h5>
      <DatePicker
          className="w-full outline-none"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
                 <h5 className="text-xs">Time</h5>
        <TimePicker  disableClock={true} onChange={setGetTime} value={getTime} />
      </div>
      <div>
        <button className="bg-red-500 px-5 py-3 rounded text-white">Search</button>
      </div>
    </div>
  )
}

export default Car