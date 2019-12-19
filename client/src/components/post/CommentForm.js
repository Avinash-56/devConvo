import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ addComment, postId }) => {
  const [text, setText] = useState("");
  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Comment Something...</h3>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("Hi");
          addComment(postId, { text });
          console.log("Hi");
          setText(" ");
        }}
        class="form my-1"
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Any Thoughts"
          required
        ></textarea>
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
