import React from 'react';

const Pagination = (props) => {
    const {totalPages = 10, currentPage = 1} = props;
    const pageIndex = currentPage - 1;

    const getPagesList = () => {
        const pages = [];

        for(let i = 0; i < totalPages; i++){
            if(i === pageIndex){
                pages.push(<li className="pagination__page-item pagination__page-item_active">{i+1}</li>);
            }

            pages.push(<li className="pagination__page-item">{i+1}</li>);
        }

        return pages;
    };

  return(
      <footer className="pagination">
          <button className="pagination__prev" data-element="prev" />
          <ul className="pagination__list" data-element="list">
              {getPagesList()}
          </ul>
          <button className="pagination__next" data-element="next" />
      </footer>
  )
};

export default Pagination;