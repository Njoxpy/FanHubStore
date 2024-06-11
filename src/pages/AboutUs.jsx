/* 
page about the store and the club
*/
import React from "react";

export default function AboutUs() {
  const aboutCompany = [
    {
      mission:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde incidunt, quod eius explicabo perspiciatis aspernatur illum labore asperiores in magni doloribus quos voluptates optio est rem Atque, harum earum?",
    },
    {
      vission:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde incidunt, quod eius explicabo perspiciatis aspernatur illum labore asperiores in magni doloribus quos voluptates optio est rem Atque, harum earum?",
    },
    {
      goals:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde incidunt, quod eius explicabo perspiciatis aspernatur illum labore asperiores in magni doloribus quos voluptates optio est rem Atque, harum earum?",
    },
  ];
  return (
    <main>
      <div className="p-8 bg-gray">
        <h1 className="font-bold text-center">AboutUs</h1>
        <h2 className="font-bold text-center">About FanHubStore</h2>
        <section className="shadow-lg p-8">
          <h1 className="font-bold p-2">Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde
            incidunt, quod eius explicabo perspiciatis aspernatur illum labore
            asperiores in magni doloribus quos voluptates optio est rem? Atque,
            harum earum?
          </p>
        </section>

        <section className="shadow-lg hover:bg-white p-8">
          <h1 className="font-bold p-2">Vission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsa.
            At, hic! Eius ad nulla quidem, dolor veritatis saepe animi ullam
            odio, dolores quaerat, quam pariatur non accusamus aspernatur nihil.
          </p>
        </section>

        <section className="shadow-lg p-8">
          <h1 className="font-bold p-2">Goals</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsa.
            At, hic! Eius ad nulla quidem, dolor veritatis saepe animi ullam
            odio, dolores quaerat, quam pariatur non accusamus aspernatur nihil.
          </p>
        </section>

        <div>
            <h1 className="font-bold mt-2 p-2">Subscribe To Never Miss New Deals</h1>
            <form action="">
                <input type="email" name="" id="" required placeholder="Enter E-Mail Address" className="w-1/2 p-2 ml-2 border rounded-lg focus:outline-none focus:border-blue shadow"/>
                <button type="submit" className="bg-lightGreen rounded p-2 text-white font-bold ml-2">Subscribe</button>
            </form>
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
