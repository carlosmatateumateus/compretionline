import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();

export default function deleteImage(imageUrl: string | undefined) {
  return new Promise((resolve, reject) => {
    const desertRef = ref(storage, imageUrl);

    deleteObject(desertRef).then(() => {
      resolve('Image was deleted!')
    }).catch((error) => {
      reject(error)
    });
  })
}