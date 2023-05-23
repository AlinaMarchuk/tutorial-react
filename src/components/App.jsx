import Home from './Home/Home';
import CustomizedTables from './Table/Table';
import SelectedListItem from './List/List';
import ListScroll from './ListScroll/ListScroll';
import SelectLabels from './Select/Select';
import ScrollList from './ScrollList/ScrollList';

export const App = () => {
  return (
    <div>
      <Home />
      <CustomizedTables />
      {/* <SelectedListItem /> */}
      <ListScroll />
      <SelectLabels />
      <ScrollList />
    </div>
  );
};
