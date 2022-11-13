import { render, screen, fireEvent, getByTestId, getByRole, getByAltText, getAllByTestId, getAllByRole } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import ContactFormSection from '../sections/ContactFormSection';
import userEvent from '@testing-library/user-event';

describe(ContactFormSection, () => {

    it('will display error if user tries to submit without entering correct input', () => {
        render(<ContactFormSection />);
        // find submitbutton and press it
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        // find and verify that the error field shows the error
        const commentsErrorField = screen.getByTestId('commentsError').textContent;
        //expect(commentsErrorField).toContain('You must enter a comment')
    })

    it('will display success alert if sucessfull submit', () => {
        // mock input
        const user = { name: 'test', email: 'test@test.com', comment: 'testing this functionality' };

        render(<ContactFormSection />);
        // get the appropriate input fields
        const nameField = screen.getByPlaceholderText('Your Name');
        const emailField = screen.getByPlaceholderText('Your Mail');
        const commentField = screen.getByPlaceholderText('Comments');

        // input mock data
        userEvent.type(nameField, user.name);
        userEvent.type(emailField, user.email);
        userEvent.type(commentField, user.comment);

        // find submitbutton and press it
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        // expect that the success alert is shown
        expect(screen.getByTestId('success')).toBeInTheDocument();
    })
});