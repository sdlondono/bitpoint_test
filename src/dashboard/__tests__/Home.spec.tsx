import React from "react";
import HomeScreen from "../screens/Home.screen";
import { render, waitFor, cleanup } from "@testing-library/react-native";
import axios, { AxiosHeaders, AxiosResponse } from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const banks: AxiosResponse = {
  data: [
    {
      description: "Banco Paga Todo es Para Todos",
      age: 10,
      url: "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20",
      bankName: "Paga Todo",
    },
  ],
  status: 200,
  statusText: "OK",
  headers: {},
  config: {
    headers: {} as AxiosHeaders,
  },
};

describe("HomeScreen", () => {
  afterEach(() => {
    cleanup();
  });

  it("render home screen", async () => {
    await waitFor(() => render(<HomeScreen />));
  });

  it("render cards bank", async () => {
    mockedAxios.get.mockResolvedValueOnce(banks);
    const { getByTestId } = await waitFor(() => render(<HomeScreen />));
    const cardBank = getByTestId("card_bank");
    expect(cardBank).toBeTruthy();
  });
  it("render error component", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Error"));
    const { getByTestId } = await waitFor(() => render(<HomeScreen />));
    const errorComponent = getByTestId("error");
    expect(errorComponent).toBeTruthy();
  });
  it("render loading component", async () => {
    mockedAxios.get.mockResolvedValueOnce(banks);
    await waitFor(() => {
      const { getByTestId } = render(<HomeScreen />);
      const loadingComponent = getByTestId("loading");
      expect(loadingComponent).toBeTruthy();
    });
  });
});
