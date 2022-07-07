import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ heading, firstLink, secondLink }) => {
    return (
        <div className=''>
            <div class="col-md-12 breadcrumb-create breadcrumb-bg" >
                {/* , url(img/ hero - back.png) */}
                < center >
                    <strong class="mhead">{heading}</strong>
                </center >

                <div class="text-center mybread">
                    <li><Link to={'/'}>{firstLink}</Link></li>
                    <li className='px-2'><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.552844 12C0.394461 12 0.237557 11.9256 0.128015 11.7815C-0.0672089 11.5242 -0.0356314 11.1415 0.198736 10.9272L5.58384 6.00015L0.198736 1.0731C-0.0356314 0.858755 -0.0672089 0.476107 0.128015 0.218429C0.323567 -0.0388982 0.671408 -0.0741099 0.906432 0.140779L6.80099 5.53381C6.9273 5.64902 7 5.81985 7 5.9997C7 6.17974 6.92747 6.35038 6.80099 6.46559L0.906432 11.8586C0.802819 11.9538 0.677164 11.9998 0.552663 11.9998L0.552844 12Z" fill="white" />
                    </svg>
                    </li>
                    <li><span>{secondLink}</span></li>
                </div>
            </div >
            <div className="position-relative w-100 after-hero-con">
                <div className='container-fluid after-hero'>
                </div>

            </div>
        </div>
    );
};

export default BreadCrumb;