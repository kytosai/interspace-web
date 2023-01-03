# Intersapce web test

## Introdution

- Demo: https://interspace-web.vercel.app
- Links:
  - Repo mock api: https://github.com/kytosai/interspace-api
  - Repo nexjts to deploy vercel demo: https://github.com/kytosai/interspace-web 
  - Repo test requirement: https://github.com/interspace-obs/frontend-test-for-kytosai 

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

## frontend-test-for-kytosai (Requirement)

Figma file: https://www.figma.com/file/n7ZBXkYi0rbWv2IrXctTcx/FE-Test

Requirement:
  + Can use any Javascript Frameworks to implement
  + The UI must be the same design
  + The UI must be responsive
  + UI functional requirement
    + Search input must have auto-complete function
    + Filter product when clicking on category Item in header menu and sidebar
    + Change products layout list/grid when clicking "layout" icon
    + Sorting products
      + “Recommended” -> Sorting by random
      + “Recent add” -> Sorting by date added
      + “Price” -> Sorting  by Price
    + When clicking on buy now button, the cart counter must be updated
    + Must use API service (Example: https://mockapi.io/). Product data must have at least : product_name, product_descriptions, product_tag, product_category, product_price, product_vote, create_at, year_of_manufacture
    + Must use the state management library such as: Redux, NGXS.
