import { describe } from "node:test";

/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    index: 1,
    role: [
      "Product Strategy",
      "End-to-end Visual + Interaction Design",
      "Frontend Engineering",
    ],
    company: "Rebuildee",
    location: "Remote",
    year: 2023,
    articleTitle: "Fast tracking user onboarding with AI",
    articleDescription:
      "Designed and programmed a new onboarding experience to drive comprehension and improve engagement rates for new users – delivering on a company level initiative of aligning orders with items lost in natural disaster.\nUsing the OpenAI API and a custom trained model, we developed the capability to allow users to upload claims documents, photos and receipts to automatically to pregrenerate their cart and profile. Saving an average of 35 minutes per user.",
    visuals: [
      {
        url: "https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/aa268e7c-97a1-460f-76d7-f155e71c8e00/original",
        alt: "Rebuildee",
        mediaType: "image",
        description:
          "Users can upload any documents related to their claim, such as receipts, photos, or insurance papers.",
      },
      {
        url: "https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/1521fe63-0546-4661-7923-07aa2860c600/original",
        alt: "Rebuildee",
        mediaType: "image",
        description:
          "We use a pre-trained model to extract the information from the documents to generate a cart for the user.",
      },
      {
        url: "https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/5a68f8ea-9266-4038-07ec-958371b4ba00/original",
        alt: "Rebuildee",
        mediaType: "image",
        description:
          "Users can review the cart and make any changes before finalizing onboarding.",
      },
    ],
    displayType: "multi-images",
    References: [
      {
        url: "https://www.rebuildee.com",
        title: "Rebuildee",
        description: "Rebuildee",
      },
    ],
  },
  {
    index: 2,
    role: ["Engineering Management", "Backend Architecture", "Systems Design"],
    company: "Rebuildee",
    location: "Remote",
    year: 2022,
    articleTitle: "Transitioning to a microservices architecture",
    articleDescription:
      "Architected a scalable microservices platform using Node.js, Docker, and AWS ECS, enabling 4x customer growth and handling a 17x increase in API usage. The modular design facilitated rapid feature releases and the integration of a machine-learning recommendation engine, increasing average order value by 23%. Collaborated with cross-functional teams and drove process improvements, resulting in a 30% decrease in time-to-market and strengthening competitive positioning.",
    visuals: [
      {
        url: "https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/17f1364a-b0b3-49ba-941f-1145a1a8b300/largeartwork",
        smallurl:
          "https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/668956ed-fb4b-47d7-c6f9-5aeccc62a500/largeartwork",
        alt: "Rebuildee",
        mediaType: "image",
        description: null,
        bgColor: "#F1F1F1",
      },
    ],
    displayType: "single-image",
    References: [
      {
        url: "https://www.rebuildee.com",
        title: "Rebuildee",
        description: "Rebuildee",
      },
    ],
  },
];
