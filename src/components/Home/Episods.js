import React from 'react';
import episod1 from '../../assets/images/episods/1.png'
import episod2 from '../../assets/images/episods/2.png'
import episod3 from '../../assets/images/episods/3.png'
import episod4 from '../../assets/images/episods/4.png'
const Episods = () => {
    return (
        <div class="col-md-12 fmenuhead pt-5">
            <strong>New Episodes</strong>
            <div class="shape"></div>
            <div class="uk-position-relative uk-visible-toggle uk-light mt-4" tabindex="-1" uk-slider="autoplay-interval:3000;">

                <ul class="uk-slider-items uk-child-width-1-0 uk-child-width-1-4@m uk-grid">



                    {/* <!-------Start Card--------> */}
                    <div>
                        <div class="overlay2 p-3">
                            <a href="/"><span><svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 24L14.0146 23.5981C2.9728 15.1005 0 12.1148 0 7.23445C0 3.21531 3.45815 0 7.64435 0C11.1632 0 13.1653 1.89473 14.5 3.33014C15.8347 1.89473 17.8368 0 21.3556 0C25.6025 0 29 3.27272 29 7.23445C29 12.1148 26.0272 15.1005 14.9854 23.5981L14.5 24ZM7.64435 1.49282C4.30753 1.49282 1.5774 4.07655 1.5774 7.23445C1.5774 11.4258 4.3682 14.1818 14.5 22.0478C24.6318 14.1818 27.4226 11.4258 27.4226 7.23445C27.4226 4.07655 24.6925 1.49282 21.3556 1.49282C18.3222 1.49282 16.6841 3.21531 15.41 4.5933L14.5 5.56938L13.59 4.5933C12.3159 3.21531 10.6778 1.49282 7.64435 1.49282Z" fill="#52A9AD" />
                            </svg>
                            </span></a>
                        </div>

                        <div class="overlay3">
                            <span>EP.25</span>
                        </div>

                        <li class="cardback">
                            <a href="/">
                                <img src={episod1} alt="" class="rounded" />
                            </a>

                            <div class="header">
                                <span>Mike Levis <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg> personal branding</span>

                                <div class="float-end">
                                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5238 15.2381C19.2605 15.2381 19.0476 15.451 19.0476 15.7143V9.04762C19.0476 4.05857 14.989 0 10 0C5.01095 0 0.952381 4.05857 0.952381 9.04762V15.7143C0.952381 15.451 0.739048 15.2381 0.47619 15.2381C0.213333 15.2381 0 15.451 0 15.7143V17.619C0 17.8824 0.213333 18.0952 0.47619 18.0952C0.739048 18.0952 0.952381 17.8824 0.952381 17.619C0.952381 17.8233 1.0819 17.9938 1.26238 18.0619C1.7919 19.2038 2.94619 20 4.28571 20H5.2381C5.50095 20 5.71429 19.7871 5.71429 19.5238V13.8095C5.71429 13.5462 5.50095 13.3333 5.2381 13.3333H4.28571C3.35333 13.3333 2.51 13.7195 1.90476 14.3381V9.04762C1.90476 4.58381 5.53619 0.952381 10 0.952381C14.4638 0.952381 18.0952 4.58381 18.0952 9.04762V14.3381C17.49 13.719 16.6467 13.3333 15.7143 13.3333H14.7619C14.4986 13.3333 14.2857 13.5462 14.2857 13.8095V19.5238C14.2857 19.7871 14.4986 20 14.7619 20H15.7143C17.0533 20 18.2081 19.2038 18.7376 18.0619C18.9181 17.9938 19.0476 17.8233 19.0476 17.619C19.0476 17.8824 19.2605 18.0952 19.5238 18.0952C19.7871 18.0952 20 17.8824 20 17.619V15.7143C20 15.451 19.7871 15.2381 19.5238 15.2381V15.2381ZM4.28571 14.2857H4.7619V19.0476H4.28571C2.97286 19.0476 1.90476 17.9795 1.90476 16.6667C1.90476 15.3538 2.97286 14.2857 4.28571 14.2857ZM15.7143 19.0476H15.2381V14.2857H15.7143C17.0271 14.2857 18.0952 15.3538 18.0952 16.6667C18.0952 17.9795 17.0271 19.0476 15.7143 19.0476Z" fill="#52A9AD" />
                                        <path d="M16.1903 9.04752C16.1903 9.31038 16.4031 9.52371 16.6665 9.52371C16.9298 9.52371 17.1426 9.31038 17.1426 9.04752C17.1426 5.10895 13.9384 1.90466 9.99979 1.90466C6.06122 1.90466 2.85693 5.10895 2.85693 9.04752C2.85693 9.31038 3.07027 9.52371 3.33312 9.52371C3.59598 9.52371 3.80931 9.31038 3.80931 9.04752C3.80931 5.63419 6.58646 2.85704 9.99979 2.85704C13.4131 2.85704 16.1903 5.63419 16.1903 9.04752Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.5C13.2761 7.5 13.5 7.72386 13.5 8V13C13.5 13.2761 13.2761 13.5 13 13.5C12.7239 13.5 12.5 13.2761 12.5 13V8C12.5 7.72386 12.7239 7.5 13 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5C7.27614 7.5 7.5 7.72386 7.5 8V13C7.5 13.2761 7.27614 13.5 7 13.5C6.72386 13.5 6.5 13.2761 6.5 13V8C6.5 7.72386 6.72386 7.5 7 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5C9.5 4.72386 9.72386 4.5 10 4.5Z" fill="#52A9AD" />
                                    </svg>
                                    <span class="qtys">250</span>
                                </div>

                                <div class="mt-2">
                                    <a href="/">Build Personal Brending on Design Ecosystems</a>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, </p>
                                </div>


                                <div>


                                    <div class="row">
                                        <div class="col-md-9">
                                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.596 5.19735L1.233 8.88935C0.693 9.20235 0 8.82335 0 8.19235V0.808348C0 0.178348 0.692 -0.201652 1.233 0.112348L7.596 3.80435C7.71884 3.87447 7.82094 3.97583 7.89196 4.09816C7.96299 4.22048 8.00039 4.3594 8.00039 4.50085C8.00039 4.64229 7.96299 4.78122 7.89196 4.90354C7.82094 5.02586 7.71884 5.12722 7.596 5.19735Z" fill="#52A9AD" />
                                            </svg>
                                            <span class="qtys">Play this episode</span>
                                        </div>
                                        <div class="col-md-3 text-end">
                                            <span>60 min</span>
                                        </div>
                                    </div>



                                </div>

                            </div>
                        </li>
                    </div>
                    {/* <!-------End Card */}








                    {/* Start Card */}
                    <div>
                        <div class="overlay2 p-3">
                            <a href="/"><span><svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 24L14.0146 23.5981C2.9728 15.1005 0 12.1148 0 7.23445C0 3.21531 3.45815 0 7.64435 0C11.1632 0 13.1653 1.89473 14.5 3.33014C15.8347 1.89473 17.8368 0 21.3556 0C25.6025 0 29 3.27272 29 7.23445C29 12.1148 26.0272 15.1005 14.9854 23.5981L14.5 24ZM7.64435 1.49282C4.30753 1.49282 1.5774 4.07655 1.5774 7.23445C1.5774 11.4258 4.3682 14.1818 14.5 22.0478C24.6318 14.1818 27.4226 11.4258 27.4226 7.23445C27.4226 4.07655 24.6925 1.49282 21.3556 1.49282C18.3222 1.49282 16.6841 3.21531 15.41 4.5933L14.5 5.56938L13.59 4.5933C12.3159 3.21531 10.6778 1.49282 7.64435 1.49282Z" fill="#52A9AD" />
                            </svg>
                            </span></a>
                        </div>

                        <div class="overlay3">
                            <span>EP.25</span>
                        </div>

                        <li class="cardback">
                            <a href="/">
                                <img src={episod2} alt="" class="rounded" />
                            </a>

                            <div class="header">
                                <span>Mike Levis <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg> personal branding</span>

                                <div class="float-end">
                                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5238 15.2381C19.2605 15.2381 19.0476 15.451 19.0476 15.7143V9.04762C19.0476 4.05857 14.989 0 10 0C5.01095 0 0.952381 4.05857 0.952381 9.04762V15.7143C0.952381 15.451 0.739048 15.2381 0.47619 15.2381C0.213333 15.2381 0 15.451 0 15.7143V17.619C0 17.8824 0.213333 18.0952 0.47619 18.0952C0.739048 18.0952 0.952381 17.8824 0.952381 17.619C0.952381 17.8233 1.0819 17.9938 1.26238 18.0619C1.7919 19.2038 2.94619 20 4.28571 20H5.2381C5.50095 20 5.71429 19.7871 5.71429 19.5238V13.8095C5.71429 13.5462 5.50095 13.3333 5.2381 13.3333H4.28571C3.35333 13.3333 2.51 13.7195 1.90476 14.3381V9.04762C1.90476 4.58381 5.53619 0.952381 10 0.952381C14.4638 0.952381 18.0952 4.58381 18.0952 9.04762V14.3381C17.49 13.719 16.6467 13.3333 15.7143 13.3333H14.7619C14.4986 13.3333 14.2857 13.5462 14.2857 13.8095V19.5238C14.2857 19.7871 14.4986 20 14.7619 20H15.7143C17.0533 20 18.2081 19.2038 18.7376 18.0619C18.9181 17.9938 19.0476 17.8233 19.0476 17.619C19.0476 17.8824 19.2605 18.0952 19.5238 18.0952C19.7871 18.0952 20 17.8824 20 17.619V15.7143C20 15.451 19.7871 15.2381 19.5238 15.2381V15.2381ZM4.28571 14.2857H4.7619V19.0476H4.28571C2.97286 19.0476 1.90476 17.9795 1.90476 16.6667C1.90476 15.3538 2.97286 14.2857 4.28571 14.2857ZM15.7143 19.0476H15.2381V14.2857H15.7143C17.0271 14.2857 18.0952 15.3538 18.0952 16.6667C18.0952 17.9795 17.0271 19.0476 15.7143 19.0476Z" fill="#52A9AD" />
                                        <path d="M16.1903 9.04752C16.1903 9.31038 16.4031 9.52371 16.6665 9.52371C16.9298 9.52371 17.1426 9.31038 17.1426 9.04752C17.1426 5.10895 13.9384 1.90466 9.99979 1.90466C6.06122 1.90466 2.85693 5.10895 2.85693 9.04752C2.85693 9.31038 3.07027 9.52371 3.33312 9.52371C3.59598 9.52371 3.80931 9.31038 3.80931 9.04752C3.80931 5.63419 6.58646 2.85704 9.99979 2.85704C13.4131 2.85704 16.1903 5.63419 16.1903 9.04752Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.5C13.2761 7.5 13.5 7.72386 13.5 8V13C13.5 13.2761 13.2761 13.5 13 13.5C12.7239 13.5 12.5 13.2761 12.5 13V8C12.5 7.72386 12.7239 7.5 13 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5C7.27614 7.5 7.5 7.72386 7.5 8V13C7.5 13.2761 7.27614 13.5 7 13.5C6.72386 13.5 6.5 13.2761 6.5 13V8C6.5 7.72386 6.72386 7.5 7 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5C9.5 4.72386 9.72386 4.5 10 4.5Z" fill="#52A9AD" />
                                    </svg>
                                    <span class="qtys">250</span>
                                </div>

                                <div class="mt-2">
                                    <a href="/">Build Personal Brending on Design Ecosystems</a>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, </p>
                                </div>

                                <div class="row">
                                    <div class="col-md-9">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.596 5.19735L1.233 8.88935C0.693 9.20235 0 8.82335 0 8.19235V0.808348C0 0.178348 0.692 -0.201652 1.233 0.112348L7.596 3.80435C7.71884 3.87447 7.82094 3.97583 7.89196 4.09816C7.96299 4.22048 8.00039 4.3594 8.00039 4.50085C8.00039 4.64229 7.96299 4.78122 7.89196 4.90354C7.82094 5.02586 7.71884 5.12722 7.596 5.19735Z" fill="#52A9AD" />
                                        </svg>
                                        <span class="qtys">Play this episode</span>
                                    </div>
                                    <div class="col-md-3 text-end">
                                        <span>60 min</span>
                                    </div>
                                </div>

                            </div>
                        </li>
                    </div>
                    {/* End Card */}





                    {/* Start Card */}
                    <div>
                        <div class="overlay2 p-3">
                            <a href="/"><span><svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 24L14.0146 23.5981C2.9728 15.1005 0 12.1148 0 7.23445C0 3.21531 3.45815 0 7.64435 0C11.1632 0 13.1653 1.89473 14.5 3.33014C15.8347 1.89473 17.8368 0 21.3556 0C25.6025 0 29 3.27272 29 7.23445C29 12.1148 26.0272 15.1005 14.9854 23.5981L14.5 24ZM7.64435 1.49282C4.30753 1.49282 1.5774 4.07655 1.5774 7.23445C1.5774 11.4258 4.3682 14.1818 14.5 22.0478C24.6318 14.1818 27.4226 11.4258 27.4226 7.23445C27.4226 4.07655 24.6925 1.49282 21.3556 1.49282C18.3222 1.49282 16.6841 3.21531 15.41 4.5933L14.5 5.56938L13.59 4.5933C12.3159 3.21531 10.6778 1.49282 7.64435 1.49282Z" fill="#52A9AD" />
                            </svg>
                            </span></a>
                        </div>

                        <div class="overlay3">
                            <span>EP.25</span>
                        </div>

                        <li class="cardback">
                            <a href="/">
                                <img src={episod3} alt="" class="rounded" />
                            </a>

                            <div class="header">
                                <span>Mike Levis <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg> personal branding</span>

                                <div class="float-end">
                                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5238 15.2381C19.2605 15.2381 19.0476 15.451 19.0476 15.7143V9.04762C19.0476 4.05857 14.989 0 10 0C5.01095 0 0.952381 4.05857 0.952381 9.04762V15.7143C0.952381 15.451 0.739048 15.2381 0.47619 15.2381C0.213333 15.2381 0 15.451 0 15.7143V17.619C0 17.8824 0.213333 18.0952 0.47619 18.0952C0.739048 18.0952 0.952381 17.8824 0.952381 17.619C0.952381 17.8233 1.0819 17.9938 1.26238 18.0619C1.7919 19.2038 2.94619 20 4.28571 20H5.2381C5.50095 20 5.71429 19.7871 5.71429 19.5238V13.8095C5.71429 13.5462 5.50095 13.3333 5.2381 13.3333H4.28571C3.35333 13.3333 2.51 13.7195 1.90476 14.3381V9.04762C1.90476 4.58381 5.53619 0.952381 10 0.952381C14.4638 0.952381 18.0952 4.58381 18.0952 9.04762V14.3381C17.49 13.719 16.6467 13.3333 15.7143 13.3333H14.7619C14.4986 13.3333 14.2857 13.5462 14.2857 13.8095V19.5238C14.2857 19.7871 14.4986 20 14.7619 20H15.7143C17.0533 20 18.2081 19.2038 18.7376 18.0619C18.9181 17.9938 19.0476 17.8233 19.0476 17.619C19.0476 17.8824 19.2605 18.0952 19.5238 18.0952C19.7871 18.0952 20 17.8824 20 17.619V15.7143C20 15.451 19.7871 15.2381 19.5238 15.2381V15.2381ZM4.28571 14.2857H4.7619V19.0476H4.28571C2.97286 19.0476 1.90476 17.9795 1.90476 16.6667C1.90476 15.3538 2.97286 14.2857 4.28571 14.2857ZM15.7143 19.0476H15.2381V14.2857H15.7143C17.0271 14.2857 18.0952 15.3538 18.0952 16.6667C18.0952 17.9795 17.0271 19.0476 15.7143 19.0476Z" fill="#52A9AD" />
                                        <path d="M16.1903 9.04752C16.1903 9.31038 16.4031 9.52371 16.6665 9.52371C16.9298 9.52371 17.1426 9.31038 17.1426 9.04752C17.1426 5.10895 13.9384 1.90466 9.99979 1.90466C6.06122 1.90466 2.85693 5.10895 2.85693 9.04752C2.85693 9.31038 3.07027 9.52371 3.33312 9.52371C3.59598 9.52371 3.80931 9.31038 3.80931 9.04752C3.80931 5.63419 6.58646 2.85704 9.99979 2.85704C13.4131 2.85704 16.1903 5.63419 16.1903 9.04752Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.5C13.2761 7.5 13.5 7.72386 13.5 8V13C13.5 13.2761 13.2761 13.5 13 13.5C12.7239 13.5 12.5 13.2761 12.5 13V8C12.5 7.72386 12.7239 7.5 13 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5C7.27614 7.5 7.5 7.72386 7.5 8V13C7.5 13.2761 7.27614 13.5 7 13.5C6.72386 13.5 6.5 13.2761 6.5 13V8C6.5 7.72386 6.72386 7.5 7 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5C9.5 4.72386 9.72386 4.5 10 4.5Z" fill="#52A9AD" />
                                    </svg>
                                    <span class="qtys">250</span>
                                </div>

                                <div class="mt-2">
                                    <a href="/">Build Personal Brending on Design Ecosystems</a>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, </p>
                                </div>


                                <div class="row">
                                    <div class="col-md-9">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.596 5.19735L1.233 8.88935C0.693 9.20235 0 8.82335 0 8.19235V0.808348C0 0.178348 0.692 -0.201652 1.233 0.112348L7.596 3.80435C7.71884 3.87447 7.82094 3.97583 7.89196 4.09816C7.96299 4.22048 8.00039 4.3594 8.00039 4.50085C8.00039 4.64229 7.96299 4.78122 7.89196 4.90354C7.82094 5.02586 7.71884 5.12722 7.596 5.19735Z" fill="#52A9AD" />
                                        </svg>
                                        <span class="qtys">Play this episode</span>
                                    </div>
                                    <div class="col-md-3 text-end">
                                        <span>60 min</span>
                                    </div>
                                </div>

                            </div>
                        </li>
                    </div>
                    {/* End Card */}





                    {/* Start Card */}
                    <div>
                        <div class="overlay2 p-3">
                            <a href="/"><span><svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 24L14.0146 23.5981C2.9728 15.1005 0 12.1148 0 7.23445C0 3.21531 3.45815 0 7.64435 0C11.1632 0 13.1653 1.89473 14.5 3.33014C15.8347 1.89473 17.8368 0 21.3556 0C25.6025 0 29 3.27272 29 7.23445C29 12.1148 26.0272 15.1005 14.9854 23.5981L14.5 24ZM7.64435 1.49282C4.30753 1.49282 1.5774 4.07655 1.5774 7.23445C1.5774 11.4258 4.3682 14.1818 14.5 22.0478C24.6318 14.1818 27.4226 11.4258 27.4226 7.23445C27.4226 4.07655 24.6925 1.49282 21.3556 1.49282C18.3222 1.49282 16.6841 3.21531 15.41 4.5933L14.5 5.56938L13.59 4.5933C12.3159 3.21531 10.6778 1.49282 7.64435 1.49282Z" fill="#52A9AD" />
                            </svg>
                            </span></a>
                        </div>

                        <div class="overlay3">
                            <span>EP.25</span>
                        </div>

                        <li class="cardback">
                            <a href="/">
                                <img src={episod4} alt="" class="rounded" />
                            </a>

                            <div class="header">
                                <span>Mike Levis <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg> personal branding</span>

                                <div class="float-end">
                                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5238 15.2381C19.2605 15.2381 19.0476 15.451 19.0476 15.7143V9.04762C19.0476 4.05857 14.989 0 10 0C5.01095 0 0.952381 4.05857 0.952381 9.04762V15.7143C0.952381 15.451 0.739048 15.2381 0.47619 15.2381C0.213333 15.2381 0 15.451 0 15.7143V17.619C0 17.8824 0.213333 18.0952 0.47619 18.0952C0.739048 18.0952 0.952381 17.8824 0.952381 17.619C0.952381 17.8233 1.0819 17.9938 1.26238 18.0619C1.7919 19.2038 2.94619 20 4.28571 20H5.2381C5.50095 20 5.71429 19.7871 5.71429 19.5238V13.8095C5.71429 13.5462 5.50095 13.3333 5.2381 13.3333H4.28571C3.35333 13.3333 2.51 13.7195 1.90476 14.3381V9.04762C1.90476 4.58381 5.53619 0.952381 10 0.952381C14.4638 0.952381 18.0952 4.58381 18.0952 9.04762V14.3381C17.49 13.719 16.6467 13.3333 15.7143 13.3333H14.7619C14.4986 13.3333 14.2857 13.5462 14.2857 13.8095V19.5238C14.2857 19.7871 14.4986 20 14.7619 20H15.7143C17.0533 20 18.2081 19.2038 18.7376 18.0619C18.9181 17.9938 19.0476 17.8233 19.0476 17.619C19.0476 17.8824 19.2605 18.0952 19.5238 18.0952C19.7871 18.0952 20 17.8824 20 17.619V15.7143C20 15.451 19.7871 15.2381 19.5238 15.2381V15.2381ZM4.28571 14.2857H4.7619V19.0476H4.28571C2.97286 19.0476 1.90476 17.9795 1.90476 16.6667C1.90476 15.3538 2.97286 14.2857 4.28571 14.2857ZM15.7143 19.0476H15.2381V14.2857H15.7143C17.0271 14.2857 18.0952 15.3538 18.0952 16.6667C18.0952 17.9795 17.0271 19.0476 15.7143 19.0476Z" fill="#52A9AD" />
                                        <path d="M16.1903 9.04752C16.1903 9.31038 16.4031 9.52371 16.6665 9.52371C16.9298 9.52371 17.1426 9.31038 17.1426 9.04752C17.1426 5.10895 13.9384 1.90466 9.99979 1.90466C6.06122 1.90466 2.85693 5.10895 2.85693 9.04752C2.85693 9.31038 3.07027 9.52371 3.33312 9.52371C3.59598 9.52371 3.80931 9.31038 3.80931 9.04752C3.80931 5.63419 6.58646 2.85704 9.99979 2.85704C13.4131 2.85704 16.1903 5.63419 16.1903 9.04752Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.5C13.2761 7.5 13.5 7.72386 13.5 8V13C13.5 13.2761 13.2761 13.5 13 13.5C12.7239 13.5 12.5 13.2761 12.5 13V8C12.5 7.72386 12.7239 7.5 13 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5C7.27614 7.5 7.5 7.72386 7.5 8V13C7.5 13.2761 7.27614 13.5 7 13.5C6.72386 13.5 6.5 13.2761 6.5 13V8C6.5 7.72386 6.72386 7.5 7 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5C9.5 4.72386 9.72386 4.5 10 4.5Z" fill="#52A9AD" />
                                    </svg>
                                    <span class="qtys">250</span>
                                </div>

                                <div class="mt-2">
                                    <a href="/">Build Personal Brending on Design Ecosystems</a>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, </p>
                                </div>

                                <div class="row">
                                    <div class="col-md-9">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.596 5.19735L1.233 8.88935C0.693 9.20235 0 8.82335 0 8.19235V0.808348C0 0.178348 0.692 -0.201652 1.233 0.112348L7.596 3.80435C7.71884 3.87447 7.82094 3.97583 7.89196 4.09816C7.96299 4.22048 8.00039 4.3594 8.00039 4.50085C8.00039 4.64229 7.96299 4.78122 7.89196 4.90354C7.82094 5.02586 7.71884 5.12722 7.596 5.19735Z" fill="#52A9AD" />
                                        </svg>
                                        <span class="qtys">Play this episode</span>
                                    </div>
                                    <div class="col-md-3 text-end">
                                        <span>60 min</span>
                                    </div>
                                </div>

                            </div>
                        </li>
                    </div>
                    {/* End Card */}




                    {/* Start Card */}
                    <div>
                        <div class="overlay2 p-3">
                            <a href="/"><span><svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 24L14.0146 23.5981C2.9728 15.1005 0 12.1148 0 7.23445C0 3.21531 3.45815 0 7.64435 0C11.1632 0 13.1653 1.89473 14.5 3.33014C15.8347 1.89473 17.8368 0 21.3556 0C25.6025 0 29 3.27272 29 7.23445C29 12.1148 26.0272 15.1005 14.9854 23.5981L14.5 24ZM7.64435 1.49282C4.30753 1.49282 1.5774 4.07655 1.5774 7.23445C1.5774 11.4258 4.3682 14.1818 14.5 22.0478C24.6318 14.1818 27.4226 11.4258 27.4226 7.23445C27.4226 4.07655 24.6925 1.49282 21.3556 1.49282C18.3222 1.49282 16.6841 3.21531 15.41 4.5933L14.5 5.56938L13.59 4.5933C12.3159 3.21531 10.6778 1.49282 7.64435 1.49282Z" fill="#52A9AD" />
                            </svg>
                            </span></a>
                        </div>

                        <div class="overlay3">
                            <span>EP.25</span>
                        </div>

                        <li class="cardback">
                            <a href="/">
                                <img src={episod3} alt="" class="rounded" />
                            </a>

                            <div class="header">
                                <span>Mike Levis <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg> personal branding</span>

                                <div class="float-end">
                                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5238 15.2381C19.2605 15.2381 19.0476 15.451 19.0476 15.7143V9.04762C19.0476 4.05857 14.989 0 10 0C5.01095 0 0.952381 4.05857 0.952381 9.04762V15.7143C0.952381 15.451 0.739048 15.2381 0.47619 15.2381C0.213333 15.2381 0 15.451 0 15.7143V17.619C0 17.8824 0.213333 18.0952 0.47619 18.0952C0.739048 18.0952 0.952381 17.8824 0.952381 17.619C0.952381 17.8233 1.0819 17.9938 1.26238 18.0619C1.7919 19.2038 2.94619 20 4.28571 20H5.2381C5.50095 20 5.71429 19.7871 5.71429 19.5238V13.8095C5.71429 13.5462 5.50095 13.3333 5.2381 13.3333H4.28571C3.35333 13.3333 2.51 13.7195 1.90476 14.3381V9.04762C1.90476 4.58381 5.53619 0.952381 10 0.952381C14.4638 0.952381 18.0952 4.58381 18.0952 9.04762V14.3381C17.49 13.719 16.6467 13.3333 15.7143 13.3333H14.7619C14.4986 13.3333 14.2857 13.5462 14.2857 13.8095V19.5238C14.2857 19.7871 14.4986 20 14.7619 20H15.7143C17.0533 20 18.2081 19.2038 18.7376 18.0619C18.9181 17.9938 19.0476 17.8233 19.0476 17.619C19.0476 17.8824 19.2605 18.0952 19.5238 18.0952C19.7871 18.0952 20 17.8824 20 17.619V15.7143C20 15.451 19.7871 15.2381 19.5238 15.2381V15.2381ZM4.28571 14.2857H4.7619V19.0476H4.28571C2.97286 19.0476 1.90476 17.9795 1.90476 16.6667C1.90476 15.3538 2.97286 14.2857 4.28571 14.2857ZM15.7143 19.0476H15.2381V14.2857H15.7143C17.0271 14.2857 18.0952 15.3538 18.0952 16.6667C18.0952 17.9795 17.0271 19.0476 15.7143 19.0476Z" fill="#52A9AD" />
                                        <path d="M16.1903 9.04752C16.1903 9.31038 16.4031 9.52371 16.6665 9.52371C16.9298 9.52371 17.1426 9.31038 17.1426 9.04752C17.1426 5.10895 13.9384 1.90466 9.99979 1.90466C6.06122 1.90466 2.85693 5.10895 2.85693 9.04752C2.85693 9.31038 3.07027 9.52371 3.33312 9.52371C3.59598 9.52371 3.80931 9.31038 3.80931 9.04752C3.80931 5.63419 6.58646 2.85704 9.99979 2.85704C13.4131 2.85704 16.1903 5.63419 16.1903 9.04752Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.5C13.2761 7.5 13.5 7.72386 13.5 8V13C13.5 13.2761 13.2761 13.5 13 13.5C12.7239 13.5 12.5 13.2761 12.5 13V8C12.5 7.72386 12.7239 7.5 13 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5C7.27614 7.5 7.5 7.72386 7.5 8V13C7.5 13.2761 7.27614 13.5 7 13.5C6.72386 13.5 6.5 13.2761 6.5 13V8C6.5 7.72386 6.72386 7.5 7 7.5Z" fill="#52A9AD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5C9.5 4.72386 9.72386 4.5 10 4.5Z" fill="#52A9AD" />
                                    </svg>
                                    <span class="qtys">250</span>
                                </div>

                                <div class="mt-2">
                                    <a href="/">Build Personal Brending on Design Ecosystems</a>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, </p>
                                </div>


                                <div>
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.596 5.19735L1.233 8.88935C0.693 9.20235 0 8.82335 0 8.19235V0.808348C0 0.178348 0.692 -0.201652 1.233 0.112348L7.596 3.80435C7.71884 3.87447 7.82094 3.97583 7.89196 4.09816C7.96299 4.22048 8.00039 4.3594 8.00039 4.50085C8.00039 4.64229 7.96299 4.78122 7.89196 4.90354C7.82094 5.02586 7.71884 5.12722 7.596 5.19735Z" fill="#52A9AD" />
                                    </svg>
                                    <span class="qtys">Play this episode</span>

                                    <span>60 min</span>
                                </div>

                            </div>
                        </li>
                    </div>
                    {/* End Card */}




                </ul>


                <a className="uk-position-center-left uk-position-small uk-hidden-hover" style={{ Background: "#52A9AD", Color: '#fff', borderRadius: "50%", padding: "10px 15px" }} href="/" uk-slidenav-previous uk-slider-item="previous"> </a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" style={{ Background: "#52A9AD", Color: '#fff', borderRadius: "50%", padding: "10px 15px" }} href="/" uk-slidenav-next uk-slider-item="next"> </a>

            </div>
        </div>
    );
};

export default Episods;