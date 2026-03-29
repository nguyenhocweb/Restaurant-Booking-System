interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  limit: number
}
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { Button } from "../ui";
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  limit
}: Props) {
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 4) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="gray"
        sizea="p3_2"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FaAngleDoubleLeft />
      </Button>

      {getPages().map((p, i) =>
        p === "..." ? (
          <span key={i}>...</span>
        ) : (
          <Button
            variant={currentPage === p ? "green" : "gray"}
            sizea="p4_2"
            key={i}
            onClick={() => onPageChange(Number(p))}
          >
            {p}
          </Button>
        )
      )}

      <Button
        variant="gray"
        sizea="p3_2"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FaAngleDoubleRight />
      </Button>
    </div>
  );
}