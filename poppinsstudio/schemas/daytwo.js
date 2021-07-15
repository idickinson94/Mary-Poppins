export default {
  name: "daytwo",
  title: "Festival Program Day 2",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Entertainer Name",
      type: "string",
    },
    {
      name: "location",
      title: "Location of Performance",
      type: "string",
    },
    {
      name: "time",
      title: "Time of Performance",
      type: "string",
    },
    {
      name: "description",
      title: "Entertainer Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "tickets",
      title: "Ticket Link",
      type: "string",
    },
    {
      name: "image",
      title: "Entertainer Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
