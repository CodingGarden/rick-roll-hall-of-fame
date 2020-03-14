const rolls = ((ctx) => {
  const keys = [...new Set(ctx.keys())];
  return keys.map((item) => ctx(item).default);
})(require.context('./rolls', true, /\.js$/));

export default rolls;
