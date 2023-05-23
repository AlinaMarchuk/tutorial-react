import Home from './Home/Home';
import CustomizedTables from './Table/Table';
import SelectedListItem from './List/List';
import ListScroll from './ListScroll/ListScroll';
import SelectLabels from './Select/Select';

export const App = () => {
  return (
    <div>
      <Home />
      <CustomizedTables />
      {/* <SelectedListItem /> */}
      <ListScroll />
      <SelectLabels />
    </div>
  );
};
