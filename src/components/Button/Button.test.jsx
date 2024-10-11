import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import { describe, it, expect } from 'vitest';

describe('MyButton Component', () => {
  //Test 1 : vérifie que le bouton s'affiche correctement avec ses enfants
  //s'assurer que le contenu dynamique est rendu.
  it('renders the button with children', () => {
    //rendu du composant Button avec le texte "Click Me"
    render(<Button>Click Me</Button>);
    //sélectionne le bouton par son rôle et son texte
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    //vérifie que le bouton est présent dans le document
    expect(buttonElement).toBeInTheDocument(); 
  });

  //Test 2 : vérifie que les styles personnalisés sont appliqués au bouton
  //garantir que les personnalisations fonctionnent comme prévu.
  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'blue' };
    render(<Button style={customStyle}>Styled Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /styled button/i });
    
    // expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
    expect(buttonElement).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
  });

  //Test 3 : vérifie que le bouton est rendu avec le type correct
  //essentiel pour le bon fonctionnement des formulaires.
  it('renders with the correct type', () => {
    render(<Button type="submit">Submit</Button>);
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toHaveAttribute('type', 'submit'); 
  });

  //Test 4 : vérifie que le bouton est rendu comme un bouton par défaut
  //important pour le comportement par défaut et la conformité avec le standard HTML
  it('renders as a button by default', () => {
    render(<Button>Default Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /default button/i });
    expect(buttonElement).toHaveAttribute('type', 'button');
  });
});
