import React from "react";

const Layout= ({children} : { children: React.ReactNode }) =>{
    return(
        <div>
            <p>DASHBOARD</p>
            {children}
        </div>
    )
}

export default Layout;