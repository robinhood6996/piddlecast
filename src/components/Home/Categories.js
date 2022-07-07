import React from 'react';

const Categories = () => {
    return (
        <div class="col-md-12 pt-5 pb-5">
            <strong class="mystrong">Categories</strong>
            <div class="shape3"></div>
            <div class="uk-position-relative uk-visible-toggle uk-light mt-4" tabindex="-1" uk-slider="autoplay-interval:3000;">

                <ul class="uk-slider-items uk-child-width-1-0 uk-child-width-1-3@m uk-grid">


                    {/* <!-------Start Card--------> */}

                    <li class="mt-4">
                        <div class="col-md-12 twocardback">
                            <div class="row align-items-center py-1">
                                <div class="col-md-3 col-3">
                                    <svg width="100" height="100" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="160" height="160" rx="10" fill="#52A9AD" />
                                        <path d="M127.25 123H32.75C32.2859 123 31.8408 122.816 31.5126 122.488C31.1844 122.161 31 121.717 31 121.253V57.7466C31 57.2834 31.1844 56.8391 31.5126 56.5116C31.8408 56.184 32.2859 56 32.75 56H127.25C127.714 56 128.159 56.184 128.487 56.5116C128.816 56.8391 129 57.2834 129 57.7466V121.253C129 121.717 128.816 122.161 128.487 122.488C128.159 122.816 127.714 123 127.25 123ZM34.5 119.507H125.5V59.4932H34.5V119.507Z" fill="white" />
                                        <path d="M127.24 60H32.7602C32.4658 59.9976 32.1768 59.9201 31.9199 59.7745C31.663 59.629 31.4465 59.4202 31.2905 59.1675C31.1207 58.9076 31.0216 58.6071 31.0031 58.2961C30.9847 57.9851 31.0476 57.6747 31.1855 57.3961L39.9337 38.992C40.0779 38.6938 40.3021 38.4428 40.5805 38.2674C40.8589 38.092 41.1804 37.9993 41.5083 38H118.492C118.82 37.9993 119.141 38.092 119.42 38.2674C119.698 38.4428 119.922 38.6938 120.066 38.992L128.814 57.3961C128.952 57.6747 129.015 57.9851 128.997 58.2961C128.978 58.6071 128.879 58.9076 128.709 59.1675C128.553 59.4202 128.337 59.629 128.08 59.7745C127.823 59.9201 127.534 59.9976 127.24 60ZM35.5246 56.4573H124.475L117.477 41.6135H42.5756L35.5246 56.4573Z" fill="white" />
                                        <path d="M80.1716 79H70.8284C70.3435 79 69.8784 78.8151 69.5355 78.4861C69.1926 78.157 69 77.7107 69 77.2453V57.9434L71.0295 39.5715C71.0546 39.3422 71.1266 39.1198 71.2413 38.9172C71.3559 38.7146 71.5111 38.5356 71.6979 38.3906C71.8847 38.2455 72.0994 38.1373 72.3298 38.0719C72.5603 38.0066 72.8019 37.9855 73.0408 38.0098C73.2814 38.0317 73.515 38.0992 73.7282 38.2083C73.9415 38.3174 74.13 38.466 74.2831 38.6455C74.4361 38.825 74.5505 39.0318 74.6197 39.254C74.689 39.4762 74.7116 39.7093 74.6864 39.94L72.6568 58.0662V75.4906H80.1716C80.6565 75.4906 81.1216 75.6754 81.4645 76.0045C81.8074 76.3336 82 76.7799 82 77.2453C82 77.7107 81.8074 78.157 81.4645 78.4861C81.1216 78.8151 80.6565 79 80.1716 79Z" fill="white" />
                                        <path d="M88.6261 79H79.7391C79.2779 79 78.8355 78.8152 78.5094 78.4862C78.1832 78.1572 78 77.7109 78 77.2457C78 76.7804 78.1832 76.3341 78.5094 76.0051C78.8355 75.6761 79.2779 75.4913 79.7391 75.4913H86.887V58.0706L84.9565 39.9482C84.9081 39.4829 85.0449 39.0173 85.3368 38.6537C85.6287 38.2902 86.0518 38.0585 86.513 38.0097C86.9743 37.9608 87.4359 38.0988 87.7963 38.3932C88.1567 38.6877 88.3864 39.1145 88.4348 39.5798L90.313 57.8075V77.2457C90.3132 77.702 90.1372 78.1404 89.8222 78.4679C89.5073 78.7955 89.0782 78.9863 88.6261 79ZM116.261 70.1055H105.826C105.365 70.1055 104.922 69.9206 104.596 69.5916C104.27 69.2626 104.087 68.8164 104.087 68.3511C104.087 67.8858 104.27 67.4396 104.596 67.1106C104.922 66.7816 105.365 66.5968 105.826 66.5968H116.261C116.722 66.5968 117.164 66.7816 117.491 67.1106C117.817 67.4396 118 67.8858 118 68.3511C118 68.8164 117.817 69.2626 117.491 69.5916C117.164 69.9206 116.722 70.1055 116.261 70.1055ZM116.261 79H105.826C105.365 79 104.922 78.8152 104.596 78.4862C104.27 78.1572 104.087 77.7109 104.087 77.2457C104.087 76.7804 104.27 76.3341 104.596 76.0051C104.922 75.6761 105.365 75.4913 105.826 75.4913H116.261C116.722 75.4913 117.164 75.6761 117.491 76.0051C117.817 76.3341 118 76.7804 118 77.2457C118 77.7109 117.817 78.1572 117.491 78.4862C117.164 78.8152 116.722 79 116.261 79Z" fill="white" />
                                    </svg>

                                </div>
                                <div class="col-md-9 col-9">
                                    <a href="/">Product design</a><br />
                                    <span>131 podoasts</span>
                                </div>
                            </div>
                        </div>
                    </li>



                    <li class="mt-4">
                        <div class="col-md-12 twocardback">
                            <div class="row align-items-center">
                                <div class="col-md-3 col-3">
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="160" height="160" rx="10" fill="#F2F2F2" />
                                        <path d="M46.4061 59.6874C49.0329 59.6874 51.6007 58.9085 53.7848 57.4491C55.9689 55.9898 57.6712 53.9155 58.6764 51.4887C59.6816 49.0619 59.9446 46.3915 59.4322 43.8151C58.9197 41.2388 57.6548 38.8723 55.7974 37.0149C53.94 35.1575 51.5735 33.8926 48.9972 33.3801C46.4209 32.8677 43.7504 33.1307 41.3236 34.1359C38.8968 35.1411 36.8225 36.8434 35.3632 39.0275C33.9038 41.2116 33.1249 43.7794 33.1249 46.4062C33.129 49.9273 34.5296 53.3031 37.0194 55.7929C39.5093 58.2827 42.885 59.6833 46.4061 59.6874ZM54.6249 40.4452C55.884 42.1777 56.5622 44.2645 56.5622 46.4062C56.5622 48.5479 55.884 50.6346 54.6249 52.3671C53.4128 50.6183 52.779 48.5337 52.8124 46.4062C52.779 44.2787 53.4128 42.1941 54.6249 40.4452ZM40.4061 38.2218C42.1505 36.9576 44.2493 36.276 46.4036 36.274C48.5579 36.272 50.6579 36.9498 52.4046 38.2109C50.6582 40.5864 49.7163 43.4578 49.7163 46.4062C49.7163 49.3546 50.6582 52.2259 52.4046 54.6015C50.6579 55.8625 48.5579 56.5403 46.4036 56.5384C44.2493 56.5364 42.1505 55.8548 40.4061 54.5906C42.1594 52.2217 43.1052 49.3523 43.1041 46.4052C43.103 43.4581 42.155 40.5893 40.3999 38.2218H40.4061ZM38.178 40.4687C39.3934 42.2076 40.0308 44.2849 39.9999 46.4062C40.0329 48.53 39.3959 50.6102 38.1796 52.3515C36.9262 50.6225 36.2513 48.5417 36.2513 46.4062C36.2513 44.2707 36.9262 42.1899 38.1796 40.4609L38.178 40.4687ZM113.594 100.312C110.967 100.312 108.399 101.091 106.215 102.551C104.031 104.01 102.329 106.084 101.323 108.511C100.318 110.938 100.055 113.608 100.568 116.185C101.08 118.761 102.345 121.128 104.202 122.985C106.06 124.842 108.426 126.107 111.003 126.62C113.579 127.132 116.249 126.869 118.676 125.864C121.103 124.859 123.177 123.156 124.637 120.972C126.096 118.788 126.875 116.22 126.875 113.594C126.871 110.073 125.47 106.697 122.98 104.207C120.491 101.717 117.115 100.317 113.594 100.312ZM113.594 123.75C111.585 123.75 109.621 123.154 107.951 122.038C106.281 120.922 104.979 119.336 104.21 117.48C103.442 115.625 103.241 113.582 103.633 111.612C104.024 109.642 104.992 107.833 106.412 106.412C107.832 104.992 109.642 104.024 111.612 103.633C113.582 103.241 115.624 103.442 117.48 104.211C119.336 104.979 120.922 106.281 122.038 107.951C123.154 109.621 123.75 111.585 123.75 113.594C123.747 116.286 122.675 118.868 120.772 120.772C118.868 122.676 116.286 123.747 113.594 123.75ZM34.6874 67.4999H36.2499V69.0624C36.2499 69.4768 36.4145 69.8743 36.7075 70.1673C37.0006 70.4603 37.398 70.6249 37.8124 70.6249C38.2268 70.6249 38.6242 70.4603 38.9172 70.1673C39.2103 69.8743 39.3749 69.4768 39.3749 69.0624V67.4999H40.9374C41.3518 67.4999 41.7492 67.3353 42.0422 67.0423C42.3353 66.7493 42.4999 66.3518 42.4999 65.9374C42.4999 65.523 42.3353 65.1256 42.0422 64.8326C41.7492 64.5396 41.3518 64.3749 40.9374 64.3749H39.3749V62.8124C39.3749 62.398 39.2103 62.0006 38.9172 61.7076C38.6242 61.4146 38.2268 61.2499 37.8124 61.2499C37.398 61.2499 37.0006 61.4146 36.7075 61.7076C36.4145 62.0006 36.2499 62.398 36.2499 62.8124V64.3749H34.6874C34.273 64.3749 33.8756 64.5396 33.5825 64.8326C33.2895 65.1256 33.1249 65.523 33.1249 65.9374C33.1249 66.3518 33.2895 66.7493 33.5825 67.0423C33.8756 67.3353 34.273 67.4999 34.6874 67.4999ZM90.9374 117.5C90.523 117.5 90.1255 117.665 89.8325 117.958C89.5395 118.251 89.3749 118.648 89.3749 119.062V120.625H87.8124C87.398 120.625 87.0005 120.79 86.7075 121.083C86.4145 121.376 86.2499 121.773 86.2499 122.187C86.2499 122.602 86.4145 122.999 86.7075 123.292C87.0005 123.585 87.398 123.75 87.8124 123.75H89.3749V125.312C89.3749 125.727 89.5395 126.124 89.8325 126.417C90.1255 126.71 90.523 126.875 90.9374 126.875C91.3518 126.875 91.7492 126.71 92.0422 126.417C92.3353 126.124 92.4999 125.727 92.4999 125.312V123.75H94.0624C94.4768 123.75 94.8742 123.585 95.1672 123.292C95.4603 122.999 95.6249 122.602 95.6249 122.187C95.6249 121.773 95.4603 121.376 95.1672 121.083C94.8742 120.79 94.4768 120.625 94.0624 120.625H92.4999V119.062C92.4999 118.648 92.3353 118.251 92.0422 117.958C91.7492 117.665 91.3518 117.5 90.9374 117.5ZM70.6249 37.8124C70.6249 36.8853 70.35 35.9791 69.8349 35.2082C69.3198 34.4373 68.5877 33.8365 67.7312 33.4818C66.8747 33.127 65.9322 33.0341 65.0229 33.215C64.1136 33.3959 63.2784 33.8423 62.6228 34.4979C61.9673 35.1534 61.5208 35.9887 61.34 36.898C61.1591 37.8072 61.2519 38.7497 61.6067 39.6063C61.9615 40.4628 62.5623 41.1949 63.3331 41.7099C64.104 42.225 65.0103 42.4999 65.9374 42.4999C67.1806 42.4999 68.3729 42.0061 69.2519 41.127C70.131 40.2479 70.6249 39.0556 70.6249 37.8124ZM64.3749 37.8124C64.3749 37.5034 64.4665 37.2013 64.6382 36.9444C64.8099 36.6874 65.0539 36.4871 65.3394 36.3689C65.625 36.2506 65.9391 36.2197 66.2422 36.28C66.5453 36.3402 66.8237 36.4891 67.0422 36.7076C67.2608 36.9261 67.4096 37.2045 67.4699 37.5076C67.5302 37.8107 67.4992 38.1249 67.3809 38.4104C67.2627 38.6959 67.0624 38.9399 66.8055 39.1116C66.5485 39.2833 66.2464 39.3749 65.9374 39.3749C65.523 39.3749 65.1256 39.2103 64.8325 38.9173C64.5395 38.6243 64.3749 38.2268 64.3749 37.8124ZM122.187 87.8124C121.26 87.8124 120.354 88.0874 119.583 88.6024C118.812 89.1175 118.211 89.8496 117.857 90.7061C117.502 91.5626 117.409 92.5051 117.59 93.4144C117.771 94.3237 118.217 95.1589 118.873 95.8145C119.528 96.4701 120.364 96.9165 121.273 97.0974C122.182 97.2782 123.125 97.1854 123.981 96.8306C124.838 96.4758 125.57 95.875 126.085 95.1042C126.6 94.3333 126.875 93.427 126.875 92.4999C126.875 91.2567 126.381 90.0644 125.502 89.1854C124.623 88.3063 123.431 87.8124 122.187 87.8124ZM122.187 94.0624C121.878 94.0624 121.576 93.9708 121.319 93.7991C121.062 93.6274 120.862 93.3834 120.744 93.0979C120.626 92.8124 120.595 92.4982 120.655 92.1951C120.715 91.892 120.864 91.6136 121.083 91.3951C121.301 91.1766 121.579 91.0277 121.883 90.9675C122.186 90.9072 122.5 90.9381 122.785 91.0564C123.071 91.1746 123.315 91.3749 123.487 91.6319C123.658 91.8888 123.75 92.1909 123.75 92.4999C123.75 92.9143 123.585 93.3118 123.292 93.6048C122.999 93.8978 122.602 94.0624 122.187 94.0624ZM97.1874 33.1249C81.2218 32.7984 67.1718 46.8453 67.4999 62.8124C67.5031 64.5334 67.6599 66.2506 67.9686 67.9437C66.2659 67.6477 64.5407 67.4992 62.8124 67.4999C46.8436 67.1702 32.7936 81.2265 33.1249 97.1874C32.7952 113.148 46.8436 127.205 62.8124 126.875C78.7811 127.205 92.8311 113.148 92.4999 97.1874C92.5009 95.4639 92.3535 93.7435 92.0593 92.0452C93.7521 92.3461 95.468 92.4982 97.1874 92.4999C113.148 92.8296 127.203 78.7827 126.875 62.8124C127.205 46.8406 113.144 32.7921 97.1874 33.1249ZM78.4202 44.0093C78.4968 43.9327 78.5764 43.8531 78.6514 43.7812C83.3964 48.4053 86.2419 54.6358 86.6296 61.2499H70.6702C71.033 54.7425 73.794 48.6003 78.4202 44.0093ZM64.3749 87.4312V77.5406L71.8889 72.2062C75.5495 73.5363 78.8713 75.6581 81.6171 78.4202C82.3797 79.1863 83.0966 79.9965 83.7639 80.8468L81.0108 89.6593L72.0046 92.8452L64.3749 87.4312ZM69.9124 95.1921L67.2155 103.295H58.4093L55.7124 95.1921L62.8124 90.1562L69.9124 95.1921ZM83.3077 75.7031C79.9235 72.4592 75.8146 70.0691 71.3218 68.7312C70.9881 67.2992 70.7722 65.8422 70.6764 64.3749H86.6296C86.3913 68.3533 85.2557 72.2261 83.3077 75.7031ZM68.0093 71.1296L62.8124 74.8171L57.6155 71.1296C61.0475 70.4577 64.5772 70.4577 68.0093 71.1296ZM53.7358 72.2062L61.2499 77.5406V87.4312L53.6202 92.8452L44.6139 89.6593L41.8608 80.8468C44.9334 76.9129 49.0474 73.9194 53.7358 72.2062ZM39.6311 84.189L41.5327 90.2827L36.428 94.0827C36.8264 90.6045 37.9154 87.2408 39.6311 84.189ZM40.7921 112.061C37.9899 107.93 36.4185 103.089 36.2608 98.0999L43.6171 92.6218L52.6186 95.8046L55.5405 104.587L50.0046 112.159L40.7921 112.061ZM43.2921 115.212L49.6639 115.28L51.7186 121.337C48.5354 119.87 45.6733 117.789 43.2968 115.212H43.2921ZM70.1421 122.731C65.3463 124.086 60.2691 124.086 55.4733 122.731L52.5296 113.997L58.0702 106.42H67.5452L73.0858 113.997L70.1421 122.731ZM73.9093 121.337L75.9514 115.28L82.3233 115.212C79.9504 117.787 77.0927 119.869 73.9139 121.337H73.9093ZM84.828 112.061L75.6093 112.159L70.0733 104.587L72.9952 95.8046L81.9999 92.6218L89.353 98.0906C89.201 103.082 87.6333 107.927 84.8327 112.061H84.828ZM84.0874 90.2796L85.9889 84.1859C87.7035 87.2347 88.7919 90.5952 89.1905 94.0702L84.0874 90.2796ZM95.6249 89.3265C94.1606 89.2385 92.7062 89.0295 91.2764 88.7015C90.1189 84.8017 88.1658 81.184 85.5405 78.0765C88.0508 73.9252 89.4998 69.2193 89.7593 64.3749H95.6249V89.3265ZM95.6249 61.2499H89.7608C89.3737 53.8824 86.2572 46.923 81.0186 41.7281C85.2275 38.4846 90.3194 36.5906 95.6249 36.2952V61.2499ZM98.7499 36.2952C104.055 36.5906 109.147 38.4846 113.356 41.7281C108.119 46.9238 105.002 53.8828 104.614 61.2499H98.7499V36.2952ZM98.7499 89.3296V64.3749H104.614C105.002 71.7421 108.119 78.7011 113.356 83.8968C109.147 87.1403 104.055 89.0342 98.7499 89.3296ZM115.723 81.8437C110.98 77.2187 108.134 70.9887 107.745 64.3749H123.705C123.334 70.994 120.485 77.2308 115.723 81.8437ZM107.745 61.2499C108.134 54.6361 110.98 48.4061 115.723 43.7812C120.485 48.3941 123.334 54.6309 123.705 61.2499H107.745Z" fill="black" />
                                        <path d="M111.25 120.625C112.113 120.625 112.812 119.925 112.812 119.062C112.812 118.2 112.113 117.5 111.25 117.5C110.387 117.5 109.688 118.2 109.688 119.062C109.688 119.925 110.387 120.625 111.25 120.625Z" fill="black" />
                                        <path d="M119.062 112.812C119.925 112.812 120.625 112.113 120.625 111.25C120.625 110.387 119.925 109.688 119.062 109.688C118.2 109.688 117.5 110.387 117.5 111.25C117.5 112.113 118.2 112.812 119.062 112.812Z" fill="black" />
                                        <path d="M117.5 119.062C118.363 119.062 119.062 118.363 119.062 117.5C119.062 116.637 118.363 115.938 117.5 115.938C116.637 115.938 115.938 116.637 115.938 117.5C115.938 118.363 116.637 119.062 117.5 119.062Z" fill="black" />
                                    </svg>


                                </div>
                                <div class="col-md-9 col-9">
                                    <a href="/">Sport</a><br />
                                    <span>200 podoasts</span>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li class="mt-4">
                        <div class="col-md-12 twocardback">
                            <div class="row align-items-center">
                                <div class="col-md-3 col-3">
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="160" height="160" rx="10" fill="#F2F2F2" />
                                        <path d="M58.1641 30.0909C51.4371 31.573 44.25 37.1653 44.25 48.4189C44.25 68.9242 70.9118 88.7527 79.0828 94.341C79.3529 94.5261 79.6726 94.6251 80 94.6251C80.3274 94.6251 80.6471 94.5261 80.9172 94.341C89.0882 88.7527 115.75 68.9242 115.75 48.4189C115.75 37.1653 108.563 31.573 101.836 30.0909C97.7158 29.231 93.4324 29.627 89.5396 31.2275C85.6469 32.828 82.3238 35.5595 80 39.0688C77.6774 35.5582 74.3545 32.8257 70.4614 31.2251C66.5683 29.6244 62.2843 29.2293 58.1641 30.0909ZM78.5257 43.1091C78.656 43.3904 78.8641 43.6285 79.1253 43.7954C79.3865 43.9623 79.69 44.0509 80 44.0509C80.31 44.0509 80.6135 43.9623 80.8747 43.7954C81.1359 43.6285 81.344 43.3904 81.4743 43.1091C83.1582 39.4889 86.0181 36.5453 89.5883 34.7578C93.1585 32.9702 97.2287 32.444 101.136 33.2647C108.252 34.8326 112.5 40.497 112.5 48.4189C112.5 66.9184 87.1919 85.9812 80 91.0236C72.8081 85.9812 47.5 66.9183 47.5 48.4189C47.5 40.497 51.7482 34.8326 58.8639 33.2647C60.0311 33.0104 61.2224 32.8835 62.417 32.8862C65.8002 32.8635 69.1184 33.8154 71.975 35.6283C74.8316 37.4411 77.1058 40.0382 78.5257 43.1091Z" fill="black" />
                                        <path d="M81.625 99.5H78.375V102.75H81.625V99.5Z" fill="black" />
                                        <path d="M81.625 106H78.375V109.25H81.625V106Z" fill="black" />
                                        <path d="M130.188 120.827C130.29 120.633 130.352 120.421 130.37 120.202C130.387 119.983 130.36 119.763 130.291 119.555L128.666 114.68C128.543 114.314 128.293 114.003 127.962 113.804C127.631 113.604 127.24 113.529 126.858 113.592L117.629 115.13L111.602 112.116C111.376 112.003 111.127 111.945 110.875 111.945H110.45C111.204 110.832 111.638 109.533 111.703 108.19C111.768 106.847 111.462 105.511 110.819 104.331C110.176 103.15 109.22 102.169 108.057 101.495C106.893 100.821 105.566 100.481 104.222 100.511C102.878 100.542 101.568 100.941 100.436 101.667C99.3035 102.392 98.3928 103.415 97.8034 104.623C97.214 105.832 96.9687 107.179 97.0943 108.518C97.2198 109.857 97.7115 111.135 98.5153 112.213L91.175 115.149L80.2301 113.586L80.2253 113.619C80.0759 113.587 79.9225 113.575 79.7699 113.586L68.8979 115.139L62.8518 112.116C62.626 112.003 62.3772 111.945 62.1249 111.945H61.6995C62.4372 110.844 62.8619 109.563 62.9282 108.24C62.9946 106.917 62.7001 105.6 62.0763 104.431C61.4525 103.262 60.5227 102.285 59.3864 101.603C58.2501 100.921 56.95 100.561 55.6249 100.561C54.2999 100.561 52.9997 100.921 51.8634 101.603C50.7271 102.285 49.7973 103.262 49.1735 104.431C48.5497 105.6 48.2552 106.917 48.3216 108.24C48.3879 109.563 48.8126 110.844 49.5503 111.945H49.1249C48.8726 111.945 48.6238 112.003 48.3981 112.116L42.371 115.13L33.1415 113.592C32.76 113.529 32.3685 113.604 32.0373 113.803C31.7061 114.003 31.4567 114.314 31.334 114.68L29.709 119.555C29.6393 119.764 29.6126 119.984 29.6303 120.202C29.6481 120.421 29.71 120.634 29.8124 120.828C29.9147 121.022 30.0554 121.193 30.2258 121.331C30.3962 121.47 30.5929 121.572 30.804 121.632L42.179 124.882C42.4937 124.972 42.8284 124.965 43.139 124.861L45.8749 123.949V129.82H49.1249V121.695C49.1249 121.437 49.0637 121.183 48.9463 120.954C48.8289 120.725 48.6588 120.527 48.4499 120.376C48.241 120.226 47.9993 120.127 47.7447 120.088C47.4902 120.049 47.23 120.072 46.9857 120.153L42.5884 121.619L33.3288 118.973L33.9778 117.026L42.3583 118.422C42.6969 118.48 43.0451 118.428 43.3517 118.273L49.5089 115.195H61.7409L67.8981 118.273C68.1941 118.42 68.5277 118.474 68.855 118.428L78.3749 117.068V118.844L68.6614 121.619L64.2641 120.153C64.0198 120.071 63.7597 120.049 63.5051 120.088C63.2505 120.127 63.0088 120.226 62.7999 120.376C62.591 120.527 62.4208 120.725 62.3035 120.954C62.1861 121.183 62.1249 121.437 62.1249 121.695V129.82H65.3749V123.949L68.1107 124.861C68.4214 124.965 68.756 124.972 69.0708 124.882L79.9999 121.759L90.929 124.882C91.2438 124.972 91.5784 124.965 91.8891 124.861L94.6249 123.949V129.82H97.8749V121.695C97.8749 121.437 97.8137 121.183 97.6963 120.954C97.5789 120.725 97.4088 120.527 97.1999 120.376C96.991 120.226 96.7493 120.127 96.4947 120.088C96.2402 120.049 95.98 120.072 95.7357 120.153L91.3384 121.619L81.6249 118.844V117.068L91.1448 118.428C91.4264 118.469 91.7138 118.435 91.9779 118.329L99.8125 115.195H110.491L116.648 118.273C116.955 118.427 117.303 118.479 117.642 118.422L126.022 117.026L126.671 118.973L117.411 121.619L113.014 120.153C112.77 120.072 112.51 120.049 112.255 120.088C112.001 120.127 111.759 120.226 111.55 120.376C111.341 120.527 111.171 120.725 111.054 120.954C110.936 121.183 110.875 121.437 110.875 121.695V129.82H114.125V123.949L116.861 124.861C117.171 124.965 117.506 124.972 117.821 124.882L129.196 121.632C129.407 121.572 129.604 121.47 129.774 121.331C129.945 121.193 130.085 121.022 130.188 120.827ZM55.6249 111.945C54.8214 111.945 54.036 111.706 53.3679 111.26C52.6998 110.814 52.1791 110.179 51.8716 109.437C51.5642 108.694 51.4837 107.878 51.6405 107.09C51.7972 106.302 52.1841 105.578 52.7523 105.01C53.3204 104.441 54.0443 104.054 54.8323 103.898C55.6204 103.741 56.4372 103.821 57.1796 104.129C57.9219 104.436 58.5564 104.957 59.0027 105.625C59.4491 106.293 59.6874 107.079 59.6874 107.882C59.6863 108.959 59.2579 109.992 58.4963 110.754C57.7347 111.515 56.702 111.943 55.6249 111.945ZM104.375 111.945C103.571 111.945 102.786 111.706 102.118 111.26C101.45 110.814 100.929 110.179 100.622 109.437C100.314 108.694 100.234 107.878 100.39 107.09C100.547 106.302 100.934 105.578 101.502 105.01C102.07 104.441 102.794 104.054 103.582 103.898C104.37 103.741 105.187 103.821 105.93 104.129C106.672 104.436 107.306 104.957 107.753 105.625C108.199 106.293 108.437 107.079 108.437 107.882C108.436 108.959 108.008 109.992 107.246 110.754C106.485 111.515 105.452 111.943 104.375 111.945Z" fill="black" />
                                    </svg>

                                </div>
                                <div class="col-md-9 col-9">
                                    <a href="/">Lifestyle</a><br />
                                    <span>300 podoasts</span>
                                </div>
                            </div>
                        </div>
                    </li>







                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" style={{ Background: "#52A9AD", Color: '#fff', borderRadius: "50%", padding: "10px 15px" }} href="/" uk-slidenav-previous uk-slider-item="previous">u </a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" style={{ Background: "#52A9AD", Color: '#fff', borderRadius: "50%", padding: "10px 15px" }} href="/" uk-slidenav-next uk-slider-item="next"> u</a>

            </div>
        </div>
    );
};

export default Categories;