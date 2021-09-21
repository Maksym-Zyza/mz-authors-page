import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ error }) {
  return (
    <div>
      {error && (
        <div>
          <h3 className="error">
            Oops, something went wrong. Please try again later.
          </h3>
          <p className="error">Error: {error}</p>
        </div>
      )}
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
