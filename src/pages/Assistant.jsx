import { useState, useRef } from "react";
import { Bot, MessageCircleCode, Search, SendIcon, User, Zap } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const Assistant = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const textareaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        setDisabled(true);
        setIsStreaming(true);

        setMessages((prev) => [...prev, { text: message, isUser: true }]);

        let botMessage = "";
        setMessages((prev) => [...prev, { text: "", isUser: false }]);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let done = false;

            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                if (value) {
                    const chunk = decoder.decode(value);
                    botMessage += chunk;
                    setMessages((prev) =>
                        prev.map((msg, idx) =>
                            idx === prev.length - 1 ? { ...msg, text: botMessage } : msg
                        )
                    );
                }
            }
        } catch (err) {
            setMessages((prev) => [
                ...prev.slice(0, -1),
                { text: "Error: " + err.message, isUser: false },
            ]);
        } finally {
            setIsStreaming(false);
            setDisabled(false);
            setMessage("");
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white border-b border-gray-200 p-4 md:p-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mt-4 flex justify-between items-center">
                        <p className="text-gray-600 mt-2">Powered by Google Gemini</p>
                        <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg" alt="Gemini" className="w-8 h-8" />
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-white overflow-y-auto px-4 py-6">
                <div className="max-w-4xl mx-auto">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex gap-3 ${msg.isUser ? "justify-end" : "justify-start"} mb-4`}
                        >
                            {!msg.isUser && (
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                        <Bot className="h-5 w-5" />
                                    </div>
                                </div>
                            )}
                            <div
                                className={`max-w-[80%] ${
                                    msg.isUser
                                        ? "bg-blue-600 text-white"
                                        : "bg-white border border-gray-200"
                                } rounded-lg px-4 py-3`}
                            >
                                <div className="prose prose-sm">
                                    {msg.text}
                                    {isStreaming && idx === messages.length - 1 && !msg.isUser && (
                                        <span className="inline-block ml-1 w-2 h-4 bg-gray-400 animate-pulse"></span>
                                    )}
                                </div>
                            </div>
                            {msg.isUser && (
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                                        <User className="h-5 w-5" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white border-t border-gray-200 p-4 md:p-6">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
                        <div className="flex-1 relative border border-gray-300 rounded-full flex items-center px-2">
                            <textarea
                                ref={textareaRef}
                                value={message}
                                placeholder="Type your message..."
                                className="w-full py-3 px-4 focus:outline-none resize-none"
                                rows={1}
                                disabled={disabled}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit(e);
                                    }
                                }}
                            />
                            <button
                                type="submit"
                                className={`p-2 rounded-full ${
                                    !message.trim() || disabled
                                        ? "bg-gray-500 text-white"
                                        : "bg-blue-500 text-white hover:bg-blue-700"
                                } flex items-center justify-center`}
                                disabled={!message.trim() || disabled}
                            >
                                <SendIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </form>
                    <div className="text-xs text-center mt-2 text-gray-500">
                        I'm an AI still under development. My responses may not always be perfect. Please use your best judgment.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assistant;