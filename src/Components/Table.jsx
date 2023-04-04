import React from 'react';

const Table = () => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 font-bold text-left">Name</th>
          <th className="px-4 py-2 font-bold text-left">Email</th>
          <th className="px-4 py-2 font-bold text-left">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="px-4 py-2">John Doe</td>
          <td className="px-4 py-2">john.doe@example.com</td>
          <td className="px-4 py-2">Admin</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Jane Doe</td>
          <td className="px-4 py-2">jane.doe@example.com</td>
          <td className="px-4 py-2">User</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="px-4 py-2">Bob Smith</td>
          <td className="px-4 py-2">bob.smith@example.com</td>
          <td className="px-4 py-2">User</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
