import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { UserIcon } from '@heroicons/react/outline';

const Profile = () => {
    const { user, logOut } = useContext(UserContext);
    return (
        <section className="flex flex-col items-center">
            {/* show user image if available, if not then show user icon */}
            <div className="my-4 w-36 h-36 md:h-56 md:w-56
            bg-gray-500 rounded-full overflow-hidden">
                {user.photoURL ?
                    <img
                        className="w-full h-full"
                        src={user.photoURL}
                        alt="user"
                    /> : <UserIcon className="block h-full w-full text-white p-6" aria-hidden="true" />
                }
            </div>
            <h2 className="text-2xl font-bold md:text-4xl text-green-600">{user.displayName}</h2>
            <h4 className="text-sm md:text-xl">{user.email}</h4>
            <div className="my-6">
                <button onClick={logOut} className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl"
                >Sign Out</button>
            </div>
        </section>
    );
};

export default Profile;