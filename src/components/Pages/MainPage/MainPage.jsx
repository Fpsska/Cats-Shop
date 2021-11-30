import { React, useEffect, useRef } from "react";
import Header from "../../Header/Header";
import CardList from "../../Card/CardLits";
import SvgTemplate from "../../Common/SvgTemplate";
import SortButtonList from "../../SortButton/SortButtonList";
import Preloader from "../../Common/Preloader/Preloader";

const MainPage = (props) => {
  const scrollPoint = useRef();
  const scrollTop = () => {
    scrollPoint.current.scrollIntoView({ top: 0, behavior: "smooth" });
  };

  const fetchRequest = () => {
    props.requestHandler();
  };

  useEffect(() => {
    // correct work, when page is refreshed, FIX!!!
    console.log("mount");
    props.requestHandler();
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <>
      <Header
        catsCount={props.catsCount}
        headerLinks={props.headerLinks}
        isBurgerHidden={props.isBurgerHidden}
        changeScrollStatus={props.changeScrollStatus}
        changeNavDisplay={props.changeNavDisplay}
        changeScrollStatus={props.changeScrollStatus}
      />
      <main ref={scrollPoint}>
        <div className="container">
          <div className="controls">
            <span className="controls__title">Сортировать по:</span>
            <SortButtonList
              sortButtons={props.sortButtons}
              toggleSortCards={props.toggleSortCards}
            />
          </div>
          <div className="gallery">
            {props.isFetching ? (
              <CardList
                cards={props.cards}
                toggleIsFavourite={props.toggleIsFavourite}
              />
            ) : (
              <Preloader />
            )}
            <button className="gallery__button button" onClick={fetchRequest}>
              Показать ещё
            </button>
            <button className="pagination" onClick={scrollTop}>
              <span className="icon">
                <SvgTemplate id="arrow" />
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;