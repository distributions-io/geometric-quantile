'use strict';

// FUNCTIONS //

var ceil = Math.ceil,
	max = Math.max,
	ln = Math.log;


// QUANTILE //

/**
* FUNCTION: quantile( p, prob )
*	Evaluates the quantile function for a Geometric distribution with success probability `prob` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} prob - success probability
* @returns {Number} evaluated quantile function
*/
function quantile( p, prob ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	if ( p === 1 ) {
		return 0;
	}
	return max( 0, ceil( ln( 1 - p ) / ln( 1 - prob ) - ( 1 + 1e-12 ) ) );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
