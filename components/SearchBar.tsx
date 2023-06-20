"use client";

import { useCallback, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

type SearchBarProps = {
  setManufacturer: (val: string) => void,
  setModel: (val: string) => void,
}

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const router = useRouter();

  const [searchManufacturer, setSearchManufacturer] = useState('')
  const [searchModel, setSearchModel] = useState('')

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
        return alert("Please fill in the search bar");
      }

      setModel(searchModel)
      setManufacturer(searchManufacturer)
    },
    [searchManufacturer, searchModel]
  );

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer selected={searchManufacturer} setSelected={setSearchManufacturer} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[25px] h-[25px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
