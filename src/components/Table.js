import React from "react";
import TableRow from "./TableRow.js";
import { API_URL } from "../config/config.js";
const Table = ({ data, project }) => {
  const handleDelete = async (episodeIndex) => {
    try {
      const url = `${API_URL}/projects/${project._id}/episodes/${episodeIndex}`;

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Episode deleted successfully");
      } else {
        alert("Failed to delete episode");
      }
    } catch (error) {
      // Handle unexpected errors
      console.error(error);
    }
  };

  const handleEdit = () => {};

  const formattedDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    });
  };

  return (
    <table className="table border border-1 border-[#b3b3b3] p-10 rounded-[10px]">
      <thead>
        <tr className="border-b-2 p-4">
          <th>Name</th>
          <th>Upload Date and Time</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            name={item.episodeName}
            uploadDateTime={formattedDate(item.createdAt)}
            status="Done"
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
