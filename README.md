This is a frontend challenge for QikServe.

## How to run the application

First, install the dependencies:

```bash
npm install
```

And run the project on development mode
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Decisions

### [NextJS](https://nextjs.org/)
[ReactJS Docs](https://react.dev/learn/start-a-new-react-project#nextjs) recommends to use some framework and NextJS is one of those.
It also has a new release that improves performance using Server Side Rendering by default using Server Components.

### [Tailwind](https://tailwindcss.com/)
This framework helps providing utility classes allowing less css files at a cost of lots of classes on components.

### [Radix](https://www.radix-ui.com/)
A framework that gives components with accessibility without any styles. I choose this framework because it would be possible to use some components keeping the same design system.

### [emotion](https://emotion.sh/docs/introduction)
A library to create css-in-js files. This was necessary specially to set hover colors on white label components. Very similar to `styled-component` (another very common css-in-js library). My choice for using the emotion was due to compatibility with NextJS 13 ([Reference](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)).

### [cslx](https://www.npmjs.com/package/clsx)
A library that made it more readable and easier to work with lots of classes and conditional classes.

### ESlint and Prettier
Both to keep a pattern across all the application code.

### ContextAPIs
I choose to use ContextAPI instead a Global State Management library because in my opinion we can limit what part of the application can or can not have access to a data.

## Notes

### View Allergy button
According to Figma, this button will only be visible on mobile devices. I would ask the designer why and try to understand the reason for this.

### Visible and Available properties
On Figma, the dessert section is not shown on the menu list, but it is shown on top of the menu. This specific section don't have the visible property. So I assumed that is not supposed to be shown, so that's why most of the items on `Drink` section is not being rendered.

The available property I add a condition to keep the product visible, but with low opacity and unable to add to cart.

### Item Confirmation Dialog
I thought it would be a good user experience if we provide a confirmation dialog before removing the item from the cart when changing the amount to zero.

### Did not use the company's backgroundColour property
I took this path because this would require some logic to test the contrast between the background and the text color.

### Did not use the position property to sort sections / items
I decide to not make the sort on frontend because it is already sorted and if it wasn't I would ask the backend team if it was possible for them to do this.

## Learnings

### Ellipsis
Necessary to use `min-width: 0` to work if it is inside a flex container. [Reference](https://drafts.csswg.org/css-flexbox/#min-size-auto)

### Jest String Comparison using Intl
Intl format function sometimes uses a non-breaking space, and we need to compare using a non-breaking space as well (`\xa0`)

## Bugs

### RadixUI
There is a bug due to different class id between SSR and client.

### Image
The same happens with `Section` images, but not always.

## ToDo

- Add fallback for Suspense (Skeleton)
- Add ErrorBoundaries for Suspense
- Use Intersection Observer to activate Sections while scrolling
