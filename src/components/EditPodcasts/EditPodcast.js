import BreadCrumb from "../Global/BreadCrumb";
import Menu from "../Global/Menu";
import changeImage from '../../assets/images/changeImage.png';
const EditPodcast = () => {


    return(
        <div class="col-md-12 fsidemenu">
            <div class="container-fluid">
                <div class="row">
                    <Menu />
                    <div class="col-md-11 p-0">
                        <BreadCrumb heading={"Edit Podcasts"} firstLink={"Home"} secondLink={"Edit Podcasts"} />
                        {/* gradient__bg */}
                        <div class="container pt-2">
                               <div className="row">
                                <div className="col-md-4 change-image">
                                    <div className="">
                                        <img className="change-img" src={changeImage} alt=""></img>
                                        <button className="mt-2 change-image-btn">Change Cover</button>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                <form class="row myform">
                                    <div class="form-group col-md-12">
                                        <label>Podcast Title</label>
                                        <input type="text" name="" placeholder="Enter Podcast Title" class="form-control mt-2 textfill" />
                                    </div>

                                    <div class="form-group col-md-12 mt-3">
                                        <label>Podcast Description</label>
                                        <textarea rows="8" name="" placeholder="Enter Description" class="form-control mt-2"></textarea>
                                    </div>

                                    <div class="form-group row mt-4 audio-area">
                                        <div className="col-md-8">
                                            <div>
                                                <span className="pe-2">
                                                    <svg width="16" height="16" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M28 15.6622V16.3759C27.9979 17.0554 27.6406 17.6841 27.0582 18.0328L4.27636 31.3136C2.90182 32.1293 2.18909 32.1293 1.57818 31.7724L0.941818 31.4155C0.374678 31.0764 0.0195588 30.4708 0 29.8096V2.22848C0.00205851 1.54899 0.359446 0.920256 0.941818 0.571574L1.57818 0.214701C2.18909 -0.142171 2.90182 -0.142171 4.68364 0.902955L27.0582 14.0053C27.6406 14.354 27.9979 14.9827 28 15.6622Z" fill="#222222"/>
                                                    </svg>
                                                </span>
                                                <span>
                                                  My Favorite Jhon Sina hits
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <button className="change-audio">
                                                <span className="pe-2">
                                                <svg width="20" height="20" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8197 25.456C21.8197 29.8749 18.2382 33.4567 13.8192 33.4567C9.40164 33.4567 5.81846 29.8729 5.81846 25.4577V7.99906C5.81846 3.58379 9.40164 0 13.8192 0C18.2382 0 21.8197 3.58181 21.8197 8.00043V25.456ZM20.3651 7.99991C20.3651 4.38458 17.4348 1.45407 13.8192 1.45407C10.2053 1.45407 7.27304 4.38664 7.27304 7.99863V25.4572C7.27304 29.0689 10.2053 32.0015 13.8192 32.0015C17.4349 32.0015 20.3651 29.0712 20.3651 25.4556V7.99991ZM38.548 28.6662V36.3656C38.548 36.7674 38.2222 37.0928 37.8207 37.0928C37.4189 37.0928 37.0931 36.7674 37.0931 36.3656V28.6662L34.6983 31.0613C34.4143 31.3452 33.9536 31.3452 33.6696 31.0613C33.3857 30.7773 33.3857 30.3166 33.6696 30.0326L37.3064 26.3962C37.5903 26.1119 38.0508 26.1119 38.3347 26.3962L41.9714 30.0326C42.2554 30.3166 42.2554 30.7773 41.9714 31.0613C41.6875 31.3452 41.2268 31.3452 40.9428 31.0613L38.548 28.6662ZM31.2745 42.1842C30.873 42.1842 30.5472 41.8588 30.5472 41.4569C30.5472 41.0551 30.873 40.7297 31.2745 40.7297H44.3665C44.768 40.7297 45.0938 41.0551 45.0938 41.4569C45.0938 41.8588 44.768 42.1842 44.3665 42.1842H31.2745ZM13.0916 46.5482V39.2751H12.3643C5.53649 39.2751 0 33.7408 0 26.9177C0 26.5158 0.325805 26.1904 0.727283 26.1904C1.1291 26.1904 1.45457 26.5158 1.45457 26.9177C1.45457 32.9378 6.33993 37.8204 12.3642 37.8204H15.2736C21.3028 37.8204 26.1832 32.941 26.1832 26.9177C26.1832 26.5158 26.5087 26.1904 26.9105 26.1904C27.312 26.1904 27.6378 26.5158 27.6378 26.9177C27.6378 33.7445 22.1058 39.2751 15.2735 39.2751H14.5462V46.5482H21.092C21.4935 46.5482 21.8193 46.8737 21.8193 47.2755C21.8193 47.6773 21.4935 48.0028 21.092 48.0028H6.54535C6.14387 48.0028 5.81806 47.6773 5.81806 47.2755C5.81806 46.8737 6.14387 46.5482 6.54535 46.5482H13.0916Z" fill="white"/>
                                                </svg>
                                                </span>
                                                <span>
                                                Change Audio
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-md-12 mt-4">
                                        <button type="submit" class="mybtn">Update</button>
                                        
                                    </div>

                                </form>
                                </div>
                               </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPodcast;