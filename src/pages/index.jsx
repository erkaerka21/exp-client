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
        <Modal
          setSeeModal={setSeeModal}
          setFirstNameI={setFirstNameI}
          setLastNameI={setLastNameI}
          setCountryI={setCountryI}
          setJobI={setJobI}
          setEmailI={setEmailI}
          createNewWorker={createNewWorker}
        />
      ) : null}
    </main>
  );
}
