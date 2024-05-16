import { Suspense } from "react";
import ArticlesList from "./ArticlesList";
// import ErrorBoundary from "../../components/ErrorBoundary";

const Articles = () => {
  return (
    <>
       <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ArticlesList />
        </Suspense>
      
    </>
  );
};


export default Articles;