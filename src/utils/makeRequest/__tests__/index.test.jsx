import {
  BACKEND_URL,
  UPDATE_BLOG_DATA,
} from "./../../../constants/apiEndPoints";
import axios from "axios";
import { mockAllSongsData} from "../../../mocks/allSongsData";
import makeRequest from "../makeRequest";
import { GET_SONGS_DATA,UPDATE_LIKES_PER_SONG_ID } from "../../../constants/apiEndPoints";
import { ERROR_ROUTE } from "../../../constants/routes";

jest.mock("axios");

describe("makeRequest", () => {
  const mockedAxios = axios ;
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should make API call with appropriate request options and return response body when only endpoint is specified", async () => {
    axios.mockResolvedValue({
      data:mockAllSongsData}
    );
    expect(axios).not.toHaveBeenCalled();
    const response = await makeRequest({...GET_SONGS_DATA});
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: GET_SONGS_DATA.url,
      method: GET_SONGS_DATA.method,
      headers: {
        authorization: 'Bearer QWlzaHdhcnlhIE4=',
      },
    });
    expect(response).toEqual(mockAllSongsData);
  }); //similarly for liked songs

  it("should make API call with appropriate request options and return response body when both endpoint and request body are specified", async () => {
   axios.mockResolvedValue({
      data:{ count: 2,
        like: true, }}
    );
    expect(axios).not.toHaveBeenCalled();
    const response = await makeRequest(UPDATE_LIKES_PER_SONG_ID('cd3cc1e3-e1e0-4ccd-bc67-747648985838'), {
      data: { like:true },
    });
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: UPDATE_LIKES_PER_SONG_ID('cd3cc1e3-e1e0-4ccd-bc67-747648985838').url,
      method: UPDATE_LIKES_PER_SONG_ID('cd3cc1e3-e1e0-4ccd-bc67-747648985838').method,
      data: { like:true },
      headers: {
        authorization: 'Bearer QWlzaHdhcnlhIE4=',
      },
    });
    expect(response).toEqual( { count: 2,
      like: true, });
  });
  it("should navigate to error page with status code when API call returns error status code", async () => {
    const mockNavigate = jest.fn();
    axios.mockRejectedValueOnce({ response: { status: 500 } });
    expect(mockNavigate).not.toBeCalled();
    await makeRequest(
      UPDATE_LIKES_PER_SONG_ID('cd3cc1e3-e1e0-4ccd-bc67-747648985838'),
      {
        data: { count: 2,
          like: true, },
      },
      mockNavigate
    );
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/500`);
  });
  it("should navigate to error page without status code when API call returns error without status code", async () => {
    const mockNavigate = jest.fn();
    axios.mockRejectedValueOnce({});
    expect(mockNavigate).not.toBeCalled();
    await makeRequest(
      UPDATE_LIKES_PER_SONG_ID('cd3cc1e3-e1e0-4ccd-bc67-747648985838'),
      {
        data: { count: 2,
          like: true, },
      },
      mockNavigate
    );
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith({ERROR_ROUTE});
  });
});
