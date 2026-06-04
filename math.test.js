const { suma, multiplica } = require('./math');

test('suma 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(99);
});

test('multiplica 4 x 3 debe ser 12', () => {
    expect(multiplica(4, 3)).toBe(12);
});
