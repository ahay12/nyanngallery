import axios from "axios";

const getImages = async (folderPath) => {
  try {
    const cloud_name = import.meta.env.VITE_CLOUD_NAME;
    const api_key = import.meta.env.VITE_API_KEY;
    const api_secret = import.meta.env.VITE_API_SECRET;

    const res = await axios.post("/api/get-images", { folderPath });
    const images = res.data;

    const transformedImages = images.map((image) => {
      const imageUrl = `https://res.cloudinary.com/${cloud_name}/image/upload/c_scale,w_1000,q_auto,f_auto/${image.public_id}.${image.format}`;
      return { ...image, secure_url: imageUrl };
    });

    return transformedImages;
  } catch (err) {
    console.error("Error fetching images:", err);
  }
};

export default getImages;
