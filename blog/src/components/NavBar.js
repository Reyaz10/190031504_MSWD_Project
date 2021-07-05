import "./navbar.css";

const navbar = () => {
    return (
        <div class="navbar">
        <div class="wrapper">
        <div class="logo">BLOG</div>

        
        <ul class="nav-area">
         <li><a href="#Home">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#contactme">Contact Me</a></li>
       </ul>
       </div>
       </div>
    );
}

export default navbar
