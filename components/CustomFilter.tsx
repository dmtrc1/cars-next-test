"use client";

import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

type OptionProps = {
  title: string;
  value: string;
};

type CustomFilterProps = {
  title: string;
  options: OptionProps[];
  setFilter: (value: any) => void
};

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => {
        setSelected(e)
        setFilter(e.value)
      }}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <div className="truncate">{selected.title}</div>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron icon"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;








