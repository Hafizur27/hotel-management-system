import { useState } from "react";
import bangladeshDistricts from "../../../AllDistrict/AllDistrict";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Flight = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [isError, setIsError] = useState({
    fromLocation: false,
    toLocation: false,
    depart: false,
    return: false,
    adultSeat: false,
    childSeat: false,
  });
  // console.log(isError);
  const allDistrict = bangladeshDistricts;

  const [data, setData] = useState({
    fromLocation: "",
    toLocation: "",
    depart: "",
    return: "",
    adultSeat: "",
    childSeat: "",
  });

  // const handleError = () => {
    // setIsError(true);
    // if(data.fromLocation){
    //   setIsError(false)
    // }else if(data.fromLocation==='')
    // {
    //   setIsError(true)
    // }
  // };
  // console.log(startDate)
  // console.log(data);
  const handleSearchData = (e) => {
    e.preventDefault();
  // console.log(data)

  }

  return (
    <>
      <div className="text-white grid grid-cols-8 gap-2 items-center pt-2 max-w-[900px]">
        {/* Flying from Location*/}
        <div className="col-span-2">
          <div className=" bg-white text-black px-6 py-3 rounded">
            <h5 className="text-xs ps-1">Flying From</h5>
            <select
              onClick={() => setIsError({ ...isError, fromLocation: true })}
              onChange={(e) => {
                setData({ ...data, fromLocation: e.target.value });
              }}
              defaultValue={data.fromLocation}
              className="outline-none"
            >
              <option selected>Pick a place</option>
              {allDistrict?.map((item) => {
                return <option value={item?.name} key={item?.id}>{item?.name}</option>;
              })}
            </select>
          </div>
          {isError.fromLocation && data.fromLocation === "" && (
            <p className="text-red-500 text-xs">{"The field is required*"}</p>
          )}
        </div>
        {/* Flying To Location */}
        <div className="col-span-2">
          <div className=" bg-white text-black px-6 py-3 rounded">
            <h5 className="text-xs ps-1">Flying To</h5>
            <select
              className="outline-none"
              defaultValue={data.toLocation}
              onClick={() => setIsError({ ...isError, toLocation: true })}
              onChange={(e) => {
                setData({ ...data, toLocation: e.target.value });
                () => setIsError({ ...isError, toLocation: true });
              }}
            >
              <option selected>Pick a place</option>
              {allDistrict?.map((item) => {
                return <option value={item?.name} key={item?.id}>{item?.name}</option>;
              })}
            </select>
          </div>
          {isError.toLocation && data.toLocation === "" && (
            <p className="text-red-500 text-xs">{"The field is required*"}</p>
          )}
        </div>
        {/* Depart date */}
        <div>
          <div className="bg-white text-black px-1 py-3 rounded">
            <h5 className="text-xs">Depart</h5>
            <div onClick={() => setIsError({ ...isError, depart: true })}>
              <DatePicker
                className="w-full outline-none"
                on
                selected={data.depart}
                onChange={(date) => {
                  setData({ ...data, depart: date });
                }}
              />
            </div>
          </div>
          {isError.depart && data.depart === "" && (
            <p className="text-red-500 text-xs">{"depart date need*"}</p>
          )}
        </div>
        {/* Return Date */}
        <div>
          <div className="bg-white text-black px-1 py-3 rounded">
            <h5 className="text-xs">Return</h5>
            <div onClick={() => setIsError({ ...isError, return: true })}>
              <DatePicker
                className="w-full outline-none"
                selected={data.return}
                onChange={(date) => setData({ ...data, return: date })}
              />
            </div>
          </div>
          {isError.return && data.return === "" && (
            <p className="text-red-500 text-xs">{"return date need*"}</p>
          )}
        </div>
        {/* Travelers section */}
        <div>
        <div className="bg-white text-black px-6 rounded ">
          <h5 className="text-xs">Travelers</h5>
          <details className="dropdown ">
            <summary className=" btn hover:bg-white bg-white border-none p-0">
              1 Guest(s)
            </summary>
            <ul className=" shadow menu dropdown-content  bg-base-100 p-">
              <div>
                <div className="flex gap-10 ">
                  <div>
                    <div className="flex items-center">
                      <h5>Adults</h5>
                      <select
                        onClick={() =>
                          setIsError({ ...isError, adultSeat: true })
                        }
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
                  </div>
                  <div>
                  <div className="flex items-center">
                    <h5>Child</h5>
                    <select
                    defaultValue={data.childSeat}
                      onClick={() =>
                        setIsError({ ...isError, childSeat: true })
                      }
                      onChange={(e) =>
                        setData({ ...data, childSeat: e.target.value })
                      }
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
              </div>
            </ul>
          </details>
        </div>
        {isError.adultSeat && data.adultSeat === "" && (
                      <p className="text-red-500 text-xs">{"select seat*"}</p>
                    )}
        </div>
        <div>
          <button onClick={handleSearchData} className="bg-red-500 px-5 py-3 rounded">Search</button>
        </div>
      </div>
    </>
  );
};

export default Flight;
