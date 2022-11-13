// import { render, fireEvent } from '@testing-library/react'
// import ShoppingCartproduct from '../components/ShoppingCartproduct'
// import ShoppingCartContext from '../contexts/ShoppingCartContext'
// import '@testing-library/jest-dom'
// import userEvent from '@testing-library/user-event';


// describe(ShoppingCartproduct, () => {

//     it('ShoppingCartproduct should have intial value of 0', () => {
//         //arrange
//         const { getByTestId } = render(<ShoppingCartproduct init={0} />)

//         //act
//         const value = Number(getByTestId('product.quantity').textContent)


//         //assert
//         expect(value).toEqual(0)
//     })

//     it('ShoppingCartproduct should increment by 1 if the increment button is pressed', () => {
//         //arrange
//         const { getByTestId, getByRole } = render(<ShoppingCartproduct init={0} />)
//         const button = getByRole('button', {name: 'incrementQuantity'})
        
//         //act
//         fireEvent.click(button)
//         const value = Number(getByTestId('product.quantity').textContent)
        
//         //assert
//         expect(value).toEqual(1)
//     })
// })