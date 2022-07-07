import React from 'react';
import Header from '../Global/Header';
import Menu from '../Global/Menu';
import bg from '../../assets/images/bg.png';
import { Link } from 'react-router-dom';
import BreadCrumb from '../Global/BreadCrumb';
const NewPodcast = () => {
    return (
        <>
            <Header />
            <div class="col-md-12 fsidemenu">
                <div class="container-fluid">
                    <div class="row">
                        <Menu />
                        <div class="col-md-11 p-0">
                            <BreadCrumb heading={"Create New Podcast"} firstLink={"Home"} secondLink={"Create New Podcast"} />


                            <div class="container pt-5">
                                <form class="row myform">
                                    <div class="form-group col-md-12">
                                        <label>Podcast Title</label>
                                        <input type="text" name="" placeholder="Enter Podcast Title" class="form-control mt-2 textfill" />
                                    </div>

                                    <div class="form-group col-md-12 mt-3">
                                        <label>Podcast Description</label>
                                        <textarea rows="8" name="" placeholder="Enter Description" class="form-control mt-2"></textarea>
                                    </div>

                                    <div class="form-group col-md-6 mt-4">
                                        <div class="mybox text-center">
                                            <svg width="40" height="50" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8197 25.456C21.8197 29.8749 18.2382 33.4567 13.8192 33.4567C9.40164 33.4567 5.81846 29.8729 5.81846 25.4577V7.99906C5.81846 3.58379 9.40164 0 13.8192 0C18.2382 0 21.8197 3.58181 21.8197 8.00043V25.456ZM20.3651 7.99991C20.3651 4.38458 17.4348 1.45407 13.8192 1.45407C10.2053 1.45407 7.27304 4.38664 7.27304 7.99863V25.4572C7.27304 29.0689 10.2053 32.0015 13.8192 32.0015C17.4349 32.0015 20.3651 29.0712 20.3651 25.4556V7.99991ZM38.548 28.6662V36.3656C38.548 36.7674 38.2222 37.0928 37.8207 37.0928C37.4189 37.0928 37.0931 36.7674 37.0931 36.3656V28.6662L34.6983 31.0613C34.4143 31.3452 33.9536 31.3452 33.6696 31.0613C33.3857 30.7773 33.3857 30.3166 33.6696 30.0326L37.3064 26.3962C37.5903 26.1119 38.0508 26.1119 38.3347 26.3962L41.9714 30.0326C42.2554 30.3166 42.2554 30.7773 41.9714 31.0613C41.6875 31.3452 41.2268 31.3452 40.9428 31.0613L38.548 28.6662ZM31.2745 42.1842C30.873 42.1842 30.5472 41.8588 30.5472 41.4569C30.5472 41.0551 30.873 40.7297 31.2745 40.7297H44.3665C44.768 40.7297 45.0938 41.0551 45.0938 41.4569C45.0938 41.8588 44.768 42.1842 44.3665 42.1842H31.2745ZM13.0916 46.5482V39.2751H12.3643C5.53649 39.2751 0 33.7408 0 26.9177C0 26.5158 0.325805 26.1904 0.727283 26.1904C1.1291 26.1904 1.45457 26.5158 1.45457 26.9177C1.45457 32.9378 6.33993 37.8204 12.3642 37.8204H15.2736C21.3028 37.8204 26.1832 32.941 26.1832 26.9177C26.1832 26.5158 26.5087 26.1904 26.9105 26.1904C27.312 26.1904 27.6378 26.5158 27.6378 26.9177C27.6378 33.7445 22.1058 39.2751 15.2735 39.2751H14.5462V46.5482H21.092C21.4935 46.5482 21.8193 46.8737 21.8193 47.2755C21.8193 47.6773 21.4935 48.0028 21.092 48.0028H6.54535C6.14387 48.0028 5.81806 47.6773 5.81806 47.2755C5.81806 46.8737 6.14387 46.5482 6.54535 46.5482H13.0916Z" fill="#52A9AD" />
                                            </svg><br />
                                            <span>Audio file</span><br />
                                            <strong>Drag & drop files or <a href onclick={() => {
                                                document.getElementById('upload').click();
                                                return false
                                            }}>Browse</a></strong><br />
                                            <div class="para">Supported formates: MP3</div>

                                        </div>
                                    </div>





                                    <div class="form-group col-md-6 mt-4">
                                        <div class="mybox text-center">
                                            <svg width="50" height="50" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M36.028 14.7459L36.1203 14.7735L36.1243 14.7689C36.5619 14.8482 36.9961 14.5861 37.1247 14.152C38.2963 10.2153 41.9874 7.46516 46.0998 7.46516C46.5867 7.46516 46.9816 7.07028 46.9816 6.58342C46.9816 6.09655 46.5867 5.70168 46.0998 5.70168C41.0457 5.70168 36.7985 9.06677 35.4348 13.6495C35.2956 14.1163 35.5615 14.6068 36.028 14.7459Z" fill="#52A9AD" stroke="#F9FFF9" stroke-width="0.3" />
                                                <path d="M56.3438 42.4384H51.9534C51.5494 42.4384 51.2217 42.1107 51.2217 41.7067C51.2217 41.3027 51.5494 40.9749 51.9534 40.9749H56.3438C62.3956 40.9749 67.3197 36.0509 67.3197 29.999C67.3197 23.9471 62.3956 19.023 56.3438 19.023H56.2382C56.026 19.023 55.8242 18.9311 55.6852 18.7706C55.5462 18.6101 55.4834 18.3974 55.5138 18.1873C55.5791 17.7315 55.612 17.2737 55.612 16.8279C55.612 11.5829 51.3444 7.31531 46.0995 7.31531C44.059 7.31531 42.1131 7.95296 40.4719 9.15978C40.1112 9.42478 39.599 9.30718 39.3905 8.91047C34.7425 0.0596993 22.6023 -1.12887 16.3082 6.57053C13.6568 9.81417 12.615 14.0336 13.4498 18.146C13.5418 18.6002 13.1942 19.0236 12.7327 19.0236H12.4395C6.3876 19.0236 1.46353 23.9477 1.46353 29.9996C1.46353 36.0514 6.3876 40.9755 12.4395 40.9755H16.8298C17.2338 40.9755 17.5615 41.3032 17.5615 41.7072C17.5615 42.1113 17.2338 42.439 16.8298 42.439H12.4395C5.5805 42.439 0 36.8585 0 29.9995C0 23.3329 5.27155 17.8742 11.8651 17.5731C11.2457 13.3066 12.4301 9.00295 15.1751 5.64437C21.9138 -2.5996 34.828 -1.67556 40.2871 7.51707C42.0287 6.42522 44.0215 5.85244 46.0992 5.85244C52.4538 5.85244 57.4892 11.261 57.0486 17.58C63.5813 17.9463 68.7829 23.3763 68.7829 29.999C68.7829 36.8585 63.2024 42.4384 56.3434 42.4384L56.3438 42.4384Z" fill="#52A9AD" />
                                                <path d="M15.85 41.2935C15.85 51.4634 24.1237 59.737 34.2935 59.737C44.4634 59.737 52.737 51.4633 52.737 41.2935C52.737 31.1235 44.4634 22.85 34.2935 22.85C24.1235 22.85 15.85 31.1237 15.85 41.2935ZM17.6138 41.2935C17.6138 32.0966 25.0964 24.6138 34.2935 24.6138C43.4904 24.6138 50.9732 32.0964 50.9732 41.2935C50.9732 50.4904 43.4904 57.9732 34.2935 57.9732C25.0966 57.9732 17.6138 50.4905 17.6138 41.2935Z" fill="#52A9AD" stroke="#F9FFF9" stroke-width="0.3" />
                                                <path d="M33.9428 48.6578C33.9428 49.0364 34.2499 49.3435 34.6285 49.3435C35.0071 49.3435 35.3142 49.0368 35.3142 48.6578V34.7292C35.3142 34.3506 35.0071 34.0435 34.6285 34.0435C34.2498 34.0435 33.9428 34.3506 33.9428 34.7292V48.6578Z" fill="#52A9AD" stroke="#52A9AD" stroke-width="0.3" />
                                                <path d="M34.6281 35.7003L30.8274 39.5009L34.6281 35.7003ZM34.6281 35.7003L38.4289 39.501C38.5626 39.6348 38.7386 39.7018 38.9137 39.7019L34.6281 35.7003ZM29.8576 39.501C30.1254 39.7688 30.5597 39.769 30.8273 39.501L38.9138 39.7019C39.0886 39.7018 39.2647 39.6353 39.3987 39.501C39.6665 39.2331 39.6665 38.7991 39.3986 38.5313L35.113 34.2456C34.8452 33.9778 34.4108 33.9776 34.1432 34.2456C34.1432 34.2456 34.1431 34.2457 34.1431 34.2457L29.8576 38.5313C29.5897 38.7991 29.5897 39.2331 29.8576 39.501Z" fill="#52A9AD" stroke="#52A9AD" stroke-width="0.3" />
                                            </svg>

                                            <br />
                                            <span>Podcast image</span><br />
                                            <strong>Drag & drop files or <a href onclick={() => {
                                                document.getElementById('upload').click();
                                                return false
                                            }}>Browse</a></strong><br />
                                            <div class="para">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</div>



                                        </div>
                                    </div>

                                    <div class="col-md-12 mt-4">
                                        <button type="submit" class="mybtn">Yes</button>
                                        <button type="submit" class="mybtnactive">No</button>
                                        &nbsp;&nbsp;
                                        <div class="mt-4 mt-md-0 d-block d-md-none"></div>
                                        <span class="radioback"><input type="radio" name="name" />&nbsp;Season</span>
                                        <span class="radioback"><input type="radio" name="name" />&nbsp;Episode</span>
                                    </div>

                                </form>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPodcast;