import MediaCard from "../../components/MediaCard";

const data = [
  {
    id: 13,
    mediaSrc: "assets/images/three.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 14,
    mediaSrc: "assets/images/four.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 15,
    mediaSrc: "assets/images/five.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 16,
    mediaSrc: "assets/images/six.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 17,
    mediaSrc: "assets/images/seven.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 1,
    mediaSrc: "assets/images/image1.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 2,
    mediaSrc: "assets/images/one.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 3,
    mediaSrc: "assets/images/two.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 4,
    mediaSrc: "assets/images/image4.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 5,
    mediaSrc: "assets/images/image5.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 6,
    mediaSrc: "assets/images/image6.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 7,
    mediaSrc: "assets/images/image3.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 8,
    mediaSrc: "assets/images/image4.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 9,
    mediaSrc: "assets/images/image5.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 10,
    mediaSrc: "assets/images/image6.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 11,
    mediaSrc: "assets/images/image5.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 12,
    mediaSrc: "assets/images/image6.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
];
export default function MediaList() {

  return (
    <div className="grid gap-2 md:grid-cols-3">
      {data.map((item) => (
        <MediaCard
          key={item.id}
          name={item.name}
          description={item.description}
          mediaSrc={item.mediaSrc}
          type={item.type}
        />
      ))}
    </div>
  );
}
