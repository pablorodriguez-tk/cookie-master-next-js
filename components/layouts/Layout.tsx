import { FC } from "react";
import { Navbar } from "../ui";

export const Layout: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
