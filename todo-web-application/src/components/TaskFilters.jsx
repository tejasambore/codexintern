const TaskFilters = ({ setFilter }) => {
    return (
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Completed
        </button>
      </div>
    );
  };
  
  export default TaskFilters;
  