export default function Nav() {
    return (
        <nav className="nav padding">
            <div className="nav-cont">
                <div className="navi-container">
                    <div className="menu-btn active">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="logo">
                        <h1>
                            <span>A</span>llrounder
                        </h1>
                        <p>Free PSD Wensite Template</p>
                    </div>
                    <div className="navigation">
                        <ul className="navigationn active">
                            <div className="navigation-boxs">
                                <li>
                                    <a href="#" className="active">
                                        Homepage
                                    </a>
                                </li>
                                <p>test text here</p>
                            </div>
                            <div className="navigation-boxs">
                                <li>
                                    <a href="#">Style demo</a>
                                </li>
                                <p>test text here</p>
                            </div>
                            <div className="navigation-boxs">
                                <li>
                                    <a href="#">Full width</a>
                                </li>
                                <p>test text here</p>
                            </div>
                            <div className="navigation-boxs">
                                <li>
                                    <a href="#">Portfolio</a>
                                </li>
                                <p>test text here</p>
                            </div>
                            <div className="navigation-boxs">
                                <li>
                                    <a href="#">Gallery</a>
                                </li>
                                <p>test text here</p>
                            </div>
                            <div className="navigation-boxs">
                                <li>
                                    <a href="#">Dropdown</a>
                                </li>
                                <p>test text here</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
