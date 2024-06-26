import React from "react";
import ArticlesListItems from "./ArticlesListItems";

const ArticlesList: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ArticlesListItems />
    </div>
  );
};

export default ArticlesList;