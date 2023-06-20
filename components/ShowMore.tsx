"use client";

import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
import { CARS_RESULT_LIMIT } from "@/constants";

type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
  setLimit: (val: number) => void;
};

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  if (isNext) return null;

  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * CARS_RESULT_LIMIT;
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      <CustomButton
        title="Show more"
        handleClick={handleNavigation}
        containerStyles="bg-primary-blue rounded-full text-white"
      />
    </div>
  );
};

export default ShowMore;
