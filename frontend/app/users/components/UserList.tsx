'use client';

import React, { useState } from 'react';
import { User } from "@prisma/client";
import UserBox from "./UserBox";
import { FaSearch } from 'react-icons/fa';  // Import the search icon

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Use optional chaining to safely access 'user.name'
  const filteredUsers = items.filter(user => 
    user.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside 
      className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-96 lg:block overflow-y-auto border-r bg-white block w-full left-0"
    >
      <div className="flex-col">
        <div 
          className="text-2xl font-bold text-center text-green-800 py-4 bg-blue-300"
        >
          Islanders!
        </div>

        <div className="py-4 p-2 relative">
          <input 
            type="text"
            placeholder="Search for users..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="p-2 pl-8 w-full rounded border border-black" // Rounded and black border
          />
          <FaSearch className="absolute top-5 right-6 mt-2 text-gray-500" />  {/* Position the search icon */}
        </div>
      </div>

      {filteredUsers.map((item) => (
        <UserBox
          key={item.id}
          data={item}
        />
      ))}
    </aside>
  );
}

export default UserList;
