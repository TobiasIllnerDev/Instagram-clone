# Instagram Clone

A small Instagram-inspired frontend application built with Angular, TypeScript and SCSS.

The project was created to practice Angular fundamentals such as component-based architecture, routing, state management with signals and communication between components.

## Features

* Instagram-inspired post feed
* Multiple posts with images and user information
* Like and unlike posts
* Dynamic like counter
* Add comments to individual posts
* Display existing comments
* Subscriber section
* Contact page
* Navigation between pages using Angular Router
* Component-based application structure

## Tech Stack

* Angular
* TypeScript
* SCSS
* HTML5
* Angular Router
* Angular Signals

## Project Structure

The application is split into several reusable Angular components.

```text
src/app/
├── services/
│   └── subscriber-list.ts
│
├── shared/
│   └── component/
│       ├── contact/
│       ├── main-page/
│       │   └── single-post/
│       └── subscribers/
│
├── app.routes.ts
├── app.html
├── app.scss
└── app.ts
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/TobiasIllnerDev/Instagram-clone.git
```

Navigate into the project directory:

```bash
cd Instagram-clone
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Then open:

```text
http://localhost:4200
```

## Learning Goals

This project was mainly created to practice:

* Building applications with Angular components
* Passing data between parent and child components
* Using inputs and outputs
* Managing UI state with Angular Signals
* Updating data immutably
* Working with Angular Router
* Structuring a small Angular application

## Project Status

This is a learning project focused on practicing Angular fundamentals and frontend application architecture.
