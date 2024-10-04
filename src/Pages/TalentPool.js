import {useState, React} from 'react';
const data = [
    {
      consultantId: "LITC00458",
      roleTitle: "MERN Fullstack Developer",
      experience: "1 yrs 3 months",
      skills: ["NodeJS, AWS, ExpressJS, EC2, MongoDB"],
    },
    {
      consultantId: "LITC00457",
      roleTitle: "Java Developer",
      experience: "9 yrs",
      skills: ["MVC, Swagger, Azure, Microservices, Web"],
    },
    {
      consultantId: "LITC00456",
      roleTitle: "Data Modeler",
      experience: "9 yrs 2 months",
      skills: ["Azure Data Bricks, Snowflake, OLAP, PowerBI"],
    },
    {
      consultantId: "LITC00458",
      roleTitle: "MERN Fullstack Developer",
      experience: "6 yrs 4 months",
      skills: ["NodeJS, AWS, ExpressJS, EC2, MongoDB"],
    },
    {
      consultantId: "LITC00457",
      roleTitle: "Java Developer",
      experience: "9 yrs",
      skills: ["MVC, Swagger, Azure, Microservices, Web"],
    },
    {
      consultantId: "LITC00456",
      roleTitle: "Data Modeler",
      experience: "9 yrs 2 months",
      skills: ["Azure Data Bricks, Snowflake, OLAP, PowerBI"],
    },
    {
      consultantId: "LITC00458",
      roleTitle: "MERN Fullstack Developer",
      experience: "1 yrs 3 months",
      skills: ["NodeJS, AWS, ExpressJS, EC2, MongoDB"],
    },
    {
      consultantId: "LITC00457",
      roleTitle: "Java Developer",
      experience: "9 yrs",
      skills: ["MVC, Swagger, Azure, Microservices, Web"],
    },
    {
      consultantId: "LITC00456",
      roleTitle: "Data Modeler",
      experience: "9 yrs 2 months",
      skills: ["Azure Data Bricks, Snowflake, OLAP, PowerBI"],
    },
    {
      consultantId: "LITC00458",
      roleTitle: "MERN Fullstack Developer",
      experience: "6 yrs 4 months",
      skills: ["NodeJS, AWS, ExpressJS, EC2, MongoDB"],
    },
    {
      consultantId: "LITC00457",
      roleTitle: "Java Developer",
      experience: "9 yrs",
      skills: ["MVC, Swagger, Azure, Microservices, Web"],
    },
    {
      consultantId: "LITC00456",
      roleTitle: "Data Modeler",
      experience: "9 yrs 2 months",
      skills: ["Azure Data Bricks, Snowflake, OLAP, PowerBI"],
    },
  ];

const TalentPool = () => {
    const [SearchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  //Handle search input
  const handleSearch = (e) => {
    const inputText = e.target.value.toLowerCase();
    setSearchTerm(inputText);

    //Handle Filtered Data
    const filtered = data.filter(
      (item) =>
        item.consultantId.toLowerCase().includes(inputText) ||
        item.roleTitle.toLowerCase().includes(inputText) ||
        item.experience.toLowerCase().includes(inputText) ||
        item.skills.join(",").toLowerCase().includes(inputText)
    );
    setFilteredData(filtered);
  };

    return (
      <div className="flex flex-col mx-auto p-4">
        {/* Made a card here */}
        <div className="flex flex-col bg-white shadow-md rounded p-1 mb-2 pl-4 pr-4">
          <h1 className="text-md text-left font-semibold mb-2 ml-1">
            Search for Employees
          </h1>
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search ..."
            value={SearchTerm}
            onChange={handleSearch}
            className="border border-gray-300 p-3 rounded-full w-full focus:outline-none shadow-sm h-10 mb-2"
          />
      </div>

      {/* Card for the table */}
      <div className="flex flex-col mx-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Employee List
        </h2>
        <table className="min-w-full border-gray-500 border-2">
          <thead className="bg-blue-200">
            <tr>
              <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">
                Consultant ID
              </th>
              <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">
                Role Title
              </th>
              <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">
                Experience
              </th>
              <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">
                Skills
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-gray-50 hover:bg-blue-100 transition duration-300"
                >
                  <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">
                    {item.consultantId}
                  </td>
                  <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">
                    {item.roleTitle}
                  </td>
                  <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">
                    {item.experience}
                  </td>
                  <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">
                    {item.skills.join(", ")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="border-b border-gray-500 px-4 py-2 text-center text-gray-600"
                  colSpan="4"
                >
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
        
    );
};

export default TalentPool;

