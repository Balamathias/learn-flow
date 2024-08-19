# LearnFlow

*LearnFlow* is a product of the **Programmers University**, led by ATO to guide students and persons willing to learn how to code through a career path, to enable them land their dream jobs, or to help them fulfill their ever pondered dreams and passions.

## Tech Stack
Some major technology used in building  this client application is not far from these options:
* React + Typescript with Vite (No SSR)
* Firebase as a BaaS, as well as an authentication system `firebase/auth`, `firebase/firestore`, `firebase/storage`
* Zustand + React-Query as global and highly mutable state managers respectively
* Shadcn-UI for a few built it components like `Sheet`, `Dialog` and `Forms`
* Zod + React Hook forms for proper form validation
* Sonner - A beautiful toast library for realtime updates.
* TailwindCSS for out-of-the box styling.

The entry point to the application is the `main.tsx` file in the `/src` folder. Although the major `Routes` component is imported from `@/components/routes.tsx` file. The `Routes` component is also wrappeed within a `Provider` component for protected routes and authentication purpose, as well as setting the global state on mount.

The application can be said to have three `layouts`.
The `home` route accessible at `/`. Although the major file responsible for this page can be found in `@/pages/landing-page.tsx`. It's corresponding components can be found in the `@/components/home` folder.
* The first layout is the home layout... which is accessible to both authenticated and non-authenticated users.
* The second layout is not far from the file `@/components/auth-root.tsx`. It is banned for authenticated users.
* Finally is the `root.tsx` layout which wraps around all the `/dashboard` routes. It is banned for non-authenticated users.

The data fetchers and all the apis communicating with firebase, exposed via a react-query custom hooks can be found in the `@/firebase/api` folder. The name of the files corresponds to what apis they interact with.

I also implemented a few custom hooks, which are all accessible at `@/hooks`. These hooks do not interact with firebase per se - but browser APIs and the likes.

Every page has its file in the `@/pages` folder. Their corresponding partial components can be found in the `@/components` or `@/components/dashboard` folders as the case may be.

To get started or to run it locally, you can start by:

```git clone https://github.com/balamathias/learn-flow.git```

You can also access the live site on [https://learn-flow-three.vercel.app](https://learn-flow-three.vercel.app)

```cd learn-flow```

Next, run `npm install`

Request for a `.env` file from me: `balamathias05@gmail.com`.

```npm run dev```

Visit [http://localhost:5173](http://localhost:5173), to see the site.

```Tada! Start editing, but ensure you don't make typescript errors!```

**That's all for now**

