import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

import "./style.css"
import "../../components/SingleBlog/style.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment/moment';

function SingleBlog() {
    const {blogid} = useParams();
    console.log(blogid)
    const [user,setUser] = useState({});
    async function fetchSingleBlog(){
        const response =await  axios.get(`https://stagingngls.wpengine.com/wp-json/wp/v2/posts/${blogid}`);
        console.log(response);
        setUser(response.data);
        return response.data;
    }
    const singleBlog = useQuery({
        queryKey:["blog",blogid],
        queryFn: fetchSingleBlog,
    })

    if(singleBlog.isLoading){return <h1 style={{textAlign:'center'}}>Loading...</h1>}
    return (
        <div>
            <div className='flex flex-col ' style={{paddingLeft:32}}>
                <h1 className='font-bold'>{user.title.rendered}</h1>
                <div className='flex' style={{gap:12}}>
                <p className='font-bold'>{`by ${user.author_info.display_name}`}</p>
                <p>|</p>
                <p className='font-bold'>{moment(user.date).format('MMM DD, YYYY')}</p>
                </div>
            </div>
            <div className="child_container"dangerouslySetInnerHTML={{__html:user.content.rendered}}></div>
        </div>
    )
}

export default SingleBlog;
