import React from 'react';
import { render } from '@testing-library/react';

//Jest

test('when input is empty, new participants can NOT be added', () => {
    
    render(<Formulario/>)
    
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira o nome dos participantes')
    // encontrar o botão
    const botao = screen.gerByRole('button')
    
    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()

})