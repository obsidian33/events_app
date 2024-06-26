import { CatEvent } from "../../../src/components/events/catEvent";

const EventsCatPage = ({ data, pageName }) => <CatEvent data={data} pageName={pageName} />

export default EventsCatPage;

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import('/data/data.json')
  const data = allEvents.filter(ev => ev.city === id)
  console.log(data);
  return {
    props: {
      data,
      pageName: id
    },
  };
}

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map(ev => {
    return {
      params: {
        cat: ev.id,
      },
    };
  });
  console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}