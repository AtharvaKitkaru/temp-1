import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import $ from "jquery";
class TaskSection extends React.Component {
  constructor() {
    super();
    this.state = {
      inputCount: 0,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert("Files Uploaded");
  };
  checkEmpty = () =>
    $("#file-list")[0].children.length === 0 ? $("#upload-info").hide() : {};
  // * if inputCount is decremented, previous Id may overlap.
  delete = (e) => {
    $.when($(e.target).parent().remove()).then(this.checkEmpty());
  };
  inputFile = () => {
    $("#upload-info").show();
    let that = this;
    let id = `file-${this.state.inputCount}`;
    $.when(
      $("#file-list").append(
        `<li class="list-group-item mx-auto d-flex flex-row col-12  align-items-center" id="${id}-li" style="border-left: .2em solid rgb(183, 32, 46)">
        <label class="col-11 text-left d-block m-0" style="font: 13px Inter;" for=${id} id="${id}-label"
        >Select File</label>
        <i class="fa fa-times col-1 d-block" style="cursor: pointer" id="${id}-i"></i>
        <input type="file" class="d-none" id=${id} name=${id} />
        </li>
        `
      )
    )
      .then($(`#${id}-i`).on("click", that.delete))
      .then(function () {
        $(`#${id}`)
          .click()
          .on("change", function () {
            try {
              $(`#${id}-label`).html(this.files[0].name);
              $(`#${id}-label`).removeAttr("for");
            } catch {
              $(`#${id}-li`).remove();
            }
          });
      })
      // todo: on selection dialog close
      // .then(function() {
      //   if ($(`#${id}-label`).html() === "Select File") {
      //     $(`#${id}-li`).remove();
      //   }
      // })
      .then(function () {
        that.setState({
          inputCount: that.state.inputCount + 1,
        });
      });
  };
  render() {
    return (
      <div className="container p-3 shadow-sm rounded text-center">
        <div>
          <p className="" style={{ fontWeight: "500", fontSize: "1.2em" }}>
            Upload Documents
          </p>
        </div>
        <Form onSubmit={this.handleSubmit} style={{ fontSize: "0.8em" }}>
          <Form.Group className="p-2">
            <Button
              id="input-btn"
              className="w-75"
              variant="danger"
              onClick={this.inputFile}
            >
              Attach file
            </Button>
            <ul className="list-group mt-4" id="file-list"></ul>
          </Form.Group>
          <p
            id="upload-info"
            style={{ font: "13px Inter", display: "none" }}
            className="text-muted"
          >
            Executable files cannot be uploaded.
            <br />
            Instead upload a text file containing the drive link.
          </p>
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
