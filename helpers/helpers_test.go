package helpers

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestContains(t *testing.T) {
	assert.True(t, Contains([]string{"val1", "val2", "val3"}, "val2"))
	assert.False(t, Contains([]string{"val1", "val2", "val3"}, "val4"))
	assert.True(t, Contains([]int{1, 2, 3}, 2))
	assert.False(t, Contains([]int{1, 2, 3}, 4))
	assert.True(t, Contains([]float64{1, 2, 3}, float64(2)))
	assert.False(t, Contains([]float64{1, 2, 3}, 2))
	assert.False(t, Contains([]float64{1, 2, 3}, 4))
}

func TestToFloat64(t *testing.T) {
	v, err := ToFloat64(1)
	assert.Nil(t, err)
	assert.Equal(t, 1.0, v)

	v, err = ToFloat64("1")
	assert.Nil(t, err)
	assert.Equal(t, 1.0, v)

	v, err = ToFloat64(uint(5))
	assert.Nil(t, err)
	assert.Equal(t, 5.0, v)

	v, err = ToFloat64("1.58")
	assert.Nil(t, err)
	assert.Equal(t, 1.58, v)

	v, err = ToFloat64(1.5)
	assert.Nil(t, err)
	assert.Equal(t, 1.5, v)
}
