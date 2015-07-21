'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( p )
*	Partially applies success probability `p` and returns a function for evaluating the quantile function for a Geometric distribution.
*
* @param {Number} p - success probability
* @returns {Function} quantile function
*/
function partial( p ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Geometric distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
