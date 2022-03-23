import renderer from 'react-test-renderer';
import { Alert } from '.';

describe('Alert', () => {
    test('renders correctly as error', () => {
        const tree = renderer.create(<Alert type='error' text='Lorem ipsum' />);
        expect(tree).toMatchSnapshot();
    })
    test('renders correctly as success', () => {
        const tree = renderer.create(<Alert type='success' text='Lorem ipsum' />);
        expect(tree).toMatchSnapshot();
    })
    test('renders correctly as notice', () => {
        const tree = renderer.create(<Alert type='notice' text='Lorem ipsum' />);
        expect(tree).toMatchSnapshot();
    })
})