import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FolderIcon, HomeIcon, MessageSquareQuoteIcon, UserIcon, MenuIcon, XIcon, MessageCircleCode, PanelRightOpen } from "lucide-react";

const Index = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setIsSidebarOpen(!mobile);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        {
            name: 'Home',
            path: '/',
            icon: <HomeIcon size={20} />
        },
        {
            name: 'Chat',
            path: '/chat',
            icon: <MessageCircleCode size={20} />

        },
        {
            name: 'About',
            path: '/about',
            icon: <UserIcon size={20} />
        },
        {
            name: 'Portfolio',
            path: '/portfolio',
            icon: <FolderIcon size={20} />
        },
        // {
        //     name: 'Testimonials',
        //     path: '/testimonials',
        //     icon: <MessageSquareQuoteIcon size={20} />
        // }
    ];

    const SidebarContent = () => (
        <>
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <img src="/favicon.png" alt="Developer Zwide" className="w-8 h-8" />
                <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-white">
                    <PanelRightOpen size={22} />
                </button>
            </div>
            <nav className="mt-6">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                onClick={() => isMobile && setIsSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-3 hover:bg-gray-700 transition-colors rounded-md m-2 ${isActive ? 'bg-gray-700' : ''}`
                                }
                            >
                                <span className="mr-3">{item.icon}</span>
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="w-full h-[340px] p-4 my-0 overflow-y-auto">
                {/* Scrollable area */}
            </div>
            <div className="absolute bottom-0 w-full p-4">
                <div className="flex items-center space-x-2">
                    <img
                        className="w-10 h-10 rounded-full"
                        src="/zwide.jpeg"
                        alt="Profile"
                    />
                    <div>
                        <p className="font-medium">Bukeka Nxumalo</p>
                        <p className="text-sm text-gray-400">ICT Student</p>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-gray-800 text-white">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden ${isSidebarOpen && isMobile ? 'block' : 'hidden'}`} onClick={() => setIsSidebarOpen(false)}></div>
            <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40 md:hidden ${isSidebarOpen && isMobile ? 'translate-x-0' : '-translate-x-full'}`}>
                <SidebarContent />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 md:hidden">
                    <button onClick={() => setIsSidebarOpen(true)} className="text-white">
                        <MenuIcon size={24} />
                    </button>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Index;