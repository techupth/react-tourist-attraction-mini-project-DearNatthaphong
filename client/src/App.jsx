import './App.css';

function App() {
  return (
    <div
      className="App flex flex-col justify-center items-center font-['kanit']
    "
    >
      {/* Start coding here */}
      <header className="min-w-[1000px] flex flex-col gap-3 px-6 pt-[5%]">
        <h1 className="text-6xl text-blue-400 text-center">เที่ยวไหนดี</h1>
        <label className="" htmlFor="message-text">
          ค้นหาที่เที่ยว
        </label>
        <input
          className="text-center text-xl border-b-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-blue-400"
          type="text"
          id="message-text"
          name="message-text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
        />
      </header>
      <main className="min-w-[1000px] flex flex-col gap-12 pt-10">
        <section className="flex space-x-6">
          {/* image  */}
          <div
            className="w-1/3 h-64 rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://picsum.photos/id/16/200")'
            }}
          ></div>
          {/* constent  */}
          <div className="relative w-2/3 flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold">
              คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!
            </h1>
            <p className="text-zinc-500">
              วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกินกรรมต่างๆ เช่น เที่ยวน้ำตก
              ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า
            </p>
            <a className="underline hover:no-underline text-blue-500" href="#">
              อ่านต่อ
            </a>
            <div className="flex space-x-3">
              <p>หมวด</p>
              <ul className="flex space-x-3">
                <li className="underline hover:no-underline">
                  <a href="#">เกาะ</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">ทะเล</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">จุดชมวิว</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">ธรรมชาติ</a>
                </li>
                <li className="underline hover:no-underline">
                  <span className="pr-3">และ</span>
                  <a href="#">ตราด</a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-6 w-full h-24">
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
            </div>
            <div className="absolute bottom-5 right-5 rounded-full text-3xl text-blue-500 border-solid border-2 border-blue-500 ">
              <i class="fa-solid fa-link "></i>
            </div>
          </div>
        </section>
        <section className="flex space-x-6">
          {/* image  */}
          <div
            className="w-1/3 h-64 rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://picsum.photos/id/16/200")'
            }}
          ></div>
          {/* constent  */}
          <div className="relative w-2/3 flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold">
              คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!
            </h1>
            <p className="text-zinc-500">
              วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกินกรรมต่างๆ เช่น เที่ยวน้ำตก
              ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า
            </p>
            <a className="underline hover:no-underline text-blue-500" href="#">
              อ่านต่อ
            </a>
            <div className="flex space-x-3">
              <p>หมวด</p>
              <ul className="flex space-x-3">
                <li className="underline hover:no-underline">
                  <a href="#">เกาะ</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">ทะเล</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">จุดชมวิว</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">ธรรมชาติ</a>
                </li>
                <li className="underline hover:no-underline">
                  <span className="pr-3">และ</span>
                  <a href="#">ตราด</a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-6 w-full h-24">
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
            </div>
            <div className="absolute bottom-5 right-5 rounded-full text-3xl text-blue-500 border-solid border-2 border-blue-500 ">
              <i class="fa-solid fa-link "></i>
            </div>
          </div>
        </section>
        <section className="flex space-x-6">
          {/* image  */}
          <div
            className="w-1/3 h-64 rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://picsum.photos/id/16/200")'
            }}
          ></div>
          {/* constent  */}
          <div className="relative w-2/3 flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold">
              คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!
            </h1>
            <p className="text-zinc-500">
              วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกินกรรมต่างๆ เช่น เที่ยวน้ำตก
              ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า
            </p>
            <a className="underline hover:no-underline text-blue-500" href="#">
              อ่านต่อ
            </a>
            <div className="flex space-x-3">
              <p>หมวด</p>
              <ul className="flex space-x-3">
                <li className="underline hover:no-underline">
                  <a href="#">เกาะ</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">ทะเล</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">จุดชมวิว</a>
                </li>
                <li className="underline hover:no-underline">
                  <a href="#">ธรรมชาติ</a>
                </li>
                <li className="underline hover:no-underline">
                  <span className="pr-3">และ</span>
                  <a href="#">ตราด</a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-6 w-full h-24">
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
              <div
                className="w-24 h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/id/16/200")'
                }}
              ></div>
            </div>
            <div className="absolute bottom-5 right-5 rounded-full text-3xl text-blue-500 border-solid border-2 border-blue-500 ">
              <i class="fa-solid fa-link "></i>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
