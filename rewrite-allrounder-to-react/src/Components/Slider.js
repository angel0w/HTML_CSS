export default function Slider() {
    return (
        <section className="slider padding">
            <div className="slider-cont">
                <div className="parrent-arrow">
                    <div className="slider-container">
                        <p className="slider-container-p">1950 x 380px</p>

                        <ion-icon
                            className="arrow-icon left-arrow"
                            name="chevron-back-outline"
                        ></ion-icon>

                        <ion-icon
                            className="arrow-icon right-arrow"
                            name="chevron-forward-outline"
                        ></ion-icon>
                    </div>
                </div>
            </div>
        </section>
    );
}
