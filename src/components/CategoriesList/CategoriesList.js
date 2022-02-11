import {useQuery} from "@apollo/client";
import {CATEGORIES} from "../../constants/apolloQueries/queries";

export default function CategoriesList() {
  const {loading, error, data} = useQuery(CATEGORIES());

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categories.map(({name}) => (
      <p key={name}>
        {name}
      </p>
  ));
}
