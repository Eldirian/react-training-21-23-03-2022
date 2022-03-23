import renderer from 'react-test-renderer';
import { Card } from './Card';


describe('Card', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Card />);
        expect(tree).toMatchSnapshot();
    })

})