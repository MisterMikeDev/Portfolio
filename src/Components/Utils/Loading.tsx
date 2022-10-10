export default function Loading() {
    return (
        <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-7 w-7 mx-1 bg-purple-600 rounded-full animate-bounce" />
            <div className="h-7 w-7 mx-1 bg-purple-600 rounded-full animate-bounce-200" />
            <div className="h-7 w-7 mx-1 bg-purple-600 rounded-full animate-bounce-400" />
        </div>
    );
}
