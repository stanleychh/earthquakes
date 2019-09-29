import matchSorter from 'match-sorter';
import { transformTimeStamp } from '../util/helper';

export const columns = [{
    Header: 'Title',
    id: 'title',
    accessor: d => d.title,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["title"] }),
    filterAll: true,
    width: 300
}, {
    Header: 'Place',
    id: 'place',
    accessor: d => d.place,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["place"] }),
    filterAll: true,
    width: 300
}, {
    Header: 'Type',
    id: 'type',
    accessor: d => d.type,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["type"] }),
    filterAll: true,
    width: 100
}, {
    Header: 'MAG',
    id: 'mag',
    accessor: d => d.mag,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["mag"] }),
    filterAll: true,
    width: 80
}, {
    Header: 'RMS',
    id: 'rms',
    accessor: d => d.rms,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["rms"] }),
    filterAll: true,
    width: 80
}, {
    Header: 'SIG',
    id: 'sig',
    accessor: d => d.sig,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["sig"] }),
    filterAll: true,
    width: 80
}, {
    Header: 'GAP',
    id: 'gap',
    accessor: d => d.gap,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["gap"] }),
    filterAll: true,
    width: 80
}, {
    Header: 'NST',
    id: 'nst',
    accessor: d => d.nst,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["nst"] }),
    filterAll: true,
    width: 80
}, {
    Header: 'time',
    id: "time",
    accessor: d => {
        return transformTimeStamp(d.time)
    },
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["time"] }),
    filterAll: true,
    width: 200
}];
