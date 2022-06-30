import axios from "axios";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CommentList = ({ comment, Id, token, profile, nav }) => {
  const navigate = useNavigate();
  const deleteComment = (id) => {
    axios
      .post(
        `http://localhost:8000/api/comment/delete-comment/${Id}`,
        {
          commentId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          navigate(`/single-${nav}/${Id}`);
          toast.success(res.data.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="rounded-b-lg mt-4">
        <div id="task-comments" className="pt-4">
          {/* comment */}
          <div className="bg-white rounded-lg p-3 flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
            <div className="flex flex-row justify-center mr-2">
              <img
                alt="avatar"
                width="48"
                height="48"
                className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
                src={comment.userId.avatar}
              />
              <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left">
                {comment.userId.fullname}
              </h3>

              {profile && profile._id === comment.userId._id ? (
                <div className="hover:cursor-pointer hover:text-red-900">
                  <i
                    className="fa-solid fa-trash text-red-500 text-xl ml-5"
                    onClick={() => {
                      deleteComment(comment._id);
                    }}
                  ></i>
                </div>
              ) : null}
            </div>
            <p
              style={{ width: "90%" }}
              className="text-gray-600 text-lg text-center md:text-left"
            >
              {comment.comment}
            </p>
            <p
              style={{ width: "90%" }}
              className="text-gray-600 text-sm mt-1 text-center md:text-left"
            >
              {moment(comment.commentAt).fromNow()}
            </p>
          </div>
          {/* comment end */}
        </div>
      </section>
    </>
  );
};

export default CommentList;
