import React from "react";

function CheckoutForm() {
  return (
    <div className="w-[990px] max-h-[762px] bg-[#FFFFFF] mx-auto mb-6 ">
      <h1 className="font-serif text-[20px] leading-[30px] text-[#000F1A] ml-[60px] mt-[35px] border border-b-[#D2D6DE]  ">
        Create Payment
      </h1>
      <form className="flex flex-row m-5">
        <div className="flex flex-col w-[400px] max-h-[497px] ml-[49px] mr-12">
          <div className="w-[400] h-16 mt-5">
            <label
              htmlFor="name"
              className="w-32 h-5 text-[#000F1A] font-normal text-sm font-mono "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-3 border border-[#D2D6DE] rounded box-border bg-[#FAF9FE] w-[400px] h-10  py-2 px-3  mb-4"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="w-[400] h-16 mt-5">
            <label
              htmlFor="email"
              className="w-32 h-5 text-[#000F1A] font-normal text-sm font-mono "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" mt-3 border border-[#D2D6DE] rounded box-border bg-[#FAF9FE] w-[400px] h-10  py-2 px-3  mb-4"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="w-[400] h-16 mt-5">
            <label
              htmlFor="address"
              className="w-32 h-5 text-[#000F1A] font-normal text-sm font-mono "
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className=" mt-3 border border-[#D2D6DE] rounded box-border bg-[#FAF9FE] w-[400px] h-10  py-2 px-3  mb-4"
              placeholder="123 Main St"
              required
            />
          </div>
          <div className="w-[400] h-16 mt-5">
            <label
              htmlFor="city"
              className="w-32 h-5 text-[#000F1A] font-normal text-sm font-mono "
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className=" mt-3 border border-[#D2D6DE] rounded box-border bg-[#FAF9FE] w-[400px] h-10  py-2 px-3  mb-4"
              placeholder="Anytown"
              required
            />
          </div>

          <div className="w-[400] h-16 mt-5">
            <label
              htmlFor="message"
              className="w-32 h-5 text-[#000F1A] font-normal text-sm font-mono "
            >
              Message:
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="shadow appearance-none border mt-5 border-[#D2D6DE] rounded w-96 h-24  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              required
            />
          </div>
          {/* <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            name="message"
            value=""
            placeholder="Enter your message"
            className="shadow w-96 h-24  border rounded  py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline  "
            required
          /> */}
          <button className="block mt-8 w-[118px] h-[42px] bg-[#257BBE]  hover:bg-blue-700 text-white font-bold py-3 px-7 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
        <div className=" w-[4300px] h-[300px]">
          <ul className=" w-96 h-60 box-border m-5 drop-shadow-md border border-[#D2D6DE] rounded-md">
            <li className="w-96 h-12 px-4 py-2 flex justify-between items-center border-b border-[#D2D6DE]">
              <div className="text-[#767676] w-20 h-5 text-sm font-normal">
                name
              </div>
              <div className="text-[#000F1A] w-16 h-5 text-sm font-semibold">
                12
              </div>
            </li>
            <li className="w-96 h-12 px-4 py-2 flex justify-between items-center border-b border-[#D2D6DE]">
              <div className="text-[#767676] w-20 h-5 text-sm font-normal">
                name
              </div>
              <div className="text-[#000F1A] w-16 h-5 text-sm font-semibold">
                12
              </div>
            </li>
            <li className="w-96 h-12 px-4 py-2 flex justify-between items-center border-b border-[#D2D6DE]">
              <div className="text-[#767676] w-20 h-5 text-sm font-normal">
                name
              </div>
              <div className="text-[#000F1A] w-16 h-5 text-sm font-semibold">
                12
              </div>
            </li>
            <li className="w-96 h-12 px-4 py-2 flex justify-between items-center border-b border-[#D2D6DE]">
              <div className="text-[#767676] w-20 h-5 text-sm font-normal">
                name
              </div>
              <div className="text-[#000F1A] w-16 h-5 text-sm font-semibold">
                12
              </div>
            </li>
            <li className="w-96 h-12 px-4 py-2 flex justify-between items-center border-b border-[#D2D6DE]">
              <div className="text-[#767676] w-20 h-5 text-sm font-normal">
                name
              </div>
              <div className="text-[#000F1A] w-16 h-5 text-sm font-semibold">
                12
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
