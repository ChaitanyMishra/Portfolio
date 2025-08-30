import React from "react";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-dvh bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(17,24,39,0.7),transparent)]">
      {children}
    </div>
  );
};

export default AppLayout;

