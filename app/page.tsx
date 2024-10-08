import Image from 'next/image';
import CocktailContainer from './components/CocktailContainer';

async function fetchdetails() {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
  );
  console.log(`Response: ${response}`);
  if (response.ok) {
    const responseBody = await response.json();
    //console.log(`data ${data}`);
    //setData(responseBody);
    console.log(`data: ${responseBody}`);
    return responseBody;
  }
}
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const data = await fetchdetails();

  console.log(data.drinks);
  interface Props {
    key: String;
    strDrink: String;
    strDrinkThumb: String;
    idDrink: String;
  }

  return (
    <main className="font-poppins mx-10">
      {data.drinks.map(function (item: Props) {
        return (
          <CocktailContainer
            key={item.idDrink.toString()}
            strDrink={item.strDrink}
            strDrinkThumb={item.strDrinkThumb}
            idDrink={item.idDrink}
          ></CocktailContainer>
        );
      })}
    </main>
  );
}
