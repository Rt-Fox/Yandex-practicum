import React from 'react';
import ProfileNav from "../components/ProfileNav/ProfileNav";
import PersonalInformation from "../components/PersonalInformation/PersonalInformation";

const ProfilePage = () => {
    return (
        <main id={'ProfilePage'} className='container'>
            <div className='row'>
                <ProfileNav />
                <PersonalInformation />
            </div>
        </main>
    );
};

export default ProfilePage;