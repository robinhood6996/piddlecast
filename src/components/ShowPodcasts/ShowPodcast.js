import React from 'react';
import BreadCrumb from '../Global/BreadCrumb';
import Menu from '../Global/Menu';
import CoolestMasai from './CoolestMasai';

const ShowPodcast = () => {
    return (
        <div class="col-md-12 fsidemenu">
            <div class="container-fluid">
                <div class="row">
                    <Menu />
                    <div class="col-md-11 p-0">
                        <BreadCrumb heading={"Show Podcasts-Episodes"} firstLink={"Home"} secondLink={"Show Podcasts-Episodes"} />
                        {/* gradient__bg */}
                        <div class="container-fluid ">
                            <CoolestMasai />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPodcast;