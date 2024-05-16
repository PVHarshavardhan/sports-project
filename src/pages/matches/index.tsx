import { Suspense } from "react";
import MatchesList from "./MatchesList";
// import ErrorBoundary from "../../components/ErrorBoundary";

const Matches = () => {
  return (
    <>
       <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MatchesList />
        </Suspense>
      
    </>
  );
};


export default Matches;