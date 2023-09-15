


export const STORE_TWINKLE = 'TEST_SETTING_IN_APP_READ_IN_CAT';
export const setTwinkle = (value) => ({
  type: 'TEST_SETTING_IN_APP_READ_IN_CAT',
  payload: value,
});


export const STORE_SHEET_DATA = 'STORE_SHEET_DATA';

export function storeSheetData(data) {
  return {
    type: STORE_SHEET_DATA,
    payload: data,
  };
}