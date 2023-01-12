import '@testing-library/jest-dom';

import { render, screen } from '../../jest.utils';
import Story from './Story';

describe('Story', () => {
  it('renders label', () => {
    render(<Story label="Hello" />);
    expect(screen.getByText('Hello', { selector: 'span' })).toBeInTheDocument();
  });

  it('renders quote', () => {
    render(<Story quote="quote" />);
    expect(screen.getByText(`“quote”`, { selector: 'p' })).toBeInTheDocument();
  });

  it('renders text', () => {
    render(<Story text="text" />);
    expect(screen.getByText('text', { selector: 'p' })).toBeInTheDocument();
  });

  it('renders person', () => {
    render(<Story person={{ name: 'person', position: 'job' }} />);
    expect(screen.getByText('person', { selector: 'strong' })).toBeInTheDocument();
    expect(screen.getByText(', job', { selector: 'span' })).toBeInTheDocument();
  });

  it('renders image', () => {
    render(
      <Story
        image={{
          height: 2400,
          src: 'https://cdn.sanity.io/images/h6z8r05l/development/1b2721e94193ac7e282d9b9ddda8a8b653546c53-2400x1600.jpg',
          width: 1600,
          alt: 'hello',
        }}
      />,
    );
    expect(screen.getAllByAltText('hello'));
  });

  it('renders background image', () => {
    render(
      <Story
        backgroundImage={{
          height: 2400,
          src: 'https://cdn.sanity.io/images/h6z8r05l/development/1b2721e94193ac7e282d9b9ddda8a8b653546c53-2400x1600.jpg',
          width: 1600,
          alt: 'hello',
        }}
      />,
    );
    expect(screen.getAllByAltText('hello'));
  });
});
