import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const ProfileRow = ({ list }) => {
  return (
    <tr>
      <td>{list.id}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={list.proImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{list.firstName}</div>
      </td>
      <td>
        <div className="font-bold">{list.lastName}</div>
      </td>
      <td>
        <div className="text-sm opacity-50">{list.country}</div>
      </td>
      <td>
        <p className="badge badge-ghost badge-sm px-6 py-5 text-base bg-orange-200 font-semibold">
          {list.job}
        </p>
      </td>
      <td>{list.email}</td>
      <td className="flex">
        <button className="btn btn-ghost btn-xs">
          <FaEdit className="text-3xl text-violet-500" />
        </button>
        <button className="btn btn-ghost btn-xs">
          <MdDeleteForever className="text-3xl text-red-600" />
        </button>
      </td>
    </tr>
  );
};

export default ProfileRow;
