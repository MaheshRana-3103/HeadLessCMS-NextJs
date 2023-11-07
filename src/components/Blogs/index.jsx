import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "./api";
import './style.css'
import SingleBlog from "../SingleBlog";
import { Link } from "react-router-dom";
import { atom, useAtom } from "jotai";
export const blogs = atom('');

function Blogs() {

  const queryBlogs = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchPost,
  });
  if (queryBlogs.isLoading) {return <h1 style={{textAlign:'center'}}>Loading...</h1>}
  if (queryBlogs.isError) {
    return <p>{queryBlogs.error}</p>;
  }
  return (
    <div className="main_container">
      <h1>Blogs</h1>
      <div className="container">
          {queryBlogs.data.map(function ({
            id, title, featured_image_src, author_info, excerpt,}) {
              const mainText = title.rendered;
              let data = excerpt.rendered;
              if(data){
                data=data.slice(0,200)+'...';
              }
              return (
                  <div key={id} className="card ">
                      {/* main img */}
                      {featured_image_src && (
                       <Link to={`/blog/${id}`}> 
                          <img src={featured_image_src} alt=""
                          className="card_img cursor"/>
                        </Link>
                      )}
                      {/* Title */}
                      
                      <div className="innerContainer">
                          <Link to={`/blog/${id}`}> 
                            <h2 dangerouslySetInnerHTML={{ __html: mainText }}></h2>
                          </Link> 
                          {/* Author name */}
                          <p className="author_name cursor">{`by ${author_info.display_name}`}</p>
                          {/* Small paragraph */}
                          <p className="small_text" dangerouslySetInnerHTML={{ __html: data }}></p>
                      </div>
                  </div>
              );  
          })}
      </div>
    </div>
  );

}

export default Blogs;
