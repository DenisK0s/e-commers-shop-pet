"use client";

import Image from "next/image";

const SearchInput = () => {
  return (
    <div className={` flex items-center border rounded  mb-4`}>
      <div className="size-6  ml-4 mt-6 absolute  inset-y-0 flex items-center pl-3 pointer-events-none">
        {" "}
        <Image
          src="/icons/search02.svg"
          alt="Search"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <input
        type="text"
        placeholder="Search"
        className=" pl-12 pr-4  py-2 w-full rounded-md border border-neutral-dark-gray focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
    </div>
  );
};

export default SearchInput;
