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
      <div className="container p-3 shadow-sm text-center">
        <div>
          <p className="" style={{ fontWeight: "500", fontSize: "1.2em" }}>
            Upload Documents
          </p>
        </div>
        <Form style={{ fontSize: "0.8em" }}>
          <Form.Group className="border border-light p-2">
            {/* display the uploaded files here*/}
            {/* Custom file button */}
            <Button
              id="input-btn"
              size="sm"
              className="w-75"
              variant="light"
              onClick={this.inputFile}
            >
              Attach file
            </Button>
            <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
              <Form.File id="file-input" />
            </div>
          </Form.Group>
          <Button
            size="sm"
            type="submit"
            block
            style={{ backgroundColor: "rgb(183, 32, 46)" }}
          >
            Submit documents
          </Button>
        </Form>
      </div>
    );
  }
}
export default TaskSection;
