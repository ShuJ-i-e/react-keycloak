import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
 const { keycloak, initialized } = useKeycloak();

 return (
   <div>
     <div className="top-0 w-full flex flex-wrap">
       <section className="x-auto">
         <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
           <div className="px-5 xl:px-12 py-6 flex w-full items-center">
             <h1 className="text-3xl font-bold font-heading">
               Keycloak React Integration
             </h1>
             <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
               <li>
                 <a className="hover:text-blue-800" href="/">
                   Home
                 </a>
               </li>
               <li>
                 <a className="hover:text-blue-800" href="/secured">
                   Secured Page
                 </a>
               </li>
             </ul>
             <div className="hidden xl:flex items-center space-x-5">
               <div className="hover:text-gray-200">
                 {!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                   
                 )}
                 {!!keycloak.authenticated && (
                  <button
                    type="button"
                    className="text-blue-800"
                    onClick={() => keycloak.logout()}
                  >
                    Logout
                  </button>
                )}
                    <div>
      <h1>Welcome, {keycloak.authenticated ? keycloak.tokenParsed.preferred_username : 'Guest'}</h1>
      
      {keycloak.authenticated && (
        <div>
        {keycloak.tokenParsed.preferred_username}
        {keycloak.hasRealmRole("admin") && '(admin)'}
        {keycloak.tokenParsed.realm_access.roles[1]}
        <br></br>
        Access Token:
          <textarea
            rows="5"
            cols="50"
            value={keycloak.token}
            readOnly
            placeholder="Token will be displayed here when authenticated"
          />
          <br></br>
          Refresh Token:
          <textarea
            rows="5"
            cols="50"
            value={keycloak.refreshToken}
            readOnly
            placeholder="Token will be displayed here when authenticated"
          />
        </div>
        
      )}
    </div>
               </div>
             </div>
           </div>
         </nav>
       </section>
     </div>
   </div>
 );
};

export default Nav;