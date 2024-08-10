import type { AlbumItem } from "../components/models";
import { doGet } from "../services/utils";

const AlbumService = () => {
  async function getAlbumList() {
    const albumList: Array<AlbumItem> = await doGet(
      "https://api.estuera.com/albums/"
    );
    return albumList;
  }
  return {
    getAlbumList,
  };
};

export { AlbumService };
