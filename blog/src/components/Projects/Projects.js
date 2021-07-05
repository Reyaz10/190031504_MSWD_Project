import "./projects.css";

export default function Pro() {
    const data = [
        {
          id: 1,
          name: "Online Doctor Appointment",
          
          img1:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Ecomerce Site",
          
          img1:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Student Blog",
          
          img1:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    
    return (
        <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container1">
        {data.map((d) => (
          <div className={d.featured1 ? "card featured" : "card"}>
            <div className="top1">
              <img 
                className="user1"
                src={d.img}
                alt=""
              />
              <img className="right1" src={d.icon} alt="" />
            </div>
            <div className="center1">
              {d.desc}
            </div>
            <div className="bottom1">
              <h3>{d.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
