'use strict';

// FUNCTIONS //


// QUANTILE //

/**
* FUNCTION: quantile( p, p )
*	Evaluates the quantile function for a Geometric distribution with success probability `p` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} p - success probability
* @returns {Number} evaluated quantile function
*/
function quantile( p, p ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
