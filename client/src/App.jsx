import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { DebounceInput } from 'react-debounce-input';

/////////// State
// 1. มี 4 states: tripList//, isError//, isLoading// & searchText//
// 2. มี 1 event: onChange (callback: handleChange) //
// 3. มี 1 function : handleChange //

////////// Fetching
// 1. API: GET- http://localhost:4001/trips?keywords=searchText //
// 2.axios : ติดตั้ง, import and execute //
//    2.1 สร้าง request ใน function แล้วอัพเดท state //
//    2.2 execute ใน useEffect เมื่อ searchText มีการเปลี่ยนแปลง //
// 3.นำข้อมูลจาก Response มา Render //

////////// Using react-debounce-input
// 1 npm i react-debounce-input //
// 2 import {DebounceInput} from 'react-debounce-input' //
// 3 อัพเดท input เป็น <DebounceInput minLength={2} debounceTimeout={500} ...> //

///////////////////////////// Optinal
///////// เมื่อ User คลิกที่หมวดหมู่จะต้องเอาข้อความที่คลิกไปใส่ลงในช่อง Input เพื่อทำการค้นหา
// 1. มี 1 event: onClick (callback: handleTagClick) //
// 2. มี 1 function : handleTagClick //
///////// ในแต่ละรายการสถานที่ท่องเที่ยวจะมี ปุ่มสีฟ้าๆ ที่สามารถกดแล้วจะ Copy ลิ้งค์ที่สามารถกดเข้าไปดูรายละเอียดเพิ่มเติมได้ลงใน Clipboard
// 1. มี 1 event: onClick (callback: handleCopyLink) //
// 2. มี 1 function : handleCopyLink //
// ref: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard

function App() {
  const [trips, setTrips] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (tag) => {
    setSearchText((prevText) => (prevText ? `${prevText} ${tag}` : tag));
  };

  const handleCopyLink = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('Link copied to clipboard');
    } catch (error) {
      alert('Fail to copy', err);
    }
  };

  const getTripsData = async (text) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios.get(
        `http://localhost:4001/trips?keywords=${text}`
      );
      // console.log(results);
      // console.log(results.data.data);
      setTrips(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      alert(error);
    }
  };

  useEffect(() => {
    getTripsData(searchText);
  }, [searchText]);

  return (
    <div
      className="App flex flex-col justify-center items-center font-['kanit']
    "
    >
      {/* Start coding here */}
      <header className="min-w-[900px] flex flex-col gap-3 px-6 pt-[5%]">
        <h1 className="text-6xl text-blue-400 text-center">เที่ยวไหนดี</h1>
        <label className="" htmlFor="message-text">
          ค้นหาที่เที่ยว
        </label>
        {/* <input
          className="text-center text-xl border-b-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-blue-400"
          type="text"
          id="message-text"
          name="message-text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          onChange={handleChange}
          value={searchText}
        /> */}
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          className="text-center text-xl border-b-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-blue-400"
          type="text"
          id="message-text"
          name="message-text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          onChange={handleChange}
          value={searchText}
        />
      </header>
      <main className=" flex flex-col gap-12 pt-10 pb-[5%]">
        {trips.length > 0 ? (
          trips.map((trip) => {
            return (
              <section className="min-w-[1000px] flex space-x-6" key={trip.eid}>
                {/* image  */}
                <div
                  className="w-1/3 h-64 rounded-3xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${trip.photos[0]})`
                  }}
                ></div>
                {/* constent  */}
                <div className="relative w-2/3 flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">{trip.title}</h1>
                  <p className="text-slate-500">
                    {trip.description.length > 100
                      ? trip.description.split('').slice(0, 100).join('') +
                        '...'
                      : trip.description}
                  </p>
                  <a
                    className="underline hover:no-underline text-blue-400"
                    href={trip.url}
                  >
                    อ่านต่อ
                  </a>
                  <div className="flex gap-3 text-slate-500">
                    <p>หมวด</p>
                    <ul className="flex flex-wrap gap-3">
                      {trip.tags.map((item, index) => {
                        return (
                          <div className="flex gap-3" key={index}>
                            {index === trip.tags.length - 1 ? (
                              <span>และ</span>
                            ) : null}
                            <li className="underline hover:no-underline">
                              <a href="#" onClick={() => handleTagClick(item)}>
                                {item}
                              </a>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex space-x-6 w-full h-24 mt-3">
                    <div
                      className="w-28 h-full rounded-xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${trip.photos[1]})`
                      }}
                    ></div>
                    <div
                      className="w-28 h-full rounded-xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${trip.photos[2]})`
                      }}
                    ></div>
                    <div
                      className="w-28 h-full rounded-xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${trip.photos[3]})`
                      }}
                    ></div>
                  </div>
                  <button
                    className="absolute bottom-5 right-5 rounded-full text-2xl text-blue-500 border-solid border-2 border-blue-500 p-1"
                    onClick={() => handleCopyLink(trip.url)}
                  >
                    <i className="fa-solid fa-link "></i>
                  </button>
                </div>
              </section>
            );
          })
        ) : (
          <h1 className="text-4xl text-red-400">Not found</h1>
        )}
      </main>
      {isError ? (
        <h1 className="text-4xl text-red-500">Request failed</h1>
      ) : null}
      {isLoading ? (
        <h1 className="text-4xl text-green-400">Loading ....</h1>
      ) : null}
    </div>
  );
}

export default App;
