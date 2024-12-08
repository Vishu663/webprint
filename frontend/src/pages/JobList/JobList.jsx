import "./JobList.css";
import { MdEmail, MdSpaceDashboard } from "react-icons/md";
import { BsFillPrinterFill } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { BsBriefcaseFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { FaCloudArrowUp } from "react-icons/fa6";
import { uploadFile } from "../../api/api"; // Import the uploadFile function from your API file

export default function JobList() {
  const navigate = useNavigate();
  const [iconStates, setIconStates] = useState({
    dashboard: false,
    briefcase: true,
    printer: false,
    groceryStore: false,
    settings: false,
    logout: false,
  });
  const handleIconClick = (icon) => {
    setIconStates((prevIconStates) => {
      const newIconStates = { ...prevIconStates };

      // Toggle the clicked icon
      newIconStates[icon] = !newIconStates[icon];

      // Deactivate other icons
      Object.keys(newIconStates).forEach((key) => {
        if (key !== icon) {
          newIconStates[key] = false;
        }
      });

      return newIconStates;
    });
  };

  const handleDashboard = () => {
    navigate("/home");
  };

  const handlePrint = () => {
    navigate("/printerlist");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpload = async (jobName, file) => {
    try {
      // Upload the file using the API function
      await uploadFile(jobName, file);
      closeModal(); // Close the modal after successful upload
      // Optionally, you can update state or perform other actions upon successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error
    }
  };

  return (
    <>
      <div className="job-main">
        <div className="sidebar">
          <div className="top-icons">
            <div onClick={handleDashboard}>
              <MdSpaceDashboard
                className={`side-icon ${iconStates.dashboard ? "active" : ""}`}
                onClick={() => handleIconClick("dashboard")}
              />
              <p>Dashboard</p>
            </div>
            <div>
              <BsBriefcaseFill
                className={`side-icon ${iconStates.briefcase ? "active" : ""}`}
                onClick={() => handleIconClick("briefcase")}
              />
              <p>Job List</p>
            </div>
            <div onClick={handlePrint}>
              <BsFillPrinterFill
                className={`side-icon ${iconStates.printer ? "active" : ""}`}
                onClick={() => handleIconClick("printer")}
              />
              <p>Printer List</p>
            </div>
            <div>
              <MdOutlineLocalGroceryStore
                className={`side-icon ${
                  iconStates.groceryStore ? "active" : ""
                }`}
                onClick={() => handleIconClick("groceryStore")}
              />
              <p>Store</p>
            </div>
          </div>
          <div className="bottom-icons">
            <div>
              <IoIosSettings
                className={`side-icon ${iconStates.settings ? "active" : ""}`}
                onClick={() => handleIconClick("settings")}
              />
              <p>Settings</p>
            </div>
            <div onClick={handleLogout}>
              <IoLogOut
                className={`side-icon ${iconStates.logout ? "active" : ""}`}
                onClick={() => handleIconClick("logout")}
              />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="jb-dashboard">
          <div className="db-left">
            <div className="jb-section-1">
              <div className="headline">
                <h4>Recent Jobs</h4>
                <h4>View All</h4>
              </div>
              {/* Recent Jobs Table */}
            </div>
            <div className="jb-section-2" onClick={openModal}>
              <BsBriefcaseFill className="job-icon" />
              <h3>Create Job</h3>
            </div>
          </div>
          <div className="db-right">
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>
      {/* Modal for creating job */}
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          title="Create Job"
          onSubmit={handleUpload} // Pass the handleUpload function as onSubmit prop
          label1={"Job Name"}
          label2={"Upload File"}
          pholder1={"Mention the Job Name here"}
          pholder2={"Browse the file"}
          pholder3={"Select the printers for the job"}
          itype={'file'}
          icon1={<MdEmail />}
          icon2={<FaCloudArrowUp />}
          modalPlaceholder="Enter your text here" // Placeholder prop for input field in Modal
        />
      )}
    </>
  );
}
