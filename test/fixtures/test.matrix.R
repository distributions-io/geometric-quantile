options( digits = 16 )
library( jsonlite )

p = 0.77
probs = 0:24 / 25
y = qgeom( probs, p )

cat( y, sep = ",\n" )

data = list(
	p = p,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
