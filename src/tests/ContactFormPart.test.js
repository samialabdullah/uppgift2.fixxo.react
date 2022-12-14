import { render, screen, fireEvent, getByTestId, getByRole, getByAltText, getAllByTestId, getAllByRole } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import ContactFormPart from '../Parts/ContactFormPart';
import userEvent from '@testing-library/user-event';

describe(ContactFormPart, () => {

    it('will display error if user tries to submit without entering correct input', () => {
        render(<ContactFormPart />);
       
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

       
        const textarea = screen.getByTestId('commentsError').textContent;
        
    })

    it('will display success alert if sucessfull submit', () => {
        
        const user = { name: 'test', email: 'test@test.com', comment: 'testing this functionality' };

        render(<ContactFormPart />);
        
        const nameField = screen.getByPlaceholderText('Your Name');
        const emailField = screen.getByPlaceholderText('Your Mail');
        const commentField = screen.getByPlaceholderText('Comments');

       
        userEvent.type(nameField, user.name);
        userEvent.type(emailField, user.email);
        userEvent.type(commentField, user.comment);

        
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        
        expect(screen.getByTestId('success')).toBeInTheDocument();
    })
});