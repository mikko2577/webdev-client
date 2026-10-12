import "./index.css";
import TailwindSpacing from "./TailwindSpacing";
import TailwindTypography from "./TailwindTypography";
import TailwindBackgroundColors from "./TailwindBackgroundColors.tsx";
import TailwindResponsiveBreakpoint from "./TailwindResponsiveBreakpoint.tsx";
import TailwindResponsiveShowHide from "./TailwindResponsiveShowHide.tsx";
import TailwindResponsiveFlex from "./TailwindResponsiveFlex.tsx";
import TailwindResponsiveGrid from "./TailwindResponsiveGrid.tsx";
import TailwindResponsiveSpacingText from "./TailwindResponsiveSpacingText.tsx";
import TailwindResponsiveDesign from "./TailwindResponsiveDesign.tsx";
import TailwindFilters from "./TailwindFilters.tsx";
import TailwindGrids from "./TailwindGrids.tsx";


export default function TailwindLab() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Tailwind CSS</h1>
      <TailwindSpacing />
      <hr className="my-8" />
      <TailwindTypography />
      <hr className="my-8" />
      <TailwindBackgroundColors />
      <hr className="my-8" />
      <TailwindResponsiveBreakpoint />
      <hr className="my-8" />
      <TailwindResponsiveShowHide />
      <hr className="my-8" />
      <TailwindResponsiveFlex />
      <hr className="my-8" />
      <TailwindResponsiveGrid />
      <hr className="my-8" />
      <TailwindResponsiveSpacingText />
      <hr className="my-8" />
      <TailwindResponsiveDesign />
      <hr className="my-8" />
      <TailwindFilters />
      <hr className="my-8" />
      <TailwindGrids />
    </div>
  );
}