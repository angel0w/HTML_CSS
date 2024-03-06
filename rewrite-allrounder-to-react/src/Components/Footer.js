export default function Footer() {
    return (
        <footer>
            <div className="footer-container padding">
                <div className="about-us">
                    <h3 className="footer-h3">About us</h3>

                    <div className="abouts-us-border">
                        <div className="abouts-us-box">
                            <p>215 x 90px</p>
                        </div>
                    </div>

                    <p className="about-us-p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nunc non diam erat. In fringilla massa ut nisi
                        ullamcorper pellentesuqe. Quisque non luctus sem.
                    </p>
                    <div className="services-heading-view">
                        <a href="#">
                            View More
                            <span className="material-symbols-outlined">
                                double_arrow
                            </span>
                        </a>
                    </div>
                </div>

                <div className="link-block">
                    <h3 className="footer-h3">Link block</h3>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;Lorem Ipsum dolor sit
                        </p>
                    </div>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;Amet consectetur
                        </p>
                    </div>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;Praesent vel sem id
                        </p>
                    </div>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;Curabitur hendrerit est
                        </p>
                    </div>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;Aliquam eget erat nec sapien
                        </p>
                    </div>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;Cras id augue nunc
                        </p>
                    </div>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;In nec justo non
                        </p>
                    </div>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;Vivamus mollis enim ut
                        </p>
                    </div>

                    <div className="link-block-divs">
                        <p>
                            <span className="material-symbols-outlined">
                                double_arrow{' '}
                            </span>
                            &ensp;Curabitur hendrerit est
                        </p>
                    </div>
                </div>

                <div className="from-the-blog">
                    <h3 className="footer-h3">Fron the blog</h3>

                    <div className="from-the-blog-div1">
                        <h3 className="from-the-blog-h3">Post Title</h3>
                        <p className="from-the-blog-h3-span">
                            Friday,6th April 2000
                        </p>

                        <p className="from-the-blog-h3-span-p">
                            Nulla facilisi.Ut fringilla. Suspendisse potenti.
                            Nunc feugiat mi a tellus conse`uat imperdiet.
                        </p>
                        <div className="services-heading-view">
                            <a href="#">
                                View More
                                <span className="material-symbols-outlined">
                                    double_arrow
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="from-the-blog-div2">
                        <h3 className="from-the-blog-h3">Post Title</h3>
                        <p className="from-the-blog-h3-span">
                            Friday,6th April 2000
                        </p>

                        <p className="from-the-blog-h3-span-p">
                            Nulla facilisi.Ut fringilla. Suspendisse potenti.
                            Nunc feugiat mi a tellus conse`uat imperdiet.
                        </p>
                        <div className="services-heading-view">
                            <a href="#">
                                View More
                                <span className="material-symbols-outlined">
                                    double_arrow
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-us">
                    <h3 className="footer-h3">Contact us</h3>
                    <div className="contact-us-contacts">
                        <p>Tel: xxxxx xxxxxxxxxx</p>
                        <p>Fax: xxxxx xxxxxxxxxx</p>
                        <p>
                            Email:
                            <span className="contact-email">
                                contact@mydomain.com
                            </span>
                        </p>
                    </div>
                    <h3 className="footer-h3 h3newsletter">Newsletter</h3>
                    <div className="form">
                        <input
                            id="full-name"
                            type="text"
                            placeholder="Name"
                            name="full-name"
                            required
                        />
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                        />
                        <button className="contact-btn">Submit</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
