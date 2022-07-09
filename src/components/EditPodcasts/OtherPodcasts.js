import React from 'react';
import { Link } from 'react-router-dom';
import episod1 from '../../assets/images/episods/1.png'
import episod2 from '../../assets/images/episods/2.png'
import episod3 from '../../assets/images/episods/3.png'
import episod4 from '../../assets/images/episods/4.png'


const OtherPodcasts = () => {
    const episodsData = [
        {
            id: 1,
            author: 'Mike Levis',
            category: 'personal branding',
            title: 'Everyday Is Chance to Learn New Thing',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor,',
            img: episod1,
            count: 100,
            duration: '60 min'
        },
        {
            id: 2,
            author: 'Mike Levis',
            category: 'personal branding',
            title: 'Build Personal Brending on Design Ecosystems',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor,',
            img: episod2,
            count: 250,
            duration: '60 min'
        },
        {
            id: 3,
            author: 'Mike Levis',
            category: 'personal branding',
            title: 'Everyday Is Chance to Learn New Thing',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor,',
            img: episod3,
            count: 50,
            duration: '60 min'
        },
        {
            id: 4,
            author: 'Mike Levis',
            category: 'personal branding',
            title: 'Everyday Is Chance to Learn New Thing',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor,',
            img: episod4,
            count: 500,
            duration: '60 min'
        }
    ]

    return (
        <div class="col-md-12 fmenuhead mybg mybg-liked pb-5 mt-5">
            <div class="container-fluid mybg__inner">
                <div class="uk-position-relative uk-visible-toggle uk-light mt-4" tabindex="-1" uk-slider="autoplay-interval:3000;">

                    <div class="row align-items-center pt-5">
                        <div class="col-md-8 col-12">
                            <strong>Other Episodes</strong><div class="shape2"></div>

                        </div>

                        <div class="col-md-4 col-12 text-end">

                            <a class="uk-position-small customarrow" href uk-slider-item="previous"><svg width="20" height="20" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 9C30 9.34164 29.8683 9.66929 29.6339 9.91087C29.3995 10.1524 29.0815 10.2882 28.75 10.2882H4.2675L9.6325 15.8169C9.8602 16.0599 9.98619 16.3853 9.98334 16.723C9.98049 17.0608 9.84903 17.3839 9.61727 17.6227C9.38551 17.8615 9.072 17.997 8.74425 18C8.41651 18.0029 8.10075 17.873 7.865 17.6384L0.365 9.90944C0.249335 9.79094 0.157543 9.65004 0.0949025 9.49485C0.0322625 9.33965 1.07954e-05 9.17323 0 9.00515V9C0 8.83254 0.0324989 8.66508 0.0974989 8.50792C0.1598 8.35175 0.251577 8.20989 0.367501 8.09056L7.8675 0.361602C8.10325 0.126953 8.419 -0.00288627 8.74675 4.86958e-05C9.0745 0.00298366 9.38801 0.138458 9.61977 0.377293C9.85153 0.616128 9.98299 0.939215 9.98584 1.27697C9.98869 1.61472 9.8627 1.94011 9.635 2.18306L4.2675 7.71184H28.75C29.0815 7.71184 29.3995 7.84756 29.6339 8.08913C29.8683 8.33071 30 8.65836 30 9V9Z" fill="#6C6B6B" />
                            </svg>
                            </a>
                            <a class="uk-position-small customarrow" href uk-slider-item="next"><svg width="20" height="20" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 9C0 9.34164 0.131696 9.66929 0.366117 9.91087C0.600537 10.1524 0.918479 10.2882 1.25 10.2882H25.7325L20.3675 15.8169C20.1398 16.0599 20.0138 16.3853 20.0167 16.723C20.0195 17.0608 20.151 17.3839 20.3827 17.6227C20.6145 17.8615 20.928 17.997 21.2557 18C21.5835 18.0029 21.8992 17.873 22.135 17.6384L29.635 9.90944C29.7507 9.79094 29.8425 9.65004 29.9051 9.49485C29.9677 9.33965 30 9.17323 30 9.00515V9C30 8.83254 29.9675 8.66508 29.9025 8.50792C29.8402 8.35175 29.7484 8.20989 29.6325 8.09056L22.1325 0.361602C21.8967 0.126953 21.581 -0.00288627 21.2533 4.86958e-05C20.9255 0.00298366 20.612 0.138458 20.3802 0.377293C20.1485 0.616128 20.017 0.939215 20.0142 1.27697C20.0113 1.61472 20.1373 1.94011 20.365 2.18306L25.7325 7.71184H1.25C0.918479 7.71184 0.600537 7.84756 0.366117 8.08914C0.131696 8.33071 0 8.65836 0 9Z" fill="#6C6B6B" />
                            </svg>
                            </a>
                        </div>
                    </div><br />

                    <ul class="uk-slider-items uk-child-width-1-0 uk-child-width-1-4@m uk-grid">


                        {/* <!-------Start Card--------> */}
                        {
                            episodsData.map(episod => {
                                return (
                                    <div key={episod?.id}>
                                    <div class="overlay2 p-3">
                                        <a href><span><svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5 24L14.0146 23.5981C2.9728 15.1005 0 12.1148 0 7.23445C0 3.21531 3.45815 0 7.64435 0C11.1632 0 13.1653 1.89473 14.5 3.33014C15.8347 1.89473 17.8368 0 21.3556 0C25.6025 0 29 3.27272 29 7.23445C29 12.1148 26.0272 15.1005 14.9854 23.5981L14.5 24ZM7.64435 1.49282C4.30753 1.49282 1.5774 4.07655 1.5774 7.23445C1.5774 11.4258 4.3682 14.1818 14.5 22.0478C24.6318 14.1818 27.4226 11.4258 27.4226 7.23445C27.4226 4.07655 24.6925 1.49282 21.3556 1.49282C18.3222 1.49282 16.6841 3.21531 15.41 4.5933L14.5 5.56938L13.59 4.5933C12.3159 3.21531 10.6778 1.49282 7.64435 1.49282Z" fill="#52A9AD" />
                                        </svg>
                                        </span></a>
                                    </div>
                                    <div class="overlay3">
                                        <span>EP.25</span>
                                    </div>
                                    <li class="cardback">
                                        <a href>
                                            <img src={episod?.img} alt="" class="rounded" />
                                        </a>
                                        <div class="header pt-2">
                                            <span>{episod?.author} <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="black" />
                                            </svg> {episod?.category}</span>

                                            <div class="float-end d-flex">
                                                <span className='padding__right'>
                                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.5238 15.2381C19.2605 15.2381 19.0476 15.451 19.0476 15.7143V9.04762C19.0476 4.05857 14.989 0 10 0C5.01095 0 0.952381 4.05857 0.952381 9.04762V15.7143C0.952381 15.451 0.739048 15.2381 0.47619 15.2381C0.213333 15.2381 0 15.451 0 15.7143V17.619C0 17.8824 0.213333 18.0952 0.47619 18.0952C0.739048 18.0952 0.952381 17.8824 0.952381 17.619C0.952381 17.8233 1.0819 17.9938 1.26238 18.0619C1.7919 19.2038 2.94619 20 4.28571 20H5.2381C5.50095 20 5.71429 19.7871 5.71429 19.5238V13.8095C5.71429 13.5462 5.50095 13.3333 5.2381 13.3333H4.28571C3.35333 13.3333 2.51 13.7195 1.90476 14.3381V9.04762C1.90476 4.58381 5.53619 0.952381 10 0.952381C14.4638 0.952381 18.0952 4.58381 18.0952 9.04762V14.3381C17.49 13.719 16.6467 13.3333 15.7143 13.3333H14.7619C14.4986 13.3333 14.2857 13.5462 14.2857 13.8095V19.5238C14.2857 19.7871 14.4986 20 14.7619 20H15.7143C17.0533 20 18.2081 19.2038 18.7376 18.0619C18.9181 17.9938 19.0476 17.8233 19.0476 17.619C19.0476 17.8824 19.2605 18.0952 19.5238 18.0952C19.7871 18.0952 20 17.8824 20 17.619V15.7143C20 15.451 19.7871 15.2381 19.5238 15.2381V15.2381ZM4.28571 14.2857H4.7619V19.0476H4.28571C2.97286 19.0476 1.90476 17.9795 1.90476 16.6667C1.90476 15.3538 2.97286 14.2857 4.28571 14.2857ZM15.7143 19.0476H15.2381V14.2857H15.7143C17.0271 14.2857 18.0952 15.3538 18.0952 16.6667C18.0952 17.9795 17.0271 19.0476 15.7143 19.0476Z" fill="#52A9AD" />
                                                        <path d="M16.1903 9.04752C16.1903 9.31038 16.4031 9.52371 16.6665 9.52371C16.9298 9.52371 17.1426 9.31038 17.1426 9.04752C17.1426 5.10895 13.9384 1.90466 9.99979 1.90466C6.06122 1.90466 2.85693 5.10895 2.85693 9.04752C2.85693 9.31038 3.07027 9.52371 3.33312 9.52371C3.59598 9.52371 3.80931 9.31038 3.80931 9.04752C3.80931 5.63419 6.58646 2.85704 9.99979 2.85704C13.4131 2.85704 16.1903 5.63419 16.1903 9.04752Z" fill="#52A9AD" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.5C13.2761 7.5 13.5 7.72386 13.5 8V13C13.5 13.2761 13.2761 13.5 13 13.5C12.7239 13.5 12.5 13.2761 12.5 13V8C12.5 7.72386 12.7239 7.5 13 7.5Z" fill="#52A9AD" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5C7.27614 7.5 7.5 7.72386 7.5 8V13C7.5 13.2761 7.27614 13.5 7 13.5C6.72386 13.5 6.5 13.2761 6.5 13V8C6.5 7.72386 6.72386 7.5 7 7.5Z" fill="#52A9AD" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5C9.5 4.72386 9.72386 4.5 10 4.5Z" fill="#52A9AD" />
                                                    </svg>
                                                </span>

                                                <span class="qtys">{episod?.count}</span>
                                            </div>

                                            <div class="mt-2 episod-title">
                                                <a href>{episod?.title}</a>
                                            </div>
                                            <div>
                                                <p>{episod?.body} </p>
                                            </div>
                                            <div>
                                                <div class="row">
                                                    <div class="col-md-9">
                                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.596 5.19735L1.233 8.88935C0.693 9.20235 0 8.82335 0 8.19235V0.808348C0 0.178348 0.692 -0.201652 1.233 0.112348L7.596 3.80435C7.71884 3.87447 7.82094 3.97583 7.89196 4.09816C7.96299 4.22048 8.00039 4.3594 8.00039 4.50085C8.00039 4.64229 7.96299 4.78122 7.89196 4.90354C7.82094 5.02586 7.71884 5.12722 7.596 5.19735Z" fill="#52A9AD" />
                                                        </svg>
                                                        <span class="play padding__left">Play this episode</span>
                                                    </div>
                                                    <div class="col-md-3 text-end">
                                                        <span>{episod?.duration}</span>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>


                                    </li>
                                </div>
                                )
                            })
                        }
                        {/* <!-------End Card--------> */}

                    </ul>



                </div>
            </div>
        </div>
    );
}

export default OtherPodcasts;