import { ReactNode } from "react";
import "./kambaz.css";
import KambazNavigation from "./Navigation";


export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
    {/*<table>
      <tbody>
        <tr>
          <td valign="top" width="200">
            <KambazNavigation />
          </td>
          <td valign="top" width="100%">
            {children}
          </td>
        </tr>
      </tbody>
    </table>*/}
     <div id="wd-kambaz" className="font-sans">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">{children}</div>
    </div>
  </div>
  );
}