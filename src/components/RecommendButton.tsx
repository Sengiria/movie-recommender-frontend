const base = import.meta.env.BASE_URL;

const RecommendButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer group mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-200 to-blue-400 text-white shadow-lg hover:shadow-xl flex items-center gap-2 transition-transform"
    >
      <span className="font-semibold">Recommend</span>

      <div className="overflow-hidden transition-all duration-300 group-hover:w-6 w-0">
        <img
          src={`${base}popcorn.gif`}
          alt="popcorn"
          className="h-6"
        />
      </div>

    </button>
  );
};

export default RecommendButton;
