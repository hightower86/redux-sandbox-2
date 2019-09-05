export const actions = {
  inc: { type: 'INC' },
  dec: { type: 'DEC' },
  rnd: { type: 'RND', payload: Math.floor(Math.random() * 10) }
};
