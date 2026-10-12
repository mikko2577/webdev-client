export default function TailwindSpacing() {
  return (
    <div>
      <h2 className="text-3xl">Margin</h2>
      {/*mb: margin bottom / p: pixel*/}
      <div className="bg-blue-600 mb-4 p-4">
        This div has a bottom margin of 4.
      </div>
      {/*ms: margin south / me: margin east*/}
      <div className="bg-blue-200 ms-4 me-8 p-4">
        This div has a start margin of 4 and an end margin of 8.
      </div>
      <h2 className="text-3xl mt-8">Padding</h2>
      {/*ps: padding south/ pt: margin top/ pb: padding bottom*/}
      <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
        This div has starting padding of 2, top padding of 4, and bottom padding of 8.
      </div>
      <div className="bg-green-200 p-6">This div has padding all around of 6.
      </div>
      <div id="wd-ai-spacing" className="bg-purple-200 mt-6 ps-8 pb-4">
        This div has a top margin of 6, a start padding of 8, and a bottom padding of 4.
      </div>
      <div className="bg-pink-200 p-8 mt-8 ps-4 pb-1">
          My first tailwind spacing has a padding of 8, 
          margin top of 8, padding south of 4 and padding bottom of 1.
      </div>
    </div>
  );
}