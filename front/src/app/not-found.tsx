export default function pageNotFound() {
    return (
        <div>
        <div className="flex justify-center">
        <h1>404 Not found</h1>
        </div>
                <div>
                    <div className="flex justify-center gap-2"> 
                    <div className="w-4 h-4 rounded-full bg-purple animate-bounce"></div>
                    <div className="w-4 h-4 rounded-full bg-purple animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-purple animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
                </div>
    )
}