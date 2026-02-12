import React from "react";
import { Search } from "lucide-react";

const OrderFilter = ({ search, setSearch }) => {
  return (
    <div className="w-full mb-4">

      <div className="relative w-full md:w-80">

        <input
          type="text"
          placeholder="Search by ID or Customer..."
          className="w-full border border-gray-300 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />

      </div>

    </div>
  );
};

export default OrderFilter;
