import axios from 'axios';

export interface Language {
  id: number,
  language: string,
  status: string,
  error: string | undefined | undefined
}

export interface GetLanguagesResult {
  languages: {
      [key: string]: Language
  };
}

export async function getLanguages(): Promise<GetLanguagesResult> {
  const url = 'http://localhost:4000/repos/languages'

  const languagesResponse = await axios.get<{data: Language}>(url);

  return {
    languages: languagesResponse.data,
  };
}
