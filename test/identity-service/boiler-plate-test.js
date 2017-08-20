const mockFn = jest.fn();

test("test jest spy", () => {
  const a = new mockFn();
  const b = new mockFn();

  expect(mockFn.mock.instances[0] === a).toBeTruthy(); // true
  expect(mockFn.mock.instances[1] === b).toBeTruthy(); // true
})

test("test jest spy reset implementation", () => {
  mockFn.mockReset();

  const mockFnWithImpl = jest.fn().mockImplementation(scalar => 42 + scalar);

  const c = mockFnWithImpl(1);
  const d = mockFnWithImpl(5);

  expect(c === 43);
  expect(c === 47);
  expect(mockFnWithImpl.mock.calls[0][0] === 1).toBeTruthy();
  expect(mockFnWithImpl.mock.calls[1][0] === 5).toBeTruthy();
})

test("test jest spy return value", () => {
  mockFn.mockReset();

  const mockFnWithValues = mockFn
    .mockReturnValue('default')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(mockFnWithValues() == 'first call').toBeTruthy();
  expect(mockFnWithValues() == 'second call').toBeTruthy();
  expect(mockFnWithValues() == 'default').toBeTruthy();
})
