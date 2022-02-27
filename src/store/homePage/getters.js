/*
export function someGetter (state) {
}
*/

export function getTopNews(state) {
  console.log(state.topNews, "state");
  return state.topNews;
}
