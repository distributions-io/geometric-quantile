options( digits = 16 )
library( jsonlite )


p = 0.5
probs = seq( 0, 1, 0.01 )
y = qgeom( probs, p )

cat( y, sep = ",\n" )

data = list(
	p = p,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
