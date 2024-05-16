import { useEffect } from "react";
import { fetchArticles } from "../../context/articles/actions";
import { Outlet } from "react-router-dom";
import { useMatchesDispatch } from "../../context/matches/context";

const MatchesContainer = () => {
    const MatchesDispatch = useMatchesDispatch();
    useEffect(() => {
      fetchArticles(MatchesDispatch);
      
    }, [MatchesDispatch]);
    return <Outlet />;
  };

export default MatchesContainer;