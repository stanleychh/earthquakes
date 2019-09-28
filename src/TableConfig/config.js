import matchSorter from 'match-sorter';
import Moment from "moment";

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
    width: 150
}, {
    Header: 'Tsunami',
    id: 'tsunami',
    accessor: d => d.tsunami,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["tsunami"] }),
    filterAll: true,
    width: 100
}, {
    Header: 'RMS',
    id: 'rms',
    accessor: d => d.rms,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["rms"] }),
    filterAll: true,
    width: 100
}, {
    Header: 'SIG',
    id: 'sig',
    accessor: d => d.sig,
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["sig"] }),
    filterAll: true,
    width: 100
}, {
    Header: 'time',
    id: "time",
    accessor: d => {
        return Moment(d.time)
            .local()
            .format("DD-MM-YYYY hh:mm:ss a")
    },
    filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["time"] }),
    filterAll: true,
    width: 300
}];
