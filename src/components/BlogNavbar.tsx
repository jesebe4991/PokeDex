import { Link } from "react-router-dom"

const BlogNavbar = () => {
  return (
    <nav className="border-b-4 text-center  top-0 font-bold w-full text-lg text-black " style={{background: "var(--bg-gradient)"}}>
        <ul>
            <li className="inline-block py-4">
                <Link to="/" className="pl-6 pr-8">
                    Pokemons
                </Link>
            </li>
            <li className="inline-block py-4">
                <Link to="/Blog" className="pl-6 pr-8">
                    Blog
                </Link>
            </li>
            <li className="inline-block py-4">
                <Link to="/about" className="pl-6 pr-8">
                    About
                </Link>
            </li>
            <li className="inline-block py-4">
                <Link to="/article" className="pl-6 pr-8">
                    Article
                </Link>
            </li>
            <li className="inline-block py-4">
                <Link to="/article-list" className="pl-6 pr-8">
                    Articles List
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default BlogNavbar