import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
           
            <div className="container">
                <div className="row col-6 mx-auto">
                <h3 className='text-center color'>Blogs Page</h3>
                    <h4>প্রশ্নঃ authorization এবং authentication এর মধ্যে পার্থক্য কি?</h4> 
                    <p>authorization হল প্রমানিকরন, অর্থাৎ ওয়েবের ক্ষেত্রে ইউজারের আইডি, পাসওয়ার্ড, নাম, ইমেইল  সংরক্ষণ করে এবং  পরে লগইন করের সময় চেক করে মেলে গেলে লগইন এক্সেস দেয় নতুবা দেয় না। অন্য দিকে authentication হল অনুমোদন দেওয়া, ফাইল,ডাটা, ইমেইল অন্য প্রতিষ্ঠানকে শর্ত সাপেক্ষে অনুমোদন দেওয়া।</p>  
                    <br />
                    <h5>প্রশ্নঃ Firebase আমরা কেন ব্যবহার করি?</h5>
                    <p>ফায়রারবেজ হল গুগলের একটি ওয়েব ডেভলেপমেন্ট সারভিস। ওয়েব এয়্যাপ তৈরির জন্য এটি ব্যাবহার করা হয়।Web, Android, iOS এর ব্য্যাকেন্ড  ্ডেভলপমেন্ট এর কাজে ফায়ারবেজ ব্যবহার করা হয়। Firebase এর  Database, Cloud Storage, Cloud Messaging,Remote Config সার্ভিস আমরা ব্যবহার করে অনেক কম সময়ে অনেক কাজ করতে পারি। </p>

                    <Link to="/home" className="btn btn-primary">Go home</Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;