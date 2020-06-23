import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
class TaskSection extends React.Component {
  constructor() {
    super();
    this.state = {
      fileNames: [],
    };
  }
  displayFile = () => {
    let file = document.getElementById("file-input");
    this.setState({ fileNames: [...this.state.fileNames, file.name] });
  };
  inputFile = () => {
    document.getElementById("file-input").click();
    this.displayFile();
  };
  render() {
    return (
      <div className="container p-3 shadow-sm rounded text-center">
        <div>
          <p className="" style={{ fontWeight: "500", fontSize: "1.2em" }}>
            Upload Documents
          </p>
        </div>
        <Form style={{ fontSize: "0.8em" }}>
          <Form.Group className="p-2">
            {/* display the uploaded files here*/}
            {/* Custom file button */}
            <Button
              id="input-btn"
              className="w-75"
              variant="danger"
              onClick={this.inputFile}
            >
              Attach file
            </Button>
            <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
              <Form.File id="file-input" />
            </div>
          </Form.Group>
          <Button
            type="submit"
            className="p-2 my-4 shadow w-75"
            id="upload-files-button"
          >
            Submit documents
          </Button>
        </Form>
      </div>
    );
  }
}
export default TaskSection;
