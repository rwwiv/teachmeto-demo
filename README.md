# TeachMe.To Demo Application

This demo application for teachme.to is a TypeScript [T3 stack](https://create.t3.gg/) app using the following:

- [Prisma](https://www.prisma.io/) (PostgreSQL backend)
- [Chakra UI](https://chakra-ui.com/)
- [tRPC](https://trpc.io/)

## Setup

1. Copy `.env.example` to a new `.env` file
    > **_Note:_** this app assumes access to a PostgreSQL database as defined in the .env.example file)

    ```sh
    cp .env.example .env
    ```

2. Install project dependencies

    ```sh
    npm install
    ```

3. Run any Prisma migrations
    > _This will also seed the database with expected values_

    ```sh
    npx prisma migrate dev
    ```

4. Run application
    > _By default the app will run on localhost:3000_

    ```sh
    npm run dev
    ```

## Notable Simplifications

This demo app makes some concessions to simplicity that would not be viable in a real application. Some of these are listed below:

- Availability for an instructor is a simple list of Datetime objects in the database schema.
- Users are stubs without auth fields.
- The app has no useful landing page.
- Listing images are static and not tied to the listing model.
- The listing video and it's thumbnail are static local assets.
- The 404 page follows the system theme but the rest of the app does not.
- Most buttons simply alert on click.
- Time panel is simply at bottom of page on mobile.
- Extra listing images are hidden on mobile.
