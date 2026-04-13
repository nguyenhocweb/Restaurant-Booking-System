const LoadingAi = () => {
    return (
        <div className="flex justify-start">
            <div className="px-4 py-2 rounded-2xl bg-gray-200 text-sm flex items-center gap-2">

                {/* dots animation */}
                <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>

                <span className="text-gray-500">Đang trả lời...</span>
            </div>
        </div>
    )
}
export default LoadingAi