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
  }

  render() {
    return (
      <div id="comment-section" className="container p-2 rounded shadow-sm">
        <form id="comment-form" className="mt-3" onSubmit={this.handleSubmit}>
          <div className="form-group ml-md-auto col-12">
            <div className="justify-content-right">
              <input
                type="text"
                id="comment"
                autoComplete={"off"}
                name="comment"
                className="form-control shadow-sm"
                placeholder="Add your comment here ..."
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
              class="btn shadow m-2"
              onClick={this.cancelComment}
            >
              Cancel
            </button>
            <button
              id="submit-comment"
              disabled={true}
              type="submit"
              class="btn shadow m-2"
            >
              Comment
            </button>
          </div>
        </form>{" "}
        <div className="my-3">
          <p>Comments</p>
        </div>
      </div>
    );
  }
}
export default CommentSection;
