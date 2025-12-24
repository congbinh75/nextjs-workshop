import { PaginationModel } from "@/types/pagination";

interface PaginationProps {
  pagination: PaginationModel;
}

const Pagination = ({ pagination }: PaginationProps) => {
  return (
    <div className="row">
      <nav className="pagination">
        <span
          className={`page-numbers next ${
            pagination.page === 1 ? "inactive" : ""
          }`}
        >
          Prev
        </span>
        {Array.from({ length: pagination.totalPage }, (_, index) => (
          <span
            key={index + 1}
            className={`page-numbers ${
              index + 1 === pagination.page ? "current" : ""
            }`}
          >
            {index + 1}
          </span>
        ))}
        <a
          href="#"
          className={`page-numbers next ${
            pagination.page === pagination.totalPage ? "inactive" : ""
          }`}
        >
          Next
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
