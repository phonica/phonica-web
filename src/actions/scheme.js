export const SET_SCHEME_ID = 'SET_SCHEME_ID';
/**
 * @export
 * @param {any} id
 * @return {void}
 */
export function setSchemeId(id) {
  return {type: SET_SCHEME_ID, data: id};
}
