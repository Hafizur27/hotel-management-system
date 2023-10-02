import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bangladeshDistricts from "../../../AllDistrict/AllDistrict";

const Hotel = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const allDistrict = bangladeshDistricts;
  const [error, setError] = useState({
    location: false,
    depart: false,
    return: false,
    adultSeat: false,
    childSeat: false,
  });

  const [data, setData] = useState({
    location: "",
    depart: "",
    return: "",
    adultSeat: "",
    childSeat: "",
  });

  const handleSearch = () => {
    console.log(data)
  }

  return (
    <div className="text-white grid grid-cols-12 gap-2 items-center pt-2 max-w-[900px]">
      {/* Hotel Location */}
      <div className="col-span-5">
        <div className=" bg-white text-black px-6 py-3 rounded">
          <h5 className="text-xs">I want to go</h5>
          <select
            onChange={(e) => setData({ ...data, location: e.target.value })}
            onClick={() => setError({ ...error, location: true })}
            defaultValue={data.location}
            className="outline-none"
          >
            <option disabled selected>
              Pick a place
            </option>
            {allDistrict?.map((item) => {
              return (
                <option value={item.name} key={item?.id}>
                  {item?.name}
                </option>
              );
            })}
          </select>
        </div>
        {error.location && data.location === "" && (
          <p className="text-red-500 text-xs">{"The field is required*"}</p>
        )}
      </div>
      {/* Travel date */}
      <div className="col-span-2">
        <div className=" bg-white text-black px-6 py-3 rounded">
          <h5 className="text-xs">Travel Dates</h5>
          <div>
            <div onClick={() => setError({ ...error, depart: true })}>
              <DatePicker
                className="w-full outline-none"
                selected={data.depart}
                onChange={(date) => setData({ ...data, depart: date })}
              />
            </div>
          </div>
        </div>
        {error.depart && data.depart === "" && (
          <p className="text-red-500 text-xs">{"Travel date need*"}</p>
        )}
      </div>
      {/* Return Date */}
      <div className="col-span-2">
        <div className="">
          <div className="col-span-2 bg-white text-black px-6 py-3 rounded">
            <h5 className="text-xs">Return Dates</h5>
            <div onClick={() => setError({ ...error, return: true })}>
              <DatePicker
                className="w-full outline-none"
                selected={data.return}
                onChange={(date) => setData({ ...data, return: date })}
              />
            </div>
          </div>
        </div>
        {error.return && data.return === "" && (
          <p className="text-red-500 text-xs">{"Return date need*"}</p>
        )}
      </div>
      <div className="col-span-2">
        <div className=" bg-white text-black px-6 rounded">
          <h5 className="text-xs">Travelers</h5>
          <details className="dropdown ">
            <summary className=" btn hover:bg-white bg-white border-none p-0">
              1 Guest(s)
            </summary>
            <ul className=" shadow menu dropdown-content  bg-base-100 ">
              <div>
                <h4>1 Room</h4>
                <p>Upto 7 Rooms in total</p>
              </div>
              <div className="divider bg-slate-800 h-1"></div>
              <h4 className="pb-2">room 1</h4>
              <div>
                <div className="flex gap-10 ">
                  <div className="flex items-center">
                    <h5>Adults</h5>
                    <select
                      onClick={() => setError({ ...error, adultSeat: true })}
                      onChange={(e) =>
                        setData({ ...data, adultSeat: e.target.value })
                      }
                      defaultValue={data.adultSeat}
                      name=""
                      id=""
                      className="outline-none"
                    >
                      <option value="0" selected>
                        00
                      </option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <h5>Child</h5>
                    <select
                    onClick={()=> setError({...error, childSeat: true})}
                    onChange={(e)=> setData({...data, childSeat: e.target.value })}
                      defaultValue={data.childSeat}
                      name=""
                      id=""
                      className="outline-none"
                    >
                      <option value="0" selected>
                        00
                      </option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="text-green-400 py-2">Add Room +</button>
            </ul>
          </details>
        </div>
        {error.adultSeat && data.adultSeat === "" && (
          <p className="text-red-500 text-xs">{"select seat*"}</p>
        )}
      </div>
      <div className="">
        <button onClick={handleSearch} className="bg-red-500 px-4 py-3 rounded ">Search</button>
      </div>
    </div>
  );
};

export default Hotel;
