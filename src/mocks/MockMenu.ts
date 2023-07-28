import { MenuDetail } from "@/hooks/Menu/useMenu";

export const mockMenu: MenuDetail = {
  sections: [
    {
      id: 1,
      name: "Burgers",
      position: 0,
      visible: 1,
      images: [
        {
          id: 1550,
          image:
            "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png",
        },
      ],
      items: [
        {
          id: 1625701,
          name: "Hard Core",
          description:
            "180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.",
          price: 33.0,
          position: 0,
          visible: 1,
          images: [
            {
              id: 108305,
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png",
            },
          ],
          available: true,
        },
        {
          id: 1625702,
          name: "Smash Brooks",
          description:
            "100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.",
          price: 0.0,
          position: 1000,
          visible: 1,
          modifiers: [
            {
              id: 1101202,
              name: "Choose a size",
              minChoices: 1,
              maxChoices: 1,
              items: [
                {
                  id: 7476054,
                  name: "1 meat",
                  price: 33.0,
                  maxChoices: 1,
                  position: 0,
                  visible: 1,
                  available: true,
                },
                {
                  id: 7476055,
                  name: "2 meats",
                  price: 35.0,
                  maxChoices: 1,
                  position: 1000,
                  visible: 1,
                  available: true,
                },
                {
                  id: 7476056,
                  name: "3 meats",
                  price: 37.0,
                  maxChoices: 1,
                  position: 2000,
                  visible: 1,
                  available: true,
                },
              ],
            },
          ],
          images: [
            {
              id: 108307,
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png",
            },
          ],
          available: true,
        },
        {
          id: 1625703,
          name: "Ogro Burger",
          description:
            "180g angus beef burger, homemade molasses barbecue with golden bacon cubes, mozzarella cheese and homemade roasted garlic mayonnaise.",
          price: 33.0,
          position: 2000,
          visible: 1,
          images: [
            {
              id: 108309,
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe292998e.png",
            },
          ],
          available: true,
        },
      ],
    },
    {
      id: 242404,
      name: "Drinks",
      position: 1000,
      visible: 1,
      images: [
        {
          id: 1551,
          image:
            "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
        },
      ],
      items: [
        {
          id: 1625705,
          name: "Caipirinha",
          price: 13.0,
          position: 0,
          visible: 1,
          available: true,
        },
        {
          id: 1004123,
          name: "Red Label",
          price: 13.0,
          position: 1000,
          available: true,
        },
        {
          id: 1004122,
          name: "Smirnoff",
          price: 10.0,
          position: 2000,
          available: true,
        },
        {
          id: 1625706,
          name: "Pink Lemonade",
          price: 12.0,
          position: 3000,
          available: true,
        },
      ],
    },
    {
      id: 242677,
      name: "Desserts",
      position: 2000,
      images: [
        {
          id: 1552,
          image:
            "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe93cb615.png",
        },
      ],
      items: [
        {
          id: 1625704,
          name: "Nutella",
          price: 18.9,
          position: 0,
          visible: 1,
          images: [
            {
              id: 108310,
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbf0bec8fe.png",
            },
          ],
          available: true,
        },
      ],
    },
  ],
};
