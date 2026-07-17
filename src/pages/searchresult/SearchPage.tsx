import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { ResultType, SortType, ViewType } from "../../types/search";
import { mockProperties } from "../../data/mockProperties";
import { mockBuilders } from "../../data/mockBuilders";
import { mockTraders } from "../../data/mockTraders";

import Toolbar from "../../components/filterresult/Toolbar";
import MapView from "../../components/filterresult/MapView";
import PropertyGridCard from "../../components/filterresult/property/PropertyGridCard";
import PropertyListCard from "../../components/filterresult/property/PropertyListCard";
import BuilderGridCard from "../../components/filterresult/builder/BuilderGridCard";
import BuilderListCard from "../../components/filterresult/builder/BuilderListCard";
import TraderGridCard from "../../components/filterresult/trader/TraderGridCard";
import TraderListCard from "../../components/filterresult/trader/TraderListCard";


const GRID = "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
const LIST = "grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2 xl:grid-cols-3";

const renderResults = (view: ViewType, resultType: ResultType) => {
  if (view === "map") return <MapView />;

  if (resultType === "property") {
    return view === "list" ? (
      <div className={LIST}>
        {mockProperties.map((item) => <PropertyListCard key={item.id} item={item} />)}
      </div>
    ) : (
      <div className={GRID}>
        {mockProperties.map((item) => <PropertyGridCard key={item.id} item={item} />)}
      </div>
    );
  }

  if (resultType === "builder") {
    return view === "list" ? (
      <div className={LIST}>
        {mockBuilders.map((item) => <BuilderListCard key={item.id} item={item} />)}
      </div>
    ) : (
      <div className={GRID}>
        {mockBuilders.map((item) => <BuilderGridCard key={item.id} item={item} />)}
      </div>
    );
  }

  // trader
  return view === "list" ? (
    <div className={LIST}>
      {mockTraders.map((item) => <TraderListCard key={item.id} item={item} />)}
    </div>
  ) : (
    <div className={GRID}>
      {mockTraders.map((item) => <TraderGridCard key={item.id} item={item} />)}
    </div>
  );
};

const SearchPage = () => {
  const [view, setView] = useState<ViewType>("list");
  const [sort, setSort] = useState<SortType>("featured");
  const [searchParams] = useSearchParams();

  const resultType: ResultType =
    (searchParams.get("type") as ResultType | null) ?? "property";

  const total =
    resultType === "property" ? mockProperties.length
    : resultType === "builder" ? mockBuilders.length
    : mockTraders.length;

  return (
    <div className="min-h-screen bg-[#F8F4EE] py-24 font-helvetica">
      <div className="mx-auto px-[5%]">
        <Toolbar
          view={view}
          setView={setView}
          sort={sort}
          setSort={setSort}
          total={total}
        />
        <div className="mt-8">{renderResults(view, resultType)}</div>
      </div>
    </div>
  );
};

export default SearchPage;
