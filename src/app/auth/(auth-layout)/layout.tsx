import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <h1>auth layout for login and register</h1>
        {children}
      </div>
    </>
  );
}

export default AuthLayout;
