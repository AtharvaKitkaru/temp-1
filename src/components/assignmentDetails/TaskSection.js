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
  // if inputCount is decremented, previous Id may overlap.
  delete = (e) => {
    $(e.target).parent().remove();
  };
  inputFile = () => {
    let that = this;
    let id = `file-${this.state.inputCount}`;
    $.when(
      $("#file-list").append(
        `<li class="list-group-item mx-auto d-flex flex-row col-12  align-items-center" id="${id}-li" style="border-left: .2em solid rgb(183, 32, 46)">
        <label class="col-11 text-left d-block m-0" style="font: 13px Inter;" for=${id} id="${id}-label"
        >File</label>
        <i class="fa fa-times col-1 d-block" id="${id}-i"></i>
        <input type="file" class="d-none" id=${id} name=${id} />
        </li>
        `
      )
    )
      .then(
        $(`#${id}`).change(function () {
          $(`#${id}-label`).html(this.files[0].name);
          $(`#${id}-i`).on("click", that.delete);
        })
      )
      .then(function () {
        $(`#${id}`).click();
      })
      // .then(
      //   $(`#${id}`)
      //     .trigger("click")
      //     .on("change", function() {
      //       if ($(`#${id}`).files.length === 0) {
      //         console.log("empty");
      //         $(`#${id}-li`).remove();
      //       } else {
      //         console.log("not empty");
      //         $(`#${id}-label`).html($(`#${id}`).files[0].name);
      //         $(`#${id}-i`).on("click", that.delete);
      //       }
      //     })
      // )
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
        <Form style={{ fontSize: "0.8em" }}>
          <Form.Group className="p-2">
            <Button
              id="input-btn"
              className="w-75"
              variant="danger"
              onClick={this.inputFile}
            >
              Attach file
            </Button>
            <ul className="list-group mt-4" id="file-list">
              {""}
            </ul>
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
