import React from 'react';

// loading spinner
const LoadingSpinner = ({ width, height, ...rest }) => {
    return (
        <div {...rest}>
            <div className="flex justify-center">
                <img className={`${width || 'w-28'} ${height || 'h-28'} inline-block mr-3`} src="/images/spinner.svg" alt="spinner" />
            </div>
        </div>
    );
};

export default LoadingSpinner;