import MediaCard from "./MediaCard";

const data = [
  {
    id: 13,
    mediaSrc: "assets/images/three.mp4",
    name: "Abstract Painting",
    description: "A mesmerizing display of swirling colors in motion.",
    type: "video",
    likes: 245,
    shares: 35,
    meta: {
      duration: "2 minutes",
      format: "mp4",
      resolution: "1080p",
      size: "3.2MB",
    },
  },
  {
    id: 14,
    mediaSrc: "assets/images/four.mp4",
    name: "Abstract Painting",
    description:
      "An evocative blend of shapes and shades, creating a visual symphony.",
    type: "video",
    likes: 245,
    shares: 35,
    meta: {
      duration: "2 minutes",
      format: "mp4",
      resolution: "1080p",
      size: "3.2MB",
    },
  },
  {
    id: 15,
    mediaSrc: "assets/images/five.mp4",
    name: "Abstract Painting",
    description: "A dynamic interplay of light and shadow in abstract form.",
    type: "video",
    likes: 245,
    shares: 35,
    meta: {
      duration: "2 minutes",
      format: "mp4",
      resolution: "1080p",
      size: "3.2MB",
    },
  },
  {
    id: 16,
    mediaSrc: "assets/images/six.mp4",
    name: "Abstract Painting",
    description: "An artistic journey through vibrant hues and fluid patterns.",
    type: "video",
    likes: 245,
    shares: 35,
    meta: {
      duration: "2 minutes",
      format: "mp4",
      resolution: "1080p",
      size: "3.2MB",
    },
  },
  {
    id: 17,
    mediaSrc: "assets/images/seven.mp4",
    name: "Abstract Painting",
    description:
      "A bold experiment in color and movement, captivating the eye.",
    type: "video",
    likes: 245,
    shares: 35,
    meta: {
      duration: "2 minutes",
      format: "mp4",
      resolution: "1080p",
      size: "3.2MB",
    },
  },
  {
    id: 1,
    mediaSrc: "assets/images/image1.jpg",
    name: "Abstract Painting",
    description: "A striking composition of abstract forms and vivid colors.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
  },
  {
    id: 2,
    mediaSrc: "assets/images/one.mp4",
    name: "Abstract Painting",
    description:
      "An entrancing video showcasing the beauty of abstract art in motion.",
    type: "video",
    likes: 245,
    shares: 35,
    meta: {
      duration: "2 minut@es",
      format: "mp4",
      resolution: "1080p",
      size: "3.2MB",
    },
  },
  {
    id: 3,
    mediaSrc: "assets/images/two.mp4",
    name: "Abstract Painting",
    description: "A visual feast of abstract shapes dancing across the screen.",
    type: "video",
    likes: 245,
    shares: 35,
    meta: {
      duration: "2 minutes",
      format: "mp4",
      resolution: "1080p",
      size: "3.2MB",
    },
  },
  {
    id: 4,
    mediaSrc: "assets/images/image4.jpg",
    name: "Abstract Painting",
    description: "A beautiful capture of intricate patterns and textures.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
  },
  {
    id: 5,
    mediaSrc: "assets/images/image5.jpg",
    name: "Abstract Painting",
    description: "A serene blend of soft colors and abstract forms.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
  },
  {
    id: 6,
    mediaSrc: "assets/images/image6.jpg",
    name: "Abstract Painting",
    description:
      "A vibrant explosion of colors creating a stunning abstract piece.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
  },
  {
    id: 7,
    mediaSrc: "assets/images/image3.jpg",
    name: "Abstract Painting",
    description: "A harmonious mix of bold strokes and delicate details.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
  },
  {
    id: 8,
    mediaSrc: "assets/images/image4.jpg",
    name: "Abstract Painting",
    description:
      "A captivating display of abstract artistry with dynamic colors.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
    },
  },
  {
    id: 9,
    mediaSrc: "assets/images/image5.jpg",
    name: "Abstract Painting",
    description: "A beautiful medley of abstract elements in perfect harmony.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
  },
  {
    id: 10,
    mediaSrc: "assets/images/image6.jpg",
    name: "Abstract Painting",
    description:
      "An exquisite blend of colors and shapes creating a visual delight.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
  },
  {
    id: 11,
    mediaSrc: "assets/images/image5.jpg",
    name: "Abstract Painting",
    description: "A bold and vibrant abstract piece that draws the eye.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
  },
  {
    id: 12,
    mediaSrc: "assets/images/image6.jpg",
    name: "Abstract Painting",
    description: "An intricate play of patterns and colors in abstract form.",
    type: "image",
    likes: 245,
    shares: 35,
    meta: {
      dimensions: "1920x1080",
      format: "jpg",
      colorDepth: "24-bit",
      size: "3.2MB",
    },
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
          likes={item.likes}
          shares={item.shares}
          meta={item.meta}
        />
      ))}
    </div>
  );
}
