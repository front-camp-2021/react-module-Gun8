import React  from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changePage} from '../redux';

const Pagination = () => {
    const pagination = useSelector(state => state.pagination);
    const dispatch = useDispatch();
    const pageIndex = pagination.currentPage - 1;

    const toPrevPage = () => {
        if(pagination.currentPage > 1){
            window.scrollTo(0, 0);
            dispatch(changePage(pagination.currentPage - 1));
        }
    };

    const toNextPage = () => {
        if(pagination.currentPage < pagination.totalPages){
            window.scrollTo(0, 0);
            dispatch(changePage(pagination.currentPage + 1));
        }
    };

    const toPage = (num) => {
        if(num !== pagination.currentPage){
            window.scrollTo(0, 0);
            dispatch(changePage(num));
        }
    };

    const getPagesList = () => {
        const pages = [];

        for(let i = 0; i < pagination.totalPages; i++){
            if(i === pageIndex){
                pages.push(<li onClick={() => toPage(i+1)}
                               className="pagination__page-item pagination__page-item_active"
                               key={i}
                >{i+1}</li>);
                continue;
            }

            pages.push(<li onClick={() => toPage(i+1)} className="pagination__page-item" key={i}>{i+1}</li>);
        }

        return pages;
    };

  return(
      <>
      {pagination.totalPages === 0? '' :
        <footer className="pagination">
            <button onClick={toPrevPage} className="pagination__prev" data-testid = "prev" data-element="prev" />
            <ul className="pagination__list" data-element="list">
                {getPagesList()}
            </ul>
            <button onClick={toNextPage} className="pagination__next" data-testid = "next" data-element="next" />
        </footer>
    }
    </>
  )
};

export default Pagination;