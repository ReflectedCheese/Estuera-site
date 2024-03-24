import { doGet } from "../services/utils";

const AlbumService = () => {
  const albumList: Array<AlbumItem> = [
    {
      cover: "/one-more-time.jpg",
      id: 1,
      link: "https://www.youtube.com/watch?v=9f37eu84xn0",
    },
    {
      cover: "/zoomer.jpg",
      id: 2,
      link: "https://www.youtube.com/watch?v=6I1Nt2OCyrs",
    },
    {
      cover: "/night-tremors.jpg",
      id: 3,
      link: "https://youtu.be/07xg0rpn_fQ?si=yBC-Zbn1LSHBcgbT",
    },
    {
      cover: "/isos-19.jpg",
      id: 4,
      link: "https://youtu.be/pyINQlHGj3U?si=tbs_J37Fw5Ylvo6P",
    },
    {
      cover: "/jupiter-impulse.jpg",
      id: 5,
      link: "https://www.youtube.com/watch?v=ueLevnjQ6Fw",
    },
    {
      cover: "/anaphora.jpg",
      id: 6,
      link: "https://www.youtube.com/watch?v=HCgrBSurmlk",
    },
    {
      cover: "/elpida.jpg",
      id: 7,
      link: "https://www.youtube.com/watch?v=bTc2L4KM7Hw",
    },
    {
      cover: "/somnium.jpg",
      id: 8,
      link: "https://www.youtube.com/watch?v=i2K1JPRZrqE",
    },
    {
      cover: "/umbra.jpg",
      id: 9,
      link: "https://www.youtube.com/watch?v=nxp5fcwJw2I",
    },
    {
      cover: "/little-white-lies.jpg",
      id: 10,
      link: "https://www.youtube.com/watch?v=ysCD10oSTQg",
    },
    {
      cover: "/ex-tempore.jpg",
      id: 11,
      link: "https://www.youtube.com/watch?v=UkX4bNY20zg",
    },
  ];

  async function getAlbumList() {
    const albumList: Array<AlbumItem> = await doGet(
      "https://estuera.com/api/albums"
    );
    return albumList;
  }
  return {
    getAlbumList,
  };
};

export { AlbumService };
