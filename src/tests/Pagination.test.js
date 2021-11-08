import React from 'react';
import { Provider } from "react-redux";
import store from '../redux/store';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Pagination from '../components/Pagination';

window.scrollTo = jest.fn();

const renderPagination = () => render(
    <Provider store = {store}>
        <Pagination />
    </Provider>
);

describe('Pagination', () => {
    test('to prev when current page equals 1', () => {
        renderPagination();

        userEvent.click(screen.getByTestId('prev'));

        expect(screen.getByText('1')).toHaveClass('pagination__page-item_active');
    });

    test('to next page', () => {
        renderPagination();

        userEvent.click(screen.getByTestId('next'));

        expect(screen.getByText('2')).toHaveClass('pagination__page-item_active');
    });

    test('go to page 3', () => {
        renderPagination();

        userEvent.click(screen.getByText('3'));

        expect(screen.getByText('3')).toHaveClass('pagination__page-item_active');
    });

    test('to prev when current equals 3', () => {
        renderPagination();

        userEvent.click(screen.getByText('3'));
        userEvent.click(screen.getByTestId('prev'));

        expect(screen.getByText('2')).toHaveClass('pagination__page-item_active');
    });

    test('to next page when current equals 10', () => {
        renderPagination();

        userEvent.click(screen.getByText('10'));
        userEvent.click(screen.getByTestId('next'));

        expect(screen.getByText('10')).toHaveClass('pagination__page-item_active');
    });

});