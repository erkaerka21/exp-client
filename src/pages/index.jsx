import Image from "next/image";
import { Inter } from "next/font/google";
import ProfileTable from "@/components/profile-table";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Modal from "@/components/modal";
// import Modal from "@/components/modal";

export default function Home() {
  const [seeModal, setSeeModal] = useState(false);
  const [firstNameI, setFirstNameI] = useState("");
  const [lastNameI, setLastNameI] = useState("");
  const [countryI, setCountryI] = useState("");
  const [jobI, setJobI] = useState("");
  const [emailI, setEmailI] = useState("");

  const createNewWorker = async () => {
    const response = await fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstNameI,
        lastName: lastNameI,
        country: countryI,
        email: emailI,
        job: jobI,
        proImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { workers: users } = await response.json();
    // console.log("nemeh worker:", { workers: users });
    setSeeModal(false);
  };
  // console.log("firstName:", setFirstNameI(e.target.value));

  return (
    <main className="">
      <h1 className="font-bold text-6xl text-center">Ажилтнуудын мэдээлэл</h1>
      <div className="my-4 text-end">
        <button
          className="p-4 bg-green-300 rounded-full mr-11"
          type="button"
          onClick={() => setSeeModal(true)}
        >
          <FaPlus />
        </button>
      </div>
      <ProfileTable />
      {seeModal ? (
        <>
          {/* <Modal setSeeModal={setSeeModal} /> */}
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-200">
            <div className="relative w-auto my-6 mx-auto max-w-fit">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t gap-10">
                  <h3 className="text-3xl font-bold">
                    Шинэ ажилтнуудын мэдээлэл оруулах
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setSeeModal(false)}
                  >
                    <IoClose className="text-2xl text-black hover:text-gray-400 focus:outline-none focus:ring focus:ring-gray-300" />
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-auto flex flex-col gap-y-5">
                    <div className="flex flex-row justify-between">
                      <div>
                        <label className="block text-black text-sm font-bold mb-1">
                          Нэр
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setFirstNameI(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-black text-sm font-bold mb-1">
                          Овог
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setLastNameI(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-black text-sm font-bold mb-1">
                        Харьяа улс
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={(e) => setCountryI(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-black text-sm font-bold mb-1">
                        Мэргэжил
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={(e) => setJobI(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-black text-sm font-bold mb-1">
                        Цахим шуудан
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={(e) => setEmailI(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setSeeModal(false)}
                  >
                    Хаах
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={createNewWorker}
                  >
                    Бүртгэх
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </main>
  );
}
