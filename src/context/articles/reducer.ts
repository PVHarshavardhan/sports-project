interface Sport {
    id:number;
    name:string;
}

interface Teams {
    id:number;
    name:string;
}

interface Articles {
    id: number;
    title:string;
    thumbnail:string;
    date:string;
    sport:Sport;
    teams:Teams[];
    summary:string;
    isRunning:false;
}

export interface ArticlesState {
    articles: Articles[];
    isLoading:boolean;
    isError:boolean;
    errorMessage:string;
}

export const initialState: ArticlesState ={
    articles:[],
    isLoading:false,
    isError:false,
    errorMessage: ''
}


export type ArticlesActions = 
| { type: 'FETCH_ARTICLES_REQUEST' }
| { type: 'FETCH_ARTICLES_SUCCESS'; payload: Articles[] }
| { type: 'FETCH_ARTICLES_FAILURE'; payload: string }

export const reducer = (state: ArticlesState = initialState, action: ArticlesActions) : ArticlesState => {
    switch (action.type) {
        case "FETCH_ARTICLES_REQUEST":
            return {
                ...state,
                isLoading: true
            };
        case "FETCH_ARTICLES_SUCCESS":
            return {
                ...state,
                isLoading: false,
                articles:action.payload,
            }
        case "FETCH_ARTICLES_FAILURE":
            return {
                ...state,
                isLoading:false,
                isError:true,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}