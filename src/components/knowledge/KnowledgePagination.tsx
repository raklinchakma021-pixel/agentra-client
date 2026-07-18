interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function KnowledgePagination({
  page,
  totalPages,
  setPage,
}: Props) {
  return (
    <div className="join flex justify-center">

      <button
        className="join-item btn"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`join-item btn ${
            page === index + 1 ? "btn-primary" : ""
          }`}
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="join-item btn"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}