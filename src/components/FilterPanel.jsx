import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../store/filters/filter-selectors";
import {clearFilters, removeFilter} from "../store/filters/filter-actions";


const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters)

  const handleRemove = (filter) => {
    dispatch(removeFilter(filter));
  }

  const handleClear = () => {
    dispatch(clearFilters());
  }

  if (filters.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map(filter =>
              <Badge
                  variant="clearable"
                  key={filter}
                  onClick={() => handleRemove(filter)}
              >
                {filter}
              </Badge>)}
        </Stack>
        <button className='link' onClick={()=>handleClear()}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};