import React from "react";
import { BlogType } from "../interfaces/interfaces";

interface Props {
  arr: BlogType[];
}

const RelatedBlogs: React.FC<Props> = ({ arr }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {arr.map((blog) => {
          return (
            <li key={blog.id} className="mb-4">
              <a className="wrao-pic-w">
                <img src={blog.img} alt="PRODUCT" className="img-fluid" />

                <div className="p-t-8 mt-1">
                  <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                    {blog.title}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
