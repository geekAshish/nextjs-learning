# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# What is NextJS

# Next.js simplifies the process of building a web application for production

1. Routing
2. API Route
3. Rendering
4. Data Fetching
5. Styling
6. Optimization
7. Dev and prod build system

# Public Folder: Holds all the statics file and images

## 2

# React Server Components contd.

1. Server Components
   In Next.js, all components are Server components by default
   They have the ability to run tasks like reading files or fetching data from a
   database
   However, they don't have the ability to use hooks or handle user interactions
2. Client Components
   To create a Client component, it's necessary to add "use client" at the top of
   the component file
   Client components can't perform tasks like reading files, but they have the
   ability to use hooks and manage interactions

## 3. Routing

# Routing Conventions

1. All routes must be placed inside the app folder
2. Every file that corresponds to a route must be named page.js or page.tsx
3. Every folder corresponds to a path segment in the browser URL

home route -- app/page.tsx
profile -- app/profile/page.tsx
about -- app/about/page.tsx

# Nested route

blog route -- app/blog/first/page.tsx

# dynamic route

products -- app/products/[productId]/page.tsx

# Nested dynamic route

products-review -- app/products/[productId]/reviews/[reviewId]

# Catch all Segments

docs -- app/docs/[...slug]/page.tsx

# Page Not Found

for whole app level: not-found.tsx
for component level: notFound() -- with condition -- you could create a specific page for that
