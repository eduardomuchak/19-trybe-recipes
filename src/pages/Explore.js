import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExplorerIcon from '../images/explore.svg';

export default function Explore() {
  const history = useHistory();
  return (
    <>
      <Header pageName="Explore" showProfileImg="true" />
      <section className="flex flex-col mx-4 h-full">
        <img
          className="w-4/5 mx-auto mt-5 mb-4"
          src={ ExplorerIcon }
          alt="Explorer figure"
        />
        <button
          className="font-bold bg-darkblue text-white
            rounded-xl py-3 mt-5 opacity-100
          hover:opacity-90"
          type="button"
          data-testid="explore-foods"
          onClick={ () => { history.push('/explore/foods'); } }
        >
          Explore Foods
        </button>
        <button
          className="font-bold bg-darkblue text-white
            rounded-xl py-3 mt-2 opacity-100
          hover:opacity-90"
          type="button"
          data-testid="explore-drinks"
          onClick={ () => { history.push('/explore/drinks'); } }
        >
          Explore Drinks
        </button>
      </section>
      <Footer />
    </>
  );
}
