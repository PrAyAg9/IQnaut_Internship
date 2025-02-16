/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";

function TcSample() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      setSelectedFile(file);
      setSubmitSuccess(false);
    } else {
      alert("Please select a PDF file");
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPdfUrl("");
    setSubmitSuccess(false);
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setTimeout(() => {
        setSelectedFile(null);
        setPdfUrl("");
        setSubmitSuccess(false);
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = "";
        }
      }, 1000);
    } catch (error) {
      alert("Error submitting file. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tc-container">
      {/* Left Column (70%) – TC Sample Functionality */}
      <div className="left-column">
        <div className="tc-card">
          <div className="tc-header">
            <h4>Download TC Sample</h4>
          </div>
          <div className="tc-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Upload TC PDF</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </div>
              {submitSuccess && (
                <div className="alert alert-success">
                  File successfully submitted!
                </div>
              )}
              {selectedFile && (
                <div className="button-group">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleRemove}
                  >
                    Remove
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span> Submitting...
                      </>
                    ) : (
                      "Submit TC"
                    )}
                  </button>
                </div>
              )}
              {selectedFile && (
                <div className="pdf-container">
                  <iframe src={pdfUrl} title="TC PDF Viewer" />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Right Column (30%) – Guidelines */}
      <div className="right-column">
        <div className="guidelines-card">
          <div className="guidelines-header">
            <h4>TC Sample Guidelines</h4>
          </div>
          <div className="guidelines-body">
            <ul>
              <li>Ensure the TC sample is a clear and legible PDF.</li>
              <li>Verify all mandatory fields are correctly filled.</li>
              <li>Include the official school seal and signature.</li>
              <li>
                The sample should adhere to board-specific guidelines (ICSE, CBSE,
                etc.).
              </li>
              <li>Contact administration for any discrepancies.</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tc-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          gap: 20px;
          font-family: Arial, sans-serif;
        }
        .left-column {
          flex: 0 0 70%;
        }
        .right-column {
          flex: 0 0 30%;
        }
        .tc-card,
        .guidelines-card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .tc-header,
        .guidelines-header {
          background: #3D6CE7;
          padding: 15px;
          color: #fff;
          text-align: center;
        }
        .tc-header h4,
        .guidelines-header h4 {
          margin: 0;
          font-size: 1.5rem;
        }
        .tc-body,
        .guidelines-body {
          padding: 15px;
        }
        .form-group {
          margin-bottom: 8px;
        }
        .form-label {
          display: block;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .file-input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .alert {
          padding: 0.5rem;
          margin-bottom: 8px;
          border: 1px solid transparent;
          border-radius: 4px;
        }
        .alert-success {
          background-color: #d1e7dd;
          color: #0f5132;
          border-color: #badbcc;
        }
        .button-group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .btn {
          padding: 8px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        .btn-danger {
          background-color: #dc3545;
          color: #fff;
        }
        .btn-success {
          background-color: #28a745;
          color: #fff;
        }
        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .spinner {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
          margin-right: 0.5rem;
          vertical-align: middle;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .pdf-container {
          height: 800px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          overflow: hidden;
          margin-top: 8px;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        .guidelines-body ul {
          list-style: disc;
          padding-left: 20px;
          margin: 0;
        }
        .guidelines-body ul li {
          margin-bottom: 8px;
          font-size: 1rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .tc-container {
            flex-direction: column;
          }
          .left-column,
          .right-column {
            flex: 0 0 100%;
          }
          .pdf-container {
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
}

export default TcSample;
