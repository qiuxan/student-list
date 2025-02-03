import React from 'react'
import './Pager.css'

export interface PagerProps {
    current: number;
    total?: number;
    limit?: number;
    panelNumber?: number;
    onPageChange?: (pageNumber: number) => void;
}


/**
 * Pager component
 * @param {object} props - Component props
 * 1. current: number - Current page number
 * 2. total: number - Total number of items
 * 3. limit: number - Number of items per page
 * 4. panelNumber: number - The max number of page numbers to show
 * 5. onPageChange: function - Callback function when page number is clicked
 * 
 
*/ 


const Pager = (props: PagerProps) => {
    const totalPageNumber = calculateTotalPages(props)

    if(totalPageNumber === 0) {
        return null;
    }
    const minPageNumber = getMinPageNumber(props);
    const maxPageNumber = getMaxPageNumber(minPageNumber,totalPageNumber,props);

    const pageNumbers = [];
    for(let i = minPageNumber; i <= maxPageNumber; i++) {
        pageNumbers.push(
            <span 
                key={i} 
                className= {i === props.current ?"item active":"item" }
                onClick={() => {
                    toPage(i, props)
                }}
            >
                {i}
            </span>);
    }
    
    return (
    <>
        <span 
            className={props.current ===1 ?'item disabled':'item'}
            onClick={() => {
                toPage(1, props)
            }}
        >
            Start
        </span>
        <span 
            className={props.current ===1 ?'item disabled':'item'}
            onClick={() => {
                toPage((props.current! - 1)<1?1:props.current! -1, props)
            }}
        >
            Previous
        </span>

        {pageNumbers}

        <span 
            className={props.current ===totalPageNumber ?'item disabled':'item'}
            onClick={() => {
                toPage((props.current! + 1)>totalPageNumber?totalPageNumber:props.current! +1, props)
            }}
        >
            Next
        </span>
        <span 
            className={props.current ===totalPageNumber ?'item disabled':'item'}
            onClick={() => {
                toPage(totalPageNumber, props)
            }}
        >
            End</span>

        <span className='current'>{props.current}</span> / <span>{totalPageNumber}</span>
    </>
  )
}
/**
 * Navigate to the target page
 * @param {*} target - Target page number
 * @param {*} props - Component props
 * 
*/

function toPage(target: number, props: PagerProps) {
    if(target === props.current) return;

    props.onPageChange&& props.onPageChange(target)
}

/**
 * Get the maximum page number
 * @param {*} props - Component props
*/

function getMinPageNumber(props: PagerProps) {
    let min = props.current - Math.floor(props.panelNumber! / 2);

    if(min < 1) {
        min = 1;
    }

    return min;

}  

/**
 * Get the maximum page number
 * @param {*} min - Minimum page number
 * @param {*} pageNumber - Total number of pages
 * @param {*} props - Component props
*/

function getMaxPageNumber(min:number,pageNumber:number,props:PagerProps) {
    let max = min + props.panelNumber! - 1;
    if(max > pageNumber) {
        max = pageNumber;
    }
    return max;

}


/**
 * calculate the total number of pages
 * @param {*} props - Total number of items
*/

function calculateTotalPages(props: PagerProps) {
    const total = props.total ?? 0;
    const limit = props.limit ?? 1;
    return Math.ceil(total / limit);
}

export default Pager