export default function Header () {
    return (
        <section className="header-section padding">
        <div className="header-between">
            <div className="header-contacts">
                <p className="margin-right: 3rem">
                    Call Us: xxxxx xxxxxxxxxx
                </p>
                <p>Email Us:contact@mydomain.com</p>
            </div>
            <div className="header-contacts-search">
                <form className="search" action="#">
                    <ion-icon
                        className="search-icon"
                        name="search-outline"
                    ></ion-icon>
                    <input className="search" type="search" />
                </form>
            </div>
        </div>
    </section>
    )
}