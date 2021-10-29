import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { UserIcon } from '@heroicons/react/outline';

const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <section className="flex flex-col items-center">
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
            <h2 className="text-xl font-bold md:text-3xl text-green-600">{user.displayName}</h2>
            <h4 className="text-sm md:text-xl">{user.email}</h4>
        </section>
    );
};

export default Profile;