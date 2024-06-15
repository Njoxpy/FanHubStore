import React from "react";

export default function Category() {
  return (
    <main>
      <div className="p-8 bg-gray">
        <h1>Category</h1>
        {/* category 1 */}
        <img src="" alt="Category 1" />
        <h1 className="font-bold cursor-pointer text-black hover:underline">Category 1</h1>
      </div>
    </main>
  );
}

/*
- On mobile view display only 2 category in a time.
- when a user hovers into a certain section create a underline black.
- Download images concerning the following category(technlogy, sports , )
*/