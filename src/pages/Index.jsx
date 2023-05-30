import Carousel from './../components/shared/Carousel';

export default function Index({ data }) {
  return (
    <Carousel
      character_photo={data[0].character_photo}
      cover_photo={data[0].cover_photo}
      title={data[0].title}
      description={data[0].description}
    ></Carousel>
  )
}
