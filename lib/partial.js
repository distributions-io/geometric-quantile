'use strict';

// FUNCTIONS //

var ceil = Math.ceil,
	max = Math.max,
	ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( prob )
*	Partially applies success probability `prob` and returns a function for evaluating the quantile function for a Geometric distribution.
*
* @param {Number} prob - success probability
* @returns {Function} quantile function
*/
function partial( prob ) {

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
		if ( p === 1 ) {
			return 0;
		}
		return max( 0, ceil( ln( 1 - p ) / ln( 1 - prob ) -  ( 1 + 1e-12 ) ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
