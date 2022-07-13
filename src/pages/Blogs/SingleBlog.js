import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseUrl from "../../baseUrl";
import AddComment from "../../components/AddComment/AddComment";
import CommentList from "../../components/CommentList/CommentList";
import ShowCaseBlogs from "../../components/ShowCaseBlogs/ShowCaseBlogs";
import Spinner from "../../components/Spinner/Spinner";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [image, setImage] = useState("");

  const profile = JSON.parse(localStorage.getItem("user-profile"));
  const token = JSON.parse(localStorage.getItem("user-token"));
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/blog/single-blog/${id}`).then((res) => {
      setBlog(res.data.blog);
      setImage(res.data.image);
    });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/comment/get-comment/${id}`)
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const isEmpty = Object.keys(blog).length === 0;
  return (
    <>
      {loading || (isEmpty && <Spinner />)}
      <main className="relative container mx-auto bg-white px-4">
        <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
          <img
            className="absolute inset-0 object-cover object-top w-full h-full filter blur"
            src={image}
            alt=""
          />
        </div>
        <div className="mt-[-10%] w-1/2 mx-auto">
          <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src={image}
              alt="blog pic"
            />
          </div>
        </div>
        <article className="max-w-prose mx-auto py-8">
          <h1 className="text-2xl font-bold"> {blog.title} </h1>
          <h2 className="mt-2 text-sm text-gray-500">
            Admin, {moment(blog.createdAt).fromNow()}
          </h2>
          <h2 className="mt-2 text-sm text-gray-500">
            {/* commentDetails.length comments */}
          </h2>
          <p className="mt-6"> {blog.description} </p>
        </article>
      </main>

      <section className="text-gray-600 mt-14">
        <div className="container px-3 py-3 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-bold  title-font mb-2 text-gray-900">
                Comments
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          {/* Comment goes here  */}

          {comments &&
            comments.map((comment) => (
              <CommentList
                key={comment._id}
                Id={blog._id}
                comment={comment}
                profile={profile}
                token={token}
                nav="blog"
              />
            ))}

          {profile && <AddComment id={blog._id} nav="blog" />}
        </div>
      </section>
      <ShowCaseBlogs title="Other Blogs" />
    </>
  );
};

export default SingleBlog;
