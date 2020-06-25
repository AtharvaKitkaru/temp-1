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

    if ($("#upload-files-button").html() === "Submit") {
      // To submit
      function submit(callback) {
        if ($("#file-list")[0].children.length === 0) {
          alert("Empty submission");
          // after response continue with code below
        } else {
          alert("Ask for turn In");
          callback();
        }
      }
      submit(function () {
        $("#upload-files-button")
          .html("Unsubmit")
          .css({ backgroundColor: "rgb(183, 32, 46)", color: "white" });
        $("#input-btn")
          .prop("disabled", true)
          .fadeOut(400, function () {
            // ! if removed then what if user wants to unsubmit?
            // this.remove();
            $("#turnedInStatus")
              .html("Turned In")
              .fadeIn(400)
              .css({ padding: "0.66em" });
          });
        $(".fa.fa-times.col-1.d-block")
          .removeClass("d-block")
          .addClass("d-none");
      });
    } else {
      // To unsubmit
      function unsubmit(callback) {
        alert("Prompt sure unsubmit?");
        callback();
      }
      unsubmit(function () {
        $("#upload-files-button").html("Submit").css({
          backgroundColor: "white",
          color: "rgb(183, 32, 46)",
        });
        $("#turnedInStatus").fadeOut(400, function () {
          $(this).html("");
          $("#input-btn")
            .prop("disabled", false)
            .fadeIn(400, function () {
              // ! if removed then what if user wants to unsubmit?
              // this.remove();
              $("#turnedInStatus").css({ padding: "0em" });
            });
        });
        $(".fa.fa-times.col-1.d-none")
          .removeClass("d-none")
          .addClass("d-block");
      });
    }
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
          <Form.Group>
            <Button
              id="input-btn"
              className="w-75"
              variant="danger"
              onClick={this.inputFile}
            >
              Attach file
            </Button>
            <p
              id="turnedInStatus"
              className="text-muted"
              style={{ fontFamily: "Inter", fontSize: "1em" }}
            ></p>
            <ul className="list-group mt-4" id="file-list"></ul>
          </Form.Group>
          <p
            id="upload-info"
            style={{ font: "13px Inter", display: "none" }}
            className="text-muted text-left"
          >
            Certain types of files cannot be uploaded.
            <i
              className="fa fa-question-circle ml-1"
              data-toggle="tooltip"
              data-placement="right"
              data-html={true}
              title={`<div class="text-justify">
                  <u><b>File types that cannot be uploaded</b></u><br/>
                  .ade, .adp, .apk, .appx, .appxbundle, .bat, .cab, .chm, .cmd, .com, .cpl, .dll, .dmg, .exe, .hta, .ins, .isp, .iso, .jar, .js, .jse, .lib, .lnk, .mde, .msc, .msi, .msix, .msixbundle, .msp, .mst, .nsh, .pif, .ps1, .scr, .sct, .shb, .sys, .vb, .vbe, .vbs, .vxd, .wsc, .wsf, .wsh
                </div>`}
            ></i>
            <br />
            In such instances, upload a text file containing the drive link.
          </p>
          <Button
            type="submit"
            className="p-2 shadow-sm w-75"
            id="upload-files-button"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default TaskSection;
