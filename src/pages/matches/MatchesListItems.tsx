/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMatchesState } from "../../context/matches/context";


export default function MatchesListItems() {
    const state : any = useMatchesState();
    const { matches , isLoading, isError, errorMessage } = state;
    console.log("matches");
    if (matches.length == 0 && isLoading) {
        return <span>Loading ...</span>
    }
    if (isError) {
        return <span>{errorMessage }</span>;
    }
    
      return(
        <h1>ha</h1>
      )
}
