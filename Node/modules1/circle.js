const { PI } = Math;

exports.area = (radius) => PI * radius ** 2;

exports.circumference = (radius) => 2 * PI * radius;

exports.volume = (radius) => (4/3) * PI * (radius ** 2 * radius);