import image1 from "../assets/foto/42.jpg";
import image2 from "../assets/foto/43.jpg";
import image3 from "../assets/foto/13.jpg";

const albumData = [
    {
      id: 1,
      name: "John Doe",
      role: "Wedding Photographer",
      instagramHandle: "@johndoe",
      featured: "/images/john-featured.jpg",
      albumLink: "/album/1",
      albumPhotos: [image1, image2, image3, image3, image2, image1, image2, image1, image3],
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Portrait Photographer",
      instagramHandle: "@janesmith",
      featured: "/images/jane-featured.jpg",
      albumLink: "/album/2",
      albumPhotos: [image1, image1, image1],
    },
  ];
  
  export default albumData;
  