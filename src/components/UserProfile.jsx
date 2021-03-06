import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';

import Spinner from './Spinner';

const UserProfile = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { userId } = useParams();

  // const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const userInfo = {
    _id: '112589479356232164020',
    image:
      'https://lh3.googleusercontent.com/a/AATXAJzNdxHz22XUmzReKF2wa9ngZ-po6PrmnzrrnwsP=s96-c',
    userName: 'bille yi',
  };
  useEffect(() => {
    setUser(userInfo);
  }, []);

  const logout = () => {
    localStorage.clear();

    navigate('/login');
  };

  if (!user) return <Spinner message="Loading profile" />;

  return (
    <div className="relative pb-2 h-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex flex-col justify-center items-center">
            <img
              className=" w-full h-370 2xl:h-510 shadow-lg object-cover"
              src="https://source.unsplash.com/1600x900/?nature,photography,technology"
              alt="user-pic"
            />
            <img
              className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
              src={user.image}
              alt="user-pic"
            />
          </div>
          <h1 className="font-bold text-3xl text-center mt-3">
            {user.userName}
          </h1>
          <div className="absolute top-0 z-1 right-0 p-2">
            {userId && (

            <button
              type="button"
              className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
              onClick={logout}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>

            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default UserProfile;
