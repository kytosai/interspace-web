# Intersapce web test

## Requirement

Figma file: https://www.figma.com/file/n7ZBXkYi0rbWv2IrXctTcx/FE-Test

Requirement:

- Can use any Javascript Frameworks to implement
- The UI must be the same design
- The UI must be responsive
- UI functional requirement
  - Search input must have auto-complete function
  - Filter product when clicking on category Item in header menu and sidebar
  - Change products layout list/grid when clicking "layout" icon
  - Sorting products
    - “Recommended” -> Sorting by random
    - “Recent add” -> Sorting by date added
    - “Price” -> Sorting by Price
  - When clicking on buy now button, the cart counter must be updated
  - Must use API service (Example: https://mockapi.io/). Product data must have at least : product_name, product_descriptions, product_tag, product_category, product_price, product_vote, create_at, year_of_manufacture
  - Must use the state management library such as: Redux, NGXS.

## Explain about project

Demo: https://interspace-web.vercel.app/

Build with: Nextjs, Redux, Typescript, SCSS

- Currently some of the free mock api services that I know of are not able to meet my requirements, I decided to build a mock api service on my personal VPS. Because it is a cheap VPS and is in a time when the internet is not stable, sometimes the api will be quite slow, if there is an error, please contact me so I can handle it immediately for the demo.
  - Repo mock api: https://github.com/kytosai/interspace-api
  - Mock api live: https://interspace-api.kytosai.com  

- Regarding this test project in my experience this is a website that will have a complex and highly customizable interface, so I have decided not to use any UI framework. Also because time is limited and some information about UI/UX is not complete, I have tried to complete the project as much as possible. However, there will be a lot of things that are not good, I hope if I can continue to participate in the technical interview, I will have the opportunity to present and answer your any questions about this project.
  - For example: some components have not been optimized for reuse by me (button...).

- Because for the convenience of website demo, I would like to put the source code on my personal repo to deploy on vercel. In addition, I have put a version on the `dev` branch in the repository containing the main requirement.
  - Repo to deploy vercel demo: https://github.com/kytosai/interspace-web
  - Repo test requirement: https://github.com/interspace-obs/frontend-test-for-kytosai

- Through the information about the company described, I am so excited to stand the opportunity to be part of your amazing team. I really hope that you give me the opportunity to contribute my energy to your development journey!

Thank you! Wishing you all a wonderful day!

## Setup for development

- Requirement
  - Nodejs >= v16
- Start mock api (must have)
  - Clone mock api server from https://github.com/kytosai/interspace-api
  - Run `yarn` and `yarn start` to start mock api server on local
  - API will run at `http://localhost:9050`
- Start nextjs web
  - Copy `dev.env` to `.env` or change content of the file to suit your need
  - Run `yarn` for install node package in project
  - Run `yarn dev` for start development


