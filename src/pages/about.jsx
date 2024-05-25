function About(){
    return <>
        <div class="container-xxl py-5" id="about">
            <div class="container py-5 px-lg-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="text-primary-gradient fw-medium">About Me</h5>
                        <h1 class="mb-4">Looking forward to working in the Web Development Industry</h1>
                        <p class="mb-4">I am a new developer looking to work in the amazing industry that is Web Development. Please take a look at all I have to offer and hopefully I can be the right candidate for this company. I am 29 years old and have experience with Front-end and Back-end. I have also basic experience working with computers and fixing them as well as I have some basic knowledge in some other coding languages like "C" and "Java" which I learn in College. I applied for the UM Web Development Bootcamp because I have always wanted to work with code and in the development industry but did not know how to get my foot in the industry nor did I have the knowledge I wanted to have, and saw the bootcamp as an oportunity to have a foot in the industry and have a future working as a developer.</p>
                        <a onClick={()=> handlePageChange("Contact")} class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Contact Me</a>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow fadeInUp" data-wow-delay="0.5s" src="public\img\WIN_20231130_17_26_41_Pro.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About