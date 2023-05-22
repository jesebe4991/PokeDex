import { useState, useEffect } from "react";
import BlogNavbar from "../components/BlogNavbar";
import { useParams } from "react-router-dom";
import articleContent from "./article-content"
import { Article } from "../types/types";

const Article = (props: { article: Article }) => {
   const [currentArticle, setCurrentArticle] = useState<Article | undefined>(undefined);
  const {name} = useParams();
  const article = articleContent.find((article) => article.name === name)
  if (!article) return <h1>Articulo no existe</h1>
  return (
    <div>
        <BlogNavbar />
        <div className="mt-4"><h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-600'>
          {article.title}
        </h1></div>
        
    </div>
  )
}

export default Article