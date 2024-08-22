import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const blurhash =
  "LGF5}YkCMdR*~q%LtRofRjRjRjRj";

const ImageList = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const result = await fetch("https://picsum.photos/v2/list/");
      const data = await result.json();
      setImages(data);
    };

    if (images.length < 1) {
      fetchImages();
    }
  }, []);

  if (images.length < 1) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View>
    </View>
  );
};

export default ImageList;
