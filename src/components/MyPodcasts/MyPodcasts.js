import React from 'react';
import BreadCrumb from '../Global/BreadCrumb';
import Menu from '../Global/Menu';
import CoolestMasai from '../ShowPodcasts/CoolestMasai';
import OtherEpisods from '../ShowPodcasts/OtherEpisods';
import Recents from '../ShowPodcasts/Recents';
import Liked from './Liked';
import MyEpisods from './MyPodcast';

const MyPodcasts = () => {
    return (
        <div class="col-md-12 fsidemenu">
            <div class="container-fluid">
                <div class="row">
                    <Menu />
                    <div class="col-md-11 p-0">
                        <BreadCrumb heading={"My Podcasts"} firstLink={"Home"} secondLink={"My Podcasts"} />
                        {/* gradient__bg */}
                        <div class="container-fluid ">
                           
                           <MyEpisods/>
                           <Liked/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPodcasts;