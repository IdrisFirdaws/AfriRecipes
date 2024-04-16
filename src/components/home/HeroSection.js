import CustomImage from "./CustomImage"
import { Link } from "react-router-dom"

export default function HeroSection(){
    const images =[
        "/images/gallery/amala.jpeg",
        "/images/gallery/efo.jpeg",
        "/images/gallery/JCSE.jpeg",
        "/images/gallery/oha2.jpeg",
        "/images/gallery/amala2.jpeg",
        "/images/gallery/JPCS.jpeg",
        "/images/gallery/white.jpeg",
        "/images/gallery/ogbono3.jpeg",
        "/images/gallery/efo3.jpeg",
        "/images/gallery/yam.jpeg",
        "/images/gallery/egusi.jpeg",
        "/images/gallery/noodle.jpeg",
    ].sort(() => Math.random() -0.5)

    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What we do here?</h1>
                <p className="detail">Lorem ipsum dolor sit amet. Aut consequatur repellendus eos rerum galisum non aliquid molestiae et maiores veritatis quo maxime voluptatem vel error possimus. Eos magni exercitationem At provident repellat et ipsa velit ea distinctio quia qui mollitia voluptate ad nihil.</p>
                <Link to="/recipes">
                <button className="btn">Explore</button>
                </Link>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgsrc={src} pt={"85%"} />
                )) }
            </div>
        </div>
    )
}