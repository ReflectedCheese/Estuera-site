import { doGet } from "../services/utils";

const AlbumService = () => {
  const albumList: Array<AlbumItem> = [
    {
      id: 1,
      cover: "/one-more-time.jpg",
      artist: "Jonas Steur",
      track: "One More Time",
      link: "https://www.youtube.com/watch?v=9f37eu84xn0",
    },
    {
      id: 2,
      cover: "/zoomer.jpg",
      artist: "Jonas Steur",
      track: "The Human Experience",
      link: "https://www.youtube.com/watch?v=6I1Nt2OCyrs",
    },
    {
      id: 3,
      cover: "/night-tremors.jpg",
      artist: "Jonas Steur",
      track: "Night Tremors",
      link: "https://youtu.be/07xg0rpn_fQ?si=yBC-Zbn1LSHBcgbT",
    },
    {
      id: 4,
      cover: "/isos-19.jpg",
      artist: "Jonas Steur",
      track: "Solis",
      link: "https://youtu.be/pyINQlHGj3U?si=tbs_J37Fw5Ylvo6P",
    },
    {
      id: 5,
      cover: "/jupiter-impulse.jpg",
      artist: "Estuera",
      track: "Jupiter Impulse",
      link: "https://www.youtube.com/watch?v=ueLevnjQ6Fw",
    },
    {
      id: 6,
      cover: "/anaphora.jpg",
      artist: "Estuera",
      track: "Anaphora",
      link: "https://www.youtube.com/watch?v=HCgrBSurmlk",
    },
    {
      id: 7,
      cover: "/elpida.jpg",
      artist: "Estuera",
      track: "Elpida",
      link: "https://www.youtube.com/watch?v=bTc2L4KM7Hw",
    },
    {
      id: 8,
      cover: "/somnium.jpg",
      artist: "Leon Bolier & Estuera",
      track: "Somnium",
      link: "https://www.youtube.com/watch?v=i2K1JPRZrqE",
    },
    {
      id: 9,
      cover: "/umbra.jpg",
      artist: "Estuera",
      track: "Umbra",
      link: "https://www.youtube.com/watch?v=nxp5fcwJw2I",
    },
    {
      id: 10,
      cover: "/little-white-lies.jpg",
      artist: "Jonas Steur",
      track: "Little White Lies",
      link: "https://www.youtube.com/watch?v=ysCD10oSTQg",
    },
    {
      id: 11,
      cover: "/ex-tempore.jpg",
      artist: "Steur X 2Sher",
      track: "Ex Tempore",
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
