import { composeSubtitle, transformTimeStamp, composeHyperlink, getPropertyList } from './helper';

describe('helper', () => {
    describe('composeSubtitle', () => {
        it('should return composed subtitle if `count` and `date` are provided', () => {
            const actual = composeSubtitle(3, 1569864497481);

            const expected = '3 earthquakes happened until 30/09/2019 07:28:17 pm';
            expect(actual).toBe(expected);
        });
    });

    describe('transformTimeStamp', () => {
        it('should return time format if `timestamp` is provided', () => {
            const actual = transformTimeStamp(1569864497481);

            const expected = '30/09/2019 07:28:17 pm';
            expect(actual).toBe(expected);
        });
    });

    describe('composeHyperlink', () => {
        it('should return composed hyper link if `link` and `text` are provided', () => {
            const actual = composeHyperlink('foo', 'bar');

            const expected = '<a href=foo target=\'_blank\' rel=\'noopener noreferrer\'>bar</a>';
            expect(actual).toBe(expected);
        });
    });

    describe('getPropertyList', () => {
        it('should return property array if `data` is provided', () => {
            const data = [
                { properties: {"mag":1.0,"place":"1"} },
                { properties: {"mag":2.5,"place":"11"} }
            ];
            const actual = getPropertyList(data);

            const expected = [{"mag": 1.0, "place": "1"}, {"mag": 2.5, "place": "11"}];
            expect(actual).toMatchObject(expected);
        });
    });
});
