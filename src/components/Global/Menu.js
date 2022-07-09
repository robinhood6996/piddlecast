import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (

        <div class="col-md-1 borderright left__menu p-0 d-none d-md-block">
            <div class="borderbottom p-3">
                <center>
                    <Link to="/">
                        <svg width="22" height="22" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1717 1.3403C14.3972 -0.446767 17.5576 -0.446767 19.7831 1.3403L19.7858 1.3425L30.0485 9.63401C31.2583 10.5751 31.9789 12.021 31.9998 13.5645L32 13.5808L31.9999 27.3768C31.9999 31.0459 29.0375 34 25.408 34H22.4047L22.3775 33.9997C20.7085 33.9604 19.3565 32.5886 19.3568 30.8861C19.3568 30.886 19.3568 30.8862 19.3568 30.8861V26.0213C19.3568 25.4482 18.8903 24.9633 18.29 24.9633H13.7896C13.1937 24.969 12.7332 25.4519 12.7332 26.0213V30.8711C12.7332 30.9878 12.7165 31.1006 12.6855 31.2072C12.5186 32.786 11.1891 34 9.59522 34H6.59184C2.96239 34 0 31.0459 0 27.3768V13.5841C0.0150801 12.0377 0.737003 10.588 1.95155 9.64891L12.1717 1.3403ZM10.3917 30.603V26.0214C10.3917 26.0214 10.3917 26.0214 10.3917 26.0214C10.3917 24.1248 11.9148 22.6037 13.7772 22.5912L13.7849 22.5911L18.29 22.5912C20.1612 22.5912 21.6983 24.1157 21.6983 26.0213V30.8861C21.6982 31.2749 22.0078 31.6126 22.4212 31.6279H25.408C27.7666 31.6279 29.6584 29.7134 29.6584 27.3768V13.5896C29.6452 12.7777 29.2642 12.0119 28.6169 11.5111L28.5975 11.4958L18.3287 3.19926C18.3283 3.19892 18.3278 3.19858 18.3274 3.19825C16.9549 2.09706 15.0016 2.09671 13.6287 3.1972L3.40514 11.5086L3.37947 11.5289C2.73134 12.0264 2.35098 12.7917 2.34146 13.6022V27.3768C2.34146 29.7134 4.23329 31.6279 6.59184 31.6279H9.59522C10.0297 31.6279 10.3617 31.2778 10.3617 30.8711C10.3617 30.7789 10.3721 30.6891 10.3917 30.603Z" fill="#848484" />
                        </svg>
                        <div class="mt-1">Home</div>
                    </Link>
                </center>
            </div>



            <div class="borderbottom p-3">
                <center>
                    <Link to="/">
                        <svg width="22" height="22" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.2805 19.8018C23.0084 17.7078 24.0997 15.022 24.0997 12.0631C24.0997 5.41703 18.6887 0 12.0499 0C5.41107 0 0 5.41703 0 12.0631C0 18.7093 5.41107 24.1263 12.0499 24.1263C14.96 24.1263 17.6883 23.0793 19.78 21.304L29.147 30.6814C29.3744 30.909 29.6472 31 29.9201 31C30.1929 31 30.4657 30.909 30.6931 30.6814C31.1023 30.2717 31.1023 29.5433 30.6931 29.1336L21.2805 19.8018ZM12.0044 21.9413C6.54786 21.9413 2.13715 17.5257 2.13715 12.0631C2.13715 6.60059 6.54786 2.18502 12.0044 2.18502C17.4609 2.18502 21.8717 6.60059 21.8717 12.0631C21.8717 17.5257 17.4609 21.9413 12.0044 21.9413Z" fill="#848484" />
                        </svg>

                        <div class="mt-1">Search</div>
                    </Link>
                </center>
            </div>



            <div class="borderbottom p-3">
                <center>
                    <Link to="/">
                        <svg width="22" height="22" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 27C15.5465 27.0015 14.6085 26.7651 13.7758 26.3135C4.89194 21.4701 0 15.5039 0 9.51429C0 4.17896 3.83796 0 8.73705 0C10.1958 0.00121801 11.6386 0.295965 12.9746 0.865705C14.3105 1.43544 15.5108 2.26785 16.5 3.31058C17.4892 2.26785 18.6895 1.43544 20.0254 0.865705C21.3614 0.295965 22.8042 0.00121801 24.2629 0C29.162 0 33 4.17896 33 9.51429C33 15.5039 28.1081 21.4701 19.2242 26.3135C18.3914 26.7651 17.4535 27.0014 16.5 27V27ZM8.73705 1.89465C4.86662 1.89465 1.94821 5.17049 1.94821 9.51429C1.94821 14.7884 6.48687 20.1673 14.7278 24.6601C15.2698 24.9534 15.8798 25.1073 16.5 25.1073C17.1202 25.1073 17.7302 24.9534 18.2722 24.6601C26.5131 20.1673 31.0518 14.7884 31.0518 9.51429C31.0518 5.17049 28.1334 1.89465 24.2629 1.89465C22.9096 1.89895 21.5762 2.21156 20.3695 2.80742C19.1628 3.40328 18.1165 4.26581 17.3144 5.32585C17.227 5.45804 17.1063 5.56627 16.9637 5.64023C16.8212 5.71418 16.6615 5.75141 16.5 5.74836C16.3398 5.74807 16.1821 5.70936 16.041 5.63567C15.8999 5.56197 15.7796 5.45556 15.6908 5.32585C14.8882 4.26513 13.841 3.40218 12.6334 2.80629C11.4257 2.2104 10.0912 1.89816 8.73705 1.89465V1.89465Z" fill="#848484" />
                        </svg>

                        <div class="mt-1">Favorites</div>
                    </Link>
                </center>
            </div>


            <div class="borderbottom p-3">
                <center>
                    <Link to="/my-episods">
                        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3551 16.1776C22.9327 14.6666 24.7107 11.9109 24.7107 8.7109C24.7107 3.91088 20.7997 0 15.9999 0C11.2001 0 7.28919 3.91103 7.28919 8.7109C7.28919 11.9109 9.06684 14.6666 11.6448 16.1776C5.06659 17.9556 0.177521 23.911 0 31.111C0 31.3777 0.0889892 31.5554 0.266663 31.7333C0.444336 31.911 0.622315 32 0.888978 32H31.111C31.3777 32 31.5554 31.911 31.7333 31.7333C31.911 31.5557 32 31.289 32 31.111C31.822 23.911 26.9331 17.9559 20.3552 16.1776H20.3551ZM9.06608 8.7109C9.06608 4.88856 12.177 1.77753 15.9993 1.77753C19.8216 1.77753 22.9325 4.88856 22.9325 8.7109C22.9325 12.5332 19.8216 15.6443 15.9993 15.6443C12.177 15.5556 9.06608 12.4443 9.06608 8.7109ZM1.86618 30.2226C2.4885 22.9336 8.53275 17.3334 15.9993 17.3334C23.4659 17.3334 29.51 22.9334 30.1324 30.2226H1.86618Z" fill="#848484" />
                        </svg>

                        <div class="mt-1">My Account</div>
                    </Link>
                </center>
            </div>


            <div class="borderbottom p-3">
                <center>
                    <Link to="/edit-podcast">
                        <svg width="22" height="22" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3925 0.500275C18.6113 0.499915 19.7784 0.991466 20.628 1.863C21.4707 2.72748 21.9298 3.8928 21.9031 5.09729C21.9098 5.41191 21.9979 5.71958 22.1591 5.99039L22.1625 5.99613C22.425 6.44259 22.8548 6.76659 23.3572 6.89666C23.8595 7.02673 24.3931 6.9522 24.8403 6.68951L24.8534 6.68177C27.0111 5.44885 29.7624 6.19017 31.0039 8.33889C31.0039 8.33891 31.0039 8.33886 31.0039 8.33889L32.0581 10.1632C32.0856 10.2108 32.1099 10.26 32.1309 10.3104C33.2568 12.4313 32.5126 15.075 30.4206 16.2952L30.4107 16.301C30.1162 16.4692 29.872 16.7126 29.7033 17.0063L29.6987 17.0144C29.4368 17.4626 29.3649 17.9964 29.499 18.4976C29.633 18.9989 29.9618 19.4261 30.4127 19.6848C31.4497 20.2797 32.2061 21.2624 32.5144 22.4152C32.8226 23.5679 32.6573 24.7957 32.0551 25.8266L32.0468 25.8407L30.9346 27.6891C29.684 29.8231 26.94 30.5512 24.791 29.3179C24.5044 29.1549 24.1823 29.0639 23.8527 29.0529C23.3361 29.0541 22.8408 29.2592 22.4753 29.6237C22.1064 29.9915 21.9004 30.4911 21.9029 31.0112L21.9029 31.0234C21.8911 33.4991 19.8751 35.4997 17.3925 35.4997H15.2686C12.7803 35.4997 10.7626 33.4902 10.7583 31.0098C10.7541 30.6902 10.6657 30.3773 10.5021 30.1024L10.4918 30.0849C10.235 29.6374 9.80971 29.3105 9.3102 29.1772C8.8107 29.0439 8.27849 29.1151 7.83187 29.375L7.8129 29.386C6.76613 29.9712 5.52859 30.1161 4.3743 29.7889C3.22428 29.463 2.25126 28.6951 1.66882 27.6543L0.604787 25.8243L0.603456 25.822C-0.636285 23.6795 0.098724 20.9405 2.2458 19.7018C2.85528 19.3509 3.2317 18.7018 3.2317 18C3.2317 17.2982 2.85625 16.6497 2.24677 16.2988L2.24318 16.2967C0.0962773 15.0513 -0.636938 12.3093 0.603053 10.1632L0.618453 10.1373L1.74293 8.29394C2.9883 6.15603 5.73227 5.42069 7.88523 6.65093L7.90209 6.66057C8.1774 6.82352 8.49065 6.91171 8.81069 6.91615C9.8814 6.91277 10.7532 6.05684 10.7738 4.98966C10.7719 3.80237 11.2425 2.66259 12.0827 1.82076C12.9262 0.975466 14.0728 0.500275 15.2686 0.500275H17.3925C17.3927 0.500275 17.3924 0.500275 17.3925 0.500275ZM18.8063 3.62893C18.4352 3.24824 17.9254 3.03356 17.3931 3.03378L15.2686 3.03378C14.7487 3.03378 14.2502 3.2404 13.8834 3.60791C13.5166 3.97544 13.3118 4.47356 13.3143 4.99207L13.3142 5.01634C13.2788 7.47521 11.2698 9.44992 8.80385 9.44967L8.79078 9.44967C8.02505 9.44173 7.27492 9.23326 6.61547 8.84533C5.67414 8.3122 4.47695 8.63663 3.93603 9.57286L3.92062 9.59881L2.79773 11.4396C2.26539 12.3751 2.58681 13.5651 3.52062 14.1068L2.8819 15.2017L3.51702 14.1047C4.91254 14.9082 5.77222 16.393 5.77222 18C5.77222 19.6069 4.91254 21.0918 3.51702 21.8953C3.5167 21.8955 3.51734 21.8951 3.51702 21.8953C2.58465 22.4339 2.26535 23.6235 2.80319 24.5545L3.87228 26.3932L3.88443 26.4146C4.13847 26.8717 4.56471 27.209 5.06884 27.3519C5.57015 27.494 6.10737 27.4322 6.5629 27.1802C6.55909 27.1824 6.55529 27.1846 6.55149 27.1868L7.19167 28.2809L6.57055 27.1759C6.568 27.1773 6.56545 27.1787 6.5629 27.1802C7.59238 26.5852 8.81716 26.423 9.96695 26.7298C11.1177 27.0369 12.0982 27.7884 12.692 28.818C12.6903 28.8151 12.6886 28.8122 12.6868 28.8093L11.5945 29.4558L12.6971 28.8268C12.6954 28.8239 12.6937 28.8209 12.692 28.818C13.0815 29.4759 13.2908 30.2245 13.2988 30.9887L13.2989 31.0018C13.2989 32.0867 14.1807 32.9662 15.2686 32.9662H17.3925C18.4752 32.9662 19.3545 32.0951 19.3623 31.0161C19.3624 31.0185 19.3624 31.021 19.3624 31.0234L20.6326 31.0173L19.3624 31.0112C19.3624 31.0129 19.3624 31.0145 19.3623 31.0161C19.3585 29.8224 19.8323 28.6764 20.6788 27.8322C21.5271 26.9863 22.6792 26.5137 23.8788 26.5194L23.9067 26.5199C24.6609 26.54 25.3983 26.7459 26.0533 27.1193L26.0572 27.1215C26.997 27.6615 28.1979 27.3422 28.7433 26.4071L28.752 26.3923L29.8635 24.545C29.8623 24.5471 29.8611 24.5491 29.8599 24.5512L30.9575 25.1889L29.8683 24.5371L29.8635 24.545C30.1224 24.0981 30.193 23.5669 30.0596 23.068C29.9256 22.5667 29.5967 22.1395 29.1458 21.8808C28.1088 21.2859 27.3525 20.3032 27.0442 19.1504C26.7364 17.9992 26.9008 16.7731 27.5011 15.7431C27.5004 15.7444 27.4996 15.7458 27.4988 15.7471L28.6011 16.3767L27.5035 15.739C27.5027 15.7404 27.5019 15.7417 27.5011 15.7431C27.8932 15.0622 28.4594 14.4973 29.1419 14.106C29.1406 14.1068 29.1393 14.1075 29.138 14.1083L29.7793 15.2017L29.148 14.1025C29.1459 14.1037 29.1439 14.1048 29.1419 14.106C30.0709 13.5613 30.3887 12.3728 29.8543 11.439C29.8319 11.3999 29.8117 11.3598 29.7937 11.3188L29.8569 11.4281L30.9575 10.7957H29.6872V10.8111C29.6872 10.9863 29.7237 11.1591 29.7937 11.3188L28.8027 9.60386C28.2615 8.66717 27.0634 8.3428 26.1218 8.87704C26.1245 8.8755 26.1271 8.87395 26.1298 8.8724L25.485 7.78096L26.1165 8.88006C26.1183 8.87905 26.1201 8.87804 26.1218 8.87704C25.095 9.47747 23.8711 9.64725 22.7187 9.34885C21.5644 9.04998 20.5766 8.30593 19.9726 7.28058C19.9732 7.28153 19.9738 7.28249 19.9743 7.28345L21.0667 6.63692L19.9709 7.2777C19.9715 7.27866 19.9721 7.27962 19.9726 7.28058C19.5809 6.62121 19.3704 5.87048 19.3624 5.10408C19.3623 5.08757 19.3624 5.07106 19.3629 5.05455C19.3782 4.52387 19.1774 4.00961 18.8063 3.62893Z" fill="#848484" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3328 14.7509C14.5383 14.7509 13.0836 16.2056 13.0836 18C13.0836 19.7944 14.5383 21.2491 16.3328 21.2491C18.1272 21.2491 19.5819 19.7944 19.5819 18C19.5819 16.2056 18.1272 14.7509 16.3328 14.7509ZM10.4995 18C10.4995 14.7784 13.1111 12.1667 16.3328 12.1667C19.5544 12.1667 22.166 14.7784 22.166 18C22.166 21.2216 19.5544 23.8332 16.3328 23.8332C13.1111 23.8332 10.4995 21.2216 10.4995 18Z" fill="#848484" />
                        </svg>


                        <div class="mt-1">Settings</div>
                    </Link>
                </center>
            </div>
        </div>

    );
};

export default Menu;