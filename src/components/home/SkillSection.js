import { Link } from "react-router-dom"

export default function(skills){
const list = [
    "Learn new recipes",
    "Get cooking tips",
    "Experimanet with food",
    "Get ntrition facts",
    "Write your own recipes",
    "Get started"
]

    return(
        <div className="section skills">
            <div className="col gallery">
                <img src="/images/white2.jpeg" alt="" />    
            </div>

            <div className="col typography">
                <h1 className="title">Improve your cooking skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <Link to="/grocery-list">
                <button className="btn">Create your shoping list</button>
                </Link>
            </div>
        </div>
    )
}