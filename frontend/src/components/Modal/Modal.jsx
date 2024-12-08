import PropTypes from "prop-types";
import "./Modal.css";
import TextBox from "../TextField/TextField";
import { useState } from "react";

const Modal = ({
  onClose,
  onSubmit,
  title,
  label1,
  label2,
  pholder1,
  pholder2,
  pholder3,
  icon1,
  icon2,
  itype,
}) => {
  const [jobName, setJobName] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // onSubmit(jobName, file);
    console.log("test");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <div className="modal-fields">
          <div>
            <div className="modal-field">
              <div className="input-icon">{icon1}</div>
              <label>{label1}</label>
            </div>
            <TextBox
              type={"text"}
              placeholder={pholder1}
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />
          </div>
          <div>
            <div className="modal-field">
              <div className="input-icon">{icon2}</div>
              <label>{label2}</label>
            </div>
            <input
              type={itype}
              onChange={handleFileChange}
              accept=".stl,.gcode"
            />
          </div>
          <div className="modal-buttons">
            <button onClick={handleSubmit}>Create</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired, // Add onSubmit prop
  title: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  pholder1: PropTypes.string.isRequired,
  pholder2: PropTypes.string.isRequired,
  pholder3: PropTypes.string,
  icon1: PropTypes.node.isRequired,
  icon2: PropTypes.node.isRequired,
  itype: PropTypes.string.isRequired,
};
