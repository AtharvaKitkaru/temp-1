import React from "react";
import $ from "jquery";
import "./CommentSection.scss";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
    };
  }

  cancelComment = () => {
    $("#button-container").slideUp(400);
    $("#comment").val("");
  };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
    e.target.value === ""
      ? $("#submit-comment").prop("disabled", true)
      : $("#submit-comment").prop("disabled", false);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.comment);
    $("#comment").val("").blur();
  };

  showButtons = () => {
    $("#button-container").slideDown(400);
  };

  componentDidMount() {
    $("#comment").on("focusout", function () {
      if (this.value === "") $("#button-container").slideUp(400);
    });
    $(document).on("keydown", function (event) {
      if (event.key === "Escape")
        if ($("#comment").is(":focus")) $("#comment").blur();
    });
  }

  render() {
    return (
      <div id="comment-section" className="container p-2 rounded shadow-sm">
        <div
          className="font-weight-bold col-12 mx-auto pt-md-4 py-2 h5"
          style={{ fontFamily: "Inter" }}
        >
          <div className="col-12 mx-auto text-left">Comments</div>
        </div>
        <form id="comment-form" className="mt-3" onSubmit={this.handleSubmit}>
          <div className="form-group ml-md-auto col-12">
            <div className="justify-content-right">
              <input
                type="text"
                id="comment"
                autoComplete={"off"}
                name="comment"
                className="form-control shadow-sm"
                placeholder="Add a comment"
                onFocus={this.showButtons}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div
            id="button-container"
            style={{ display: "none" }}
            className="text-md-right"
          >
            <button
              id="reset-comment"
              type="reset"
              className="btn shadow-sm m-2"
              onClick={this.cancelComment}
            >
              Cancel
            </button>
            <button
              id="submit-comment"
              disabled={true}
              type="submit"
              className="btn shadow-sm m-2"
            >
              Comment
            </button>
          </div>
        </form>{" "}
        {/* comments section */}
        <div id="commentsByUsers" className="text-left col-12 mx-auto">
          <div
            className="comment-box d-flex flex-column"
            style={{ fontFamily: "Inter" }}
          >
            <div
              className="commentUser my-2 p-1 text-left row mx-auto align-items-center"
              id="1"
            >
              <div className="col-1">
                <img
                  src="/assets/images/user.jpeg"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="UserAvatar"
                />
              </div>
              <div className="col-11">
                <div className="">
                  <div className="font-weight-bold username">Student</div>
                  <div className="text-muted" style={{ fontSize: "0.8em" }}>
                    6 hours ago
                  </div>
                </div>
                <div style={{ fontSize: "0.96em" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi placeat corrupti amet perspiciatis voluptatum dolore
                  reiciendis consequuntur tempora? Placeat a ipsam excepturi
                  quibusdam molestiae modi consequuntur cum repellendus minima
                  veritatis!
                </div>
              </div>
            </div>
          </div>
          <div
            className="comment-box d-flex flex-column"
            style={{ fontFamily: "Inter" }}
          >
            <div
              className="commentUser my-2 p-1 text-left row mx-auto align-items-center"
              id="2"
            >
              <div className="col-1">
                <img
                  src="/assets/images/user.jpeg"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="UserAvatar"
                />
              </div>
              <div className="col-11">
                <div className="">
                  <div className="font-weight-bold username">Student</div>
                  <div className="text-muted" style={{ fontSize: "0.8em" }}>
                    6 hours ago
                  </div>
                </div>
                <div style={{ fontSize: "0.96em" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi placeat corrupti amet perspiciatis voluptatum dolore
                  reiciendis consequuntur tempora? Placeat a ipsam excepturi
                  quibusdam molestiae modi consequuntur cum repellendus minima
                  veritatis!
                </div>
              </div>
            </div>
          </div>
          <div
            className="comment-box d-flex flex-column"
            style={{ fontFamily: "Inter" }}
          >
            <div
              className="commentUser my-2 p-1 text-left row mx-auto align-items-center"
              id="3"
            >
              <div className="col-1">
                <img
                  src="/assets/images/user.jpeg"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="UserAvatar"
                />
              </div>
              <div className="col-11">
                <div className="">
                  <div className="font-weight-bold username">Student</div>
                  <div className="text-muted" style={{ fontSize: "0.8em" }}>
                    6 hours ago
                  </div>
                </div>
                <div style={{ fontSize: "0.96em" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi placeat corrupti amet perspiciatis voluptatum dolore
                  reiciendis consequuntur tempora? Placeat a ipsam excepturi
                  quibusdam molestiae modi consequuntur cum repellendus minima
                  veritatis!
                </div>
              </div>
            </div>
          </div>
          <div
            className="comment-box d-flex flex-column"
            style={{ fontFamily: "Inter" }}
          >
            <div
              className="commentUser my-2 p-1 text-left row mx-auto align-items-center"
              id="4"
            >
              <div className="col-1">
                <img
                  src="/assets/images/user.jpeg"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="UserAvatar"
                />
              </div>
              <div className="col-11">
                <div className="">
                  <div className="font-weight-bold username">Student</div>
                  <div className="text-muted" style={{ fontSize: "0.8em" }}>
                    6 hours ago
                  </div>
                </div>
                <div style={{ fontSize: "0.96em" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi placeat corrupti amet perspiciatis voluptatum dolore
                  reiciendis consequuntur tempora? Placeat a ipsam excepturi
                  quibusdam molestiae modi consequuntur cum repellendus minima
                  veritatis!
                </div>
              </div>
            </div>
          </div>
          <div
            className="comment-box d-flex flex-column"
            style={{ fontFamily: "Inter" }}
          >
            <div
              className="commentUser my-2 p-1 text-left row mx-auto align-items-center"
              id="5"
            >
              <div className="col-1">
                <img
                  src="/assets/images/user.jpeg"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="UserAvatar"
                />
              </div>
              <div className="col-11">
                <div className="">
                  <div className="font-weight-bold username">Student</div>
                  <div className="text-muted" style={{ fontSize: "0.8em" }}>
                    6 hours ago
                  </div>
                </div>
                <div style={{ fontSize: "0.96em" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi placeat corrupti amet perspiciatis voluptatum dolore
                  reiciendis consequuntur tempora? Placeat a ipsam excepturi
                  quibusdam molestiae modi consequuntur cum repellendus minima
                  veritatis!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CommentSection;
