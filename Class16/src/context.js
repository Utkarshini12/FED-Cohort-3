
import { useContext } from "react";
import { createContext, useState } from "react";

// create the context
const AppContext = createContext();

// craete provider for common reusable functionalities
const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const OpenSidebar = () => {
        setIsSidebarOpen(true);
    }
    const CloseSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <AppContext.Provider value={{ isSidebarOpen, OpenSidebar, CloseSidebar }}>
            {children}
        </AppContext.Provider>
    )
}

{/* <AppContext.Consumer></AppContext.Consumer>
                    or
useContext(AppContext) */}

// hook for performing consumer functionality in context
 const useGlobalContext = () => {
    return useContext(AppContext);
}
// Hook returns us : isSidebarOpen, OpenSidebar, CloseSidebar


export { AppContext, AppProvider, useGlobalContext };


