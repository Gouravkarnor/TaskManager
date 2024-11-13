import React, { useState, useEffect } from "react";
import Form from "./Form";
import TaskCard from "./TaskCard";
import Nodatafoundcard from "./Nodatafoundcard";
import SearchWithFilters from "./SearchWithFilters";
import HeadingCard from "./HeadingCard";
import UpdateForm from "./UpdateForm";

const Dashboard = () => {
  const [updatedata, setupdateData] = useState([]);
  const [updateui, setUpdateUi] = useState(false);
  const [showform, setShowform] = useState(false);
  const [showupdateform, setShowupdateform] = useState(false);
  const [FilterKey, setFilterKey] = useState("Upcoming Tasks");
  const [searchPriority, setSearchedPriority] = useState("");
  const [FilteredData, setFilteredData] = useState();
  const [SearchbarInput, setSearchbarInput] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("taskData")) || [];
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for an accurate comparison
    // Filter based on FilterKey
    const filtered1 = storedData
      .filter((task) => {
        // Combine the search filter conditions, ensuring `SearchbarInput` is used correctly.
        console.log(
          task.title.toLowerCase().includes(SearchbarInput.toLowerCase()) ||
            task.description
              .toLowerCase()
              .includes(SearchbarInput.toLowerCase())
        );
        if (SearchbarInput !== "") {
          return (
            task.title.toLowerCase().includes(SearchbarInput.toLowerCase()) ||
            task.description
              .toLowerCase()
              .includes(SearchbarInput.toLowerCase())
          );
        }
        return true; // Return all tasks if no SearchbarInput
      })
      .filter((task) => {
        const taskDate = new Date(task.dueDate);
        const today = new Date();

        // Combine the filtering based on `FilterKey`.
        if (FilterKey === "completed") return task.iscompleted;
        if (FilterKey === "Missed Tasks")
          return taskDate < today && !task.iscompleted;
        if (FilterKey === "Upcoming Tasks")
          return taskDate >= today && !task.iscompleted;

        return true; // Return all if no FilterKey is set
      });
    const filtered2 = filtered1.filter((task) => {
      if (searchPriority === "High Priority") return task.priority === "high";
      if (searchPriority === "Medium Priority")
        return task.priority === "medium";
      if (searchPriority === "Low Priority") return task.priority === "low";
      return true;
    });
    console.log(filtered2);
    setFilteredData(filtered2);
  }, [
    FilterKey,
    showform,
    updateui,
    searchPriority,
    SearchbarInput,
    showupdateform,
  ]);
  console.log("sss", FilteredData);

  return (
    <>
      <div className="relative mx-auto p-10 pt-2.5">
        {/* --------------Add button------------------ */}
        <div
          className="flex items-center justify-center space-x-2 border bg-blue-900 border-white-600 text-white rounded-lg hover:bg-white hover:text-green-600 hover:border-4 hover:border-green-600 transition-colors cursor-pointer h-[40px] px-4 w-full md:w-4/5 lg:w-4/5 mx-auto select-none"
          onClick={() => setShowform(!showform)}
        >
          {!showform ? (
            <>
              <span className="text-lg md:text-xl lg:text-2xl font-medium">
                +
              </span>
              <span className="text-lg md:text-xl lg:text-1xl font-medium">
                Add Task
              </span>
            </>
          ) : (
            <>
              <span className="text-lg md:text-xl lg:text-2xl font-medium">
                X
              </span>
              <span className="text-lg md:text-xl lg:text-1xl font-medium">
                Close Form
              </span>
            </>
          )}
        </div>
        <SearchWithFilters
          setfilter={setFilterKey}
          setPriority={setSearchedPriority}
          setsearch={setSearchbarInput}
        />
        <HeadingCard />

        {/* -------------- filters -----------   */}

        {/* Form shown above background content */}
        {showform && (
          <div className=" absolute z-50 top-12 left-0 right-0 flex justify-center bg-white bg-opacity-70 mt-50">
            <Form closeForm={setShowform} />
          </div>
        )}
        {showupdateform && (
          <div className="absolute z-50 top-12 left-0 right-0 flex justify-center mt-50 bg-white bg-opacity-70">
            <UpdateForm closeForm={setShowupdateform} data={updatedata} />
          </div>
        )}
        {FilteredData?.length ? (
          FilteredData.sort((a, b) => {
            // Convert dueDate to Date objects for comparison
            const dateA = new Date(a.dueDate);
            const dateB = new Date(b.dueDate);

            // Compare due dates
            if (dateA < dateB) return -1;
            if (dateA > dateB) return 1;

            // If due dates are the same, sort by priority
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          }).map((item, index) => (
            <TaskCard
              key={index}
              id={index}
              title={item.title}
              priority={item.priority}
              description={item.description}
              dueDate={item.dueDate}
              updatecards={setUpdateUi}
              completed={item.iscompleted}
              showform={setShowupdateform}
              formdata={setupdateData}
            />
          ))
        ) : (
          <Nodatafoundcard />
        )}
      </div>
    </>
  );
};

export default Dashboard;
