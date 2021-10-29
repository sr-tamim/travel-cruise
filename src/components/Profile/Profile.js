import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { UserIcon } from '@heroicons/react/outline';

const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <section className="flex flex-col items-center">
            <div className="my-4">
                {user.photoURL ?
                    <img
                        className="w-36 h-36 md:h-56 md:w-56 rounded-full"
                        src={user.photoURL}
                        alt="user"
                    /> : <UserIcon className="block h-7 w-7 text-white p-1" aria-hidden="true" />
                }
            </div>
            <h2 className="text-xl font-bold md:text-3xl text-green-600">{user.displayName}</h2>
            <h4 className="text-sm md:text-xl">{user.email}</h4>
        </section>
    );
};

export default Profile;