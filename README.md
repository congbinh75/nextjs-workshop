# NextJS Demo
A simple React application built for NextJS Fundamentals course.

## Getting Started

First, run the development server:

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Features

### Dashboard

Route: `/` or `/dashboard`

Show a grid of available articles.

### Categories

Route: `/categories/[name]`

Show a grid of articles belong to certain category.

Can be accessed by clicking category name on article cards.

### Article/Blog

Route: `/blog/[id]`

Display content of an article/blog.

### Contact

Route: `/contact`

Show contact information.

Can be accessed via navbar.

### Login

Route `/login`

Show login form.

Can be accessed via navbar.

Default users:
- Email: `johndoe@mail.com`; Password: `johndoe123`
- Email: `janedoe@mail.com`; Password: `janedoe123`

### Admin

Route `/route`

Show a list of messages left by visitors in Contact page.

Can be accessed after logging in successfully.