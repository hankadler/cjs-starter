const sinon = require("sinon");
const assert = require("assert");
const greet = require("../src/greet");

describe("greet works", () => {
  const mockConsole = {};

  before(() => {
    mockConsole.spy = sinon.spy(console, "log");
  });

  after(() => {
    mockConsole.spy.restore();
  });

  it("logs \"Hello there!\" by default", () => {
    greet();
    assert(mockConsole.spy.calledWith("Hello there!"));
  });

  it("logs \"Hello Ada!\" when name=Ada", () => {
    greet("Ada");
    assert(mockConsole.spy.calledWith("Hello Ada!"));
  });
});
