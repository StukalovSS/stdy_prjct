import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../__jest__/utils/test-utils";
import App from "../src/App";

beforeAll(() => {});
afterEach(() => {});
afterAll(() =>{});

test("fetches & receives a user after clicking the fetch user button", async () => {
  renderWithProviders(<App />);

  expect(screen.getByText<HTMLDivElement>("The mock")).toBeInTheDocument();
});