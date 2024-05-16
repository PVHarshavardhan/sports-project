import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ArticlesContainer = () => {
    const articleDispatch = useArticlesDispatch();
    useEffect(() => {
      fetchArticles(articleDispatch);
      
    }, [articleDispatch]);
    return <Outlet />;
  };

export default ArticlesContainer;