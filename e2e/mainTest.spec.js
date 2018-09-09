describe('Citifyd BDD', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display interface without dynamic data initially', async () => {
    await expect(element(by.id('datepicker'))).toBeVisible();
    await expect(element(by.id('revenueWelcome'))).toBeVisible();
    await expect(element(by.id('revenueOffer'))).toBeNotVisible();
    await expect(element(by.id('revenueDetails'))).toBeNotVisible();
  });

  it('should be visible the datepicker after tap on input', async () => {
    await element(by.id('datepicker')).tap();
    await expect(element(by.type('UIPickerView'))).toBeVisible();
  });

  it('should load data after filter by date', async () => {
    await element(by.id('datepicker')).tap();
    await expect(element(by.type('UIPickerView'))).toBeVisible();
    await element(by.type('UIPickerView')).setColumnToValue(0, 'January');
    await element(by.type('UIPickerView')).setColumnToValue(1, '8');
    await element(by.type('UIPickerView')).setColumnToValue(2, '2016');
    await expect(element(by.text('Confirm'))).toBeVisible();
    await element(by.text('Confirm')).tap();
    await expect(element(by.type('UIPickerView'))).toBeNotVisible();
    await expect(element(by.id('revenueOffer'))).toBeVisible();
  });
})
