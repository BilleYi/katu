import React, { useEffect, useState } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

import Spinner from './Spinner';

const PinDetail = ({ user }) => {
  const { pinId } = useParams();
  const [pinDetail, setPinDetail] = useState();
  const [comment, setComment] = useState('');

  const fetchPinDetails = () => {
    if (pinId) {
      const result = [
        {
          _id: 'Raj9X55CxrYuKzixTpHE8V',
          about: 'kfc',
          category: 'food',
          comments: null,
          destination: '666',
          image: {
            asset: {
              url: 'https://cdn.sanity.io/images/bq7io8cc/production/1523d21e100447f524e40f4d32b4017deb7415a5-1920x1200.jpg',
            },
          },
          postedBy: {
            _id: '116326429372505095461',
            image: 'https://lh3.googleusercontent.com/a-/AOh14GgW70_8fSYzqepK-OPtQtb-5sZbqXbTLwz3mw8=s96-c',
            userName: '奕洋',
          },
          save: null,
          title: 'kfc',
        },
      ];
      setPinDetail(result);
    }
  };

  useEffect(() => {
    fetchPinDetails();
  }, [pinId]);

  if (!pinDetail) {
    return (
      <Spinner message="Showing pin" />
    );
  }

  return (
    <div className="flex xl:flex-row flex-col m-auto bg-white" style={{ maxWidth: '1500px', borderRadius: '32px' }}>
      <div className="flex justify-center items-center md:items-start flex-initial">
        <img
          className="rounded-t-3xl rounded-b-lg"
          src={pinDetail?.image.asset.url}
          alt="user-post"
        />
      </div>
      <div className="w-full p-5 flex-1 xl:min-w-620">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <a
              href={`${pinDetail.image.asset.url}?dl=`}
              download
              className="bg-secondaryColor p-2 text-xl rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100"
            >
              <MdDownloadForOffline />
            </a>
          </div>
          <a href={pinDetail.destination} target="_blank" rel="noreferrer">
            {pinDetail.destination?.slice(8)}
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold break-words mt-3">
            {pinDetail.title}
          </h1>
          <p className="mt-3">{pinDetail.about}</p>
        </div>
        <Link to={`/user-profile/${pinDetail?.postedBy._id}`} className="flex gap-2 mt-5 items-center bg-white rounded-lg ">
          <img src={pinDetail?.postedBy.image} className="w-10 h-10 rounded-full" alt="user-profile" />
          <p className="font-bold">{pinDetail?.postedBy.userName}</p>
        </Link>
        <h2 className="mt-5 text-2xl">Comments</h2>
        <div className="max-h-370 overflow-y-auto">
          {pinDetail?.comments?.map((item) => (
            <div className="flex gap-2 mt-5 items-center bg-white rounded-lg" key={item.comment}>
              <img
                src={item.postedBy?.image}
                className="w-10 h-10 rounded-full cursor-pointer"
                alt="user-profile"
              />
              <div className="flex flex-col">
                <p className="font-bold">{item.postedBy?.userName}</p>
                <p>{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap mt-6 gap-3">
          <Link to={`/user-profile/${user._id}`}>
            <img src={user.image} className="w-10 h-10 rounded-full cursor-pointer" alt="user-profile" />
          </Link>
          <input
            className=" flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300"
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="button"
            className="bg-red-500 text-white rounded-full px-6 py-2 font-semibold text-base outline-none"
          >
            评论
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinDetail;
