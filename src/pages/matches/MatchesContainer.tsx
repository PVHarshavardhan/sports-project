import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMatchesDispatch } from "../../context/matches/context";
import { fetchMatches } from "../../context/matches/actions";

const MatchesContainer = () => {
    const MatchesDispatch = useMatchesDispatch();
    useEffect(() => {
      fetchMatches(MatchesDispatch);
      
    }, [MatchesDispatch]);
    return <Outlet />;
  };

export default MatchesContainer;