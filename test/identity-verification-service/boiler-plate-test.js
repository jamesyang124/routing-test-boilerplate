beforeEach(() => {
  jest.clearAllMocks();
})

const video = {
  play() {
    return true;
  },
};

test("jest.spyOn test", () => {
  const playSpy = jest.spyOn(video, 'play');
  const playOne = video.play();
  const playTwo = video.play();

  expect(playSpy).toHaveBeenCalledTimes(2);
  expect(playOne).toBeTruthy();
})
