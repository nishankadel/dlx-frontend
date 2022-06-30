import axios from "axios";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const AddComment = ({ id, nav }) => {
  const token = JSON.parse(localStorage.getItem("user-token"));
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleComment = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `http://localhost:8000/api/comment/add-comment/${String(id)}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          navigate(`/single-${nav}/${id}`);
          toast.success(res.data.message);
          setComment("");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="flex flex-wrap -m-4">
        <div className="flex mx-auto items-center justify-center shadow-lg mt-7 mb-4 max-w-lg">
          <form
            className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
            onSubmit={handleComment}
          >
            <input type="hidden" name="p_id" />
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                Add a new comment
              </h2>
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="message"
                  placeholder="Type Your Comment"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  required
                ></textarea>
              </div>
              <div className="w-full  flex items-start md:w-full px-3">
                <div className="-mr-1">
                  <button
                    type="submit"
                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComment;
