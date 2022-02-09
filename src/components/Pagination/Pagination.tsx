import { Products } from 'components';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppSelector } from 'store';
import { Product } from 'types/product';

const Pagination = () => {
  const [currentItems, setCurrentItems] = useState<Product[]>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { filteredData, sort } = useAppSelector((state) => state.products);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 16) % filteredData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + 16;
    setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / 16));
  }, [filteredData, itemOffset, sort]);
  return (
    <div>
      {currentItems && <Products data={currentItems} />}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
