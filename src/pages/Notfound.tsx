const Notfound = () => {
    return(
        <div>
            <h2>404 - Not found</h2>
            <div className="flex items-center justify-center">
            
            <a href="/home" className="flex items-center  justify-center bg-blue-700">
                <button id="backToHomeButton">
                GO TO HOME PAGE
                </button>
                
            </a>
            </div>
        </div>
    )
}
export default Notfound;