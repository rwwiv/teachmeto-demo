import { PrismaClient, type Listing, type Review } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const instructorUser = await prisma.user.upsert({
    where: { email: "bryan@teachme.to" },
    update: {},
    create: {
      firstName: "Bryan",
      lastName: "Wave",
      email: "bryan@teachme.to",
      role: "INSTRUCTOR",
      profileImg:
        "https://images.unsplash.com/photo-1669151030267-7e7f82c3b2a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      instructor: {
        create: {
          verified: true,
          openings: [
            new Date(2023, 3, 12, 10, 0),
            new Date(2023, 3, 12, 12, 0),
            new Date(2023, 3, 12, 13, 0),
            new Date(2023, 3, 13, 10, 0),
            new Date(2023, 3, 13, 11, 0),
          ],
        },
      },
    },
  });

  let listing: Listing | null;

  const instructor = await prisma.instructor.findUniqueOrThrow({
    where: { userId: instructorUser.id },
  });

  listing = await prisma.listing.findFirst({
    where: {
      instructorId: instructor.id,
    },
  });

  if (!listing) {
    listing = await prisma.listing.create({
      data: {
        instructor: {
          connect: {
            id: instructor.id,
          },
        },
        title:
          "Learn to Surf with a Professional Surfer & Experienced Teacher. Let's Shred!",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        sessionLengthMin: 60,
      },
    });
  }

  const reviewUsers = [];

  for (let index = 0; index < 32; index++) {
    const user = await prisma.user.upsert({
      where: { email: `sgray${index}@example.com` },
      update: {},
      create: {
        firstName: "Steve",
        lastName: "Gray",
        email: `sgray${index}@example.com`,
        role: "USER",
        customer: {
          create: {},
        },
      },
    });
    reviewUsers.push(user);
  }

  let fourCounter = 4; // Create some 4 star reviews to bring score down from 5
  for (const user of reviewUsers) {
    const score = fourCounter > 0 ? 4 : 5;
    const cust = await prisma.customer.findUniqueOrThrow({
      where: {
        userId: user.id,
      },
    });

    let review: Review | null;

    review = await prisma.review.findFirst({
      where: {
        listingId: listing.id,
        customerId: cust.id,
      },
    });

    if (!review) {
      review = await prisma.review.create({
        data: {
          score,
          title: "Bryan was fantastic!",
          content:
            "Dude taught me how to SMASH a ball. I couldn't be happier with the lesson. He was a total stud. Honestly I'd like to date him too. How handsome.",
          listing: {
            connect: {
              id: listing.id,
            },
          },
          customer: {
            connect: {
              id: cust.id,
            },
          },
        },
      });
    }
    fourCounter--;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
