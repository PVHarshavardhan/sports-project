import { useEffect } from "react";
import { useArticlesDispatch } from "../../context/articles/context";
import { fetchArticles } from "../../context/articles/actions";
import { Outlet } from "react-router-dom";

const ArticlesContainer = () => {
    const articleDispatch = useArticlesDispatch();
    useEffect(() => {
      fetchArticles(articleDispatch);
      
    }, [articleDispatch]);
    return <Outlet />;
  };

export default ArticlesContainer;