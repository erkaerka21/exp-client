import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ProfileRow from "./profile-row";
import ProtableHead from "./pro-table-head";

const ProfileTable = () => {
  const [proTableLists, setProTableLists] = useState();

  const getLists = async () => {
    const response = await fetch(`http://localhost:8000/users`);
    const { users } = await response.json();
    setProTableLists(users);
  };
  useEffect(() => {
    getLists();
  }, []);
  console.log("protablelists", proTableLists);

  return (
    <div className="mt-5">
      <div>
        <table className="table">
          {/* head */}
          <ProtableHead />
          <tbody>
            {proTableLists?.map((list) => {
              return <ProfileRow list={list} />;
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ProfileTable;
