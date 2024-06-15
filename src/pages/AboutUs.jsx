/* 
page about the store and the club
*/
import React from "react";

export default function AboutUs() {
  const aboutCompany = [
    {
      title: "Mission",
      description:
        "To provide fans with high-quality merchandise and apparel that celebrate their favorite teams and enhance their fan experience.",
    },
    {
      title: "Vision",
      description:
        "To become the go-to destination for sports fans worldwide, offering a wide range of products and creating memorable experiences.",
    },
    {
      title: "Goals",
      description:
        "To continually innovate and expand our product offerings, foster strong relationships with fans and partners, and contribute positively to the sports community.",
    },
  ];
  return (
    <main>
      <div className="p-8 bg-offwhite">
        <div>
          <h1 className="font-bold text-center">About Us</h1>
          <div>
            {aboutCompany.map((company) => (
              <div key={company.title} className="text-greyyy">
                <h1>{company.title}</h1>
                <p>{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

/*
- Create js object for storing mission, vission and goals of the company each with it's own description

- How to structure the about us section to into the website on phone.
- For large screens it should display in 3 columns, 1 column for mission , 2nd for vission and third 3rd for goals.
*/
